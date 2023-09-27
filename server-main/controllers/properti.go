package controllers

import(
	"encoding/json"
	// "errors"
	// "log"
	// "os"
	"net/http"
	"tes-module/services"
	"tes-module/helpers"
)

var properti services.Properti

func GetAllProperti(w http.ResponseWriter, r *http.Request) {
	all, err := properti.GetAllProperti()
	if err != nil{
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	helpers.WriteJSON(w, http.StatusOK, helpers.Envelope{"propertiGetAllProperti": all})
}

func CreateProperti(w http.ResponseWriter, r *http.Request){
	var propertiData services.Properti
	err := json.NewDecoder(r.Body).Decode(&propertiData)
	if err!= nil{
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	propertiCreated, err := properti.CreateProperti(propertiData)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		return
	}
	helpers.WriteJSON(w, http.StatusOK, propertiCreated)
}