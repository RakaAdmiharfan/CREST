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

var coffee services.Coffee

func GetAllCoffees(w http.ResponseWriter, r *http.Request) {
	all, err := coffee.GetAllCoffees()
	if err != nil{
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	helpers.WriteJSON(w, http.StatusOK, helpers.Envelope{"coffees": all})
}

func CreateCoffee(w http.ResponseWriter, r *http.Request){
	var coffeeData services.Coffee
	err := json.NewDecoder(r.Body).Decode(&coffeeData)
	if err!= nil{
		helpers.MessageLogs.ErrorLog.Println(err)
	}
	coffeeCreated, err := coffee.CreateCoffee(coffeeData)
	if err != nil {
		helpers.MessageLogs.ErrorLog.Println(err)
		return
	}
	helpers.WriteJSON(w, http.StatusOK, coffeeCreated)
}