package services

import(
	"time"
	"github.com/jackc/pgx/v5/pgxpool"
)

var db *pgxpool.Pool
const dbTimeout = time.Second * 3

type Models struct {
	Properti Properti
	JsonResponse JsonResponse
}

func New(dbPool *pgxpool.Pool) Models{
	db = dbPool
	return Models{}
}