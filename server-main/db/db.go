package db

import(
	"database/sql"
	"time"
	"context"
	"fmt"
    // "github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
    // "github.com/lib/pq"

)

type DB struct {
	DB *pgxpool.Pool
}

var dbConn = &DB{}

const maxOpenDbConn = 10
const maxIdleDbConn = 5
const maxDbLifetime = 5 * time.Minute

func ConnectPostgres(dsn string) (*DB, error) {
	d, err := pgxpool.New(context.Background(), dsn)
	if err != nil{
		return nil, err
	}
	// d.SetMaxOpenConns(maxOpenDbConn)
	// d.SetMaxIdleConns(maxIdleDbConn)
	// d.SetConnMaxLifetime(maxDbLifetime)

	// err = pingDB(d)
	if err != nil {
		return nil, err
	}

	dbConn.DB = d
	return dbConn, nil
}

func pingDB(d *sql.DB) error{
	err := d.Ping()
	if err != nil{
		fmt.Println("Error", err)
		return err
	}
	fmt.Println("Ping db succesfully")
	return nil
}