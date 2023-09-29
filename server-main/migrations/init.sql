-- Add up migration script here
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS properti (
    "id_properti" INT PRIMARY KEY,
    "base_price" INT NOT NULL,
    "nama_properti" varchar NOT NULL,
    "tipe" varchar NOT NULL,
    "alamat" varchar NOT NULL,
    "latitude_position" FLOAT NOT NULL,
    "longitude_position" FLOAT NOT NULL,
    "multiplier" FLOAT NOT NULL,
    "deskripsi_bisnis" varchar NOT NULL,
    "deskripsi_pribadi" varchar NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS users (
    "id_user" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
INSERT INTO properti (
        "id_properti",
        "base_price",
        "nama_properti",
        "tipe",
        "alamat",
        "latitude_position",
        "longitude_position",
        "multiplier",
        "deskripsi_bisnis",
        "deskripsi_pribadi"
    )
VALUES (
        1,
        -- Replace with an actual UUID value
        1000,
        -- Replace with the basePrice value
        'Property Name',
        -- Replace with the property name
        'Property Type',
        -- Replace with the property type
        'Property Address',
        -- Replace with the property address
        123.456,
        -- Replace with the latitude position
        789.012,
        -- Replace with the longitude position
        1.234,
        -- Replace with the multiplier value
        'Business Description',
        -- Replace with the business description
        'Personal Description' -- Replace with the personal description
    );