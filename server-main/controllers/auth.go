package controllers

import (
	// 	"log"
	"encoding/json"
	"fmt"
	"strings"

	//  "github.com/golang-jwt/jwt"
	"net/http"
	// "time"

	"tes-module/helpers"
	"tes-module/services"

	"golang.org/x/crypto/bcrypt"
)

func Signup(writer http.ResponseWriter, req *http.Request) {
	var newUser services.User

	authHeader := req.Header.Get("Authorization")
	if strings.Contains(authHeader, "Bearer") {
		tokenStr := strings.Replace(authHeader, "Bearer ", "", -1)
		ok, err := services.VerifyToken(tokenStr)
		if err == nil && ok {
			resData := map[string]string{
				"message": "already signed in",
			}

			helpers.WriteJSON(writer, http.StatusBadRequest, resData)
			return
		}
	}

	err := json.NewDecoder(req.Body).Decode(&newUser)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	err = newUser.SaveNewUser()
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusInternalServerError)
		return
	}

	token, err := services.GenerateToken(newUser)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusInternalServerError)
		return
	}

	resData := map[string]string{
		"token": token,
	}

	helpers.WriteJSON(writer, http.StatusOK, resData)
}

func Login(writer http.ResponseWriter, req *http.Request) {
	var userData *services.User

	authHeader := req.Header.Get("Authorization")
	if strings.Contains(authHeader, "Bearer") {
		tokenStr := strings.Replace(authHeader, "Bearer ", "", -1)
		ok, err := services.VerifyToken(tokenStr)

		if err == nil && ok {
			resData := map[string]string{
				"message": "already signed in",
			}

			helpers.WriteJSON(writer, http.StatusBadRequest, resData)
			return
		}
	}

	err := json.NewDecoder(req.Body).Decode(&userData)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	userDb, err := userData.GetUserByEmail()
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	if len(userDb.Password) < 59 {
		err := fmt.Errorf("invalid user")

		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(userDb.Password), []byte(userData.Password))
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusInternalServerError)
		return
	}

	token, err := services.GenerateToken(*userData)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		helpers.ErrorJSON(writer, err, http.StatusInternalServerError)
		return
	}

	resData := map[string]string{
		"token": token,
	}

	helpers.WriteJSON(writer, http.StatusOK, resData)
}

func CheckLoggedIn(writer http.ResponseWriter, req *http.Request) {
	authHeader := req.Header.Get("Authorization")

	if !strings.Contains(authHeader, "Bearer") {
		err := fmt.Errorf("unauthorized user")

		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	tokenStr := strings.Replace(authHeader, "Bearer ", "", -1)
	ok, err := services.VerifyToken(tokenStr)

	if !ok || err != nil {
		err := fmt.Errorf("unauthorized user")

		helpers.ErrorJSON(writer, err, http.StatusBadRequest)
		return
	}

	resData := map[string]string{
		"message": "authorized",
	}

	helpers.WriteJSON(writer, http.StatusOK, resData)
}
