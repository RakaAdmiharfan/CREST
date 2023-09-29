package controllers

import(
	"encoding/json"
	// "errors"
	// "log"
	// "os"
	"net/http"
	"tes-module/services"
	"tes-module/helpers"
	"github.com/go-chi/chi/v5"
)

var properti services.Properti

func GetAllProperti(w http.ResponseWriter, r *http.Request) {
	all, err := properti.GetAllProperti()
	if err != nil{
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	helpers.WriteJSON(w, http.StatusOK, helpers.Envelope{"propertiGetAllProperti": all})
}

func GetPropertiById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	properti, err := properti.GetPropertiById(id)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	helpers.WriteJSON(w, http.StatusOK, properti)
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