package services

import (
	"context"
	"time"
	// "tes-module/db"

)

type Properti struct {
    IdProperti      string    `json:"id_properti"`
    NamaProperti    string    `json:"nama_properti"`
    HargaDasar      int       `json:"harga_dasar"`
    Harga2022       int       `json:"harga_2022"`
    Harga2021       int       `json:"harga_2021"`
    Harga2020       int       `json:"harga_2020"`
    Harga2019       int       `json:"harga_2019"`
    Tipe            string    `json:"tipe"`
    Area            int       `json:"area"`
    Kondisi         string    `json:"kondisi"`
    Alamat          string    `json:"alamat"`
    BiayaSewa       int       `json:"biaya_sewa"`
    Pengali         int       `json:"pengali"`
    DeskripsiBisnis string    `json:"deskripsi_bisnis"`
    DeskripsiPribadi string   `json:"deskripsi_pribadi"`
    NamaAgen        string    `json:"name_agen"`
    NomorAgen       string    `json:"nomor_agen"`
    LatPosition     float32   `json:"lat_position"`
    LongPosition    float32   `json:"long_position"`
    LinkMap         string  `json:"link_map"`
    CreatedAt       time.Time `json:"created_at"`
    UpdatedAt       time.Time `json:"updated_at"`
}

func (c *Properti) GetAllProperti() ([]*Properti, error) {
    query := `SELECT * FROM properti`
    rows, err := db.Query(context.Background(), query)

    if err != nil {
        return nil, err
    }

    var propertis []*Properti
    for rows.Next() {
        var properti Properti
        err := rows.Scan(
            &properti.IdProperti,
            &properti.NamaProperti,
            &properti.HargaDasar,
            &properti.Harga2022,
            &properti.Harga2021,
            &properti.Harga2020,
            &properti.Harga2019,
            &properti.Tipe,
            &properti.Area,
            &properti.Kondisi,
            &properti.Alamat,
            &properti.BiayaSewa,
            &properti.Pengali,
            &properti.DeskripsiBisnis,
            &properti.DeskripsiPribadi,
            &properti.NamaAgen,
            &properti.NomorAgen,
            &properti.LatPosition,
            &properti.LongPosition,
            &properti.LinkMap,
            &properti.CreatedAt,
            &properti.UpdatedAt,
        )
        if err != nil {
            return nil, err
        }
        propertis = append(propertis, &properti)
    }
    return propertis, nil
}

func (c *Properti) GetPropertiById(id string) (*Properti, error){
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
    defer cancel()

	var properti Properti


	query := `SELECT * FROM properti WHERE id_properti=$1`
	row, err := db.Query(ctx, query, id)
	if err != nil {
        return nil, err
    }


    defer row.Close()
	if row.Next() {
		err := row.Scan(
			&properti.IdProperti,
			&properti.NamaProperti,
			&properti.HargaDasar,
			&properti.Harga2022,
			&properti.Harga2021,
			&properti.Harga2020,
			&properti.Harga2019,
			&properti.Tipe,
			&properti.Area,
			&properti.Kondisi,
			&properti.Alamat,
			&properti.BiayaSewa,
			&properti.Pengali,
			&properti.DeskripsiBisnis,
			&properti.DeskripsiPribadi,
			&properti.NamaAgen,
			&properti.NomorAgen,
			&properti.LatPosition,
			&properti.LongPosition,
			&properti.LinkMap,
			&properti.CreatedAt,
			&properti.UpdatedAt,
		)

		if err != nil {
			return nil, err
		}
	}

	return &properti, nil

}

func (c *Properti) CreateProperti(properti Properti) (*Properti, error){
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
		INSERT INTO properti (
			id_properti, 
			nama_properti, 
			harga_dasar, 
			harga_2022, 
			harga_2021, 
			harga_2020, 
			harga_2019, 
			tipe, 
			area, 
			kondisi, 
			alamat, 
			biaya_sewa, 
			pengali, 
			deskripsi_bisnis, 
			deskripsi_pribadi, 
			name_agen, 
			nomor_agen, 
			lat_position, 
			long_position, 
			link_map, 
			created_at, 
			updated_at
		) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) 
		RETURNING *
	`
	_,err := db.Exec(
		ctx,
		query,
		properti.IdProperti,
		properti.NamaProperti,
		properti.HargaDasar,
		properti.Harga2022,
		properti.Harga2021,
		properti.Harga2020,
		properti.Harga2019,
		properti.Tipe,
		properti.Area,
		properti.Kondisi,
		properti.Alamat,
		properti.BiayaSewa,
		properti.Pengali,
		properti.DeskripsiBisnis,
		properti.DeskripsiPribadi,
		properti.NamaAgen,
		properti.NomorAgen,
		properti.LatPosition,
		properti.LongPosition,
		properti.LinkMap,
		time.Now(),
		time.Now(),
	)
	if err != nil {
		return nil, err
	}

	return &properti, nil

}

