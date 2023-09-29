package router


import(
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"tes-module/controllers"
)

func Routes() http.Handler {
	router := chi.NewRouter()
	router.Use(middleware.Recoverer)
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://*", "https://*"},
        AllowedMethods: []string{"GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"},
        AllowedHeaders: []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
        ExposedHeaders: []string{"Link"},
        AllowCredentials: true,
        MaxAge: 300,
	}))

	router.Get("/api/v1/properti", controllers.GetAllProperti)
	router.Get("/api/v1/properti/{id}", controllers.GetPropertiById)
	router.Put("/api/v1/properti/{id}", controllers.UpdateProperti)
	router.Post("/api/v1/properti/properti", controllers.CreateProperti)
	router.Delete("/api/v1/properti/{id}", controllers.DeleteProperti)

	return router
}