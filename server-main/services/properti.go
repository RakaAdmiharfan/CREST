package services

import (
	"context"
	"time"
	// "tes-module/db"

)

type Properti struct {
    IdProperti string `json:"id_properti"`
    BasePrice int16 `json:"base_price"`
    NamaProperti string `json:"nama_properti"`
    Tipe string `json:"tipe"`
    Alamat string `json:"alamat"`
    LatitudePosition float32 `json:"latitude_position"`
    LongitudePosition float32 `json:"longitude_position"`
    Multiplier float32 `json:"multiplier"`
    DeskripsiBisnis string `json:"deskripsi_bisnis"`
    DeskripsiPribadi string `json:"deskripsi_pribadi"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
}

func (c *Properti) GetAllProperti() ([]*Properti, error) {
	// ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	// defer cancel()
	query := `SELECT * FROM properti`
	rows, err := db.Query(context.Background(), query)

	if err != nil{
		return nil, err
	}

	// var alamat string
	var propertis []*Properti
	for rows.Next(){
		var properti Properti
		err := rows.Scan(
            &properti.IdProperti,
            &properti.BasePrice,
            &properti.NamaProperti,
            &properti.Tipe,
            &properti.Alamat,
            &properti.LatitudePosition,
            &properti.LongitudePosition,
			&properti.Multiplier,
			&properti.DeskripsiBisnis,
			&properti.DeskripsiPribadi,
            &properti.CreatedAt,
            &properti.UpdatedAt,
        )
		if err != nil {
			return nil, err
		}
		propertis = append(propertis, &properti)
		// values, err := rows.Values()
        //     if err != nil {
        //         log.Fatal("Error")
        //     }
		// alamat = values[0].(string)
	}
	return propertis, nil
}

func (c *Properti) CreateProperti(properti Properti) (*Properti, error){
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
        INSERT INTO propertis (idProperti, basePrice, namaProperti, tipe, alamat, latitudePosition, longitudePosition, multiplier, deskripsiBisnis, deskripsiPribadi, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *
    `

	_,err := db.Exec(
		ctx,
		query,
		properti.BasePrice,
		properti.NamaProperti,
		properti.Tipe,
		properti.Alamat,
		properti.LatitudePosition,
		properti.LongitudePosition,
		properti.Multiplier,
		properti.DeskripsiBisnis,
		properti.DeskripsiPribadi,
        time.Now(),
        time.Now(),
	)
	if err != nil {
		return nil, err
	}

	return &properti, nil

}

