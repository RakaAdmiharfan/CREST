-- Add up migration script here
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS properti (
    "id_properti" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    "nama_properti" varchar NOT NULL,
    "harga_dasar" INT NOT NULL,
    "harga_2022" INT NOT NULL,
    "harga_2021" INT NOT NULL,
    "harga_2020" INT NOT NULL,
    "harga_2019" INT NOT NULL,
    "tipe" varchar NOT NULL,
    "area" INT NOT NULL,
    "kondisi" varchar NOT NULL,
    "alamat" varchar NOT NULL,
    "biaya_sewa" INT NOT NULL,
    "pengali" INT NOT NULL,
    "deskripsi_bisnis" varchar NOT NULL,
    "deskripsi_pribadi" varchar NOT NULL,
    "name_agen" varchar NOT NULL,
    "nomor_agen" varchar NOT NULL,
    "lat_position" FLOAT NOT NULL,
    "long_position" FLOAT NOT NULL,
    "link_map" varchar NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO properti (
    "id_properti",
    "nama_properti",
    "harga_dasar",
    "harga_2022",
    "harga_2021",
    "harga_2020",
    "harga_2019",
    "tipe",
    "area",
    "kondisi",
    "alamat",
    "biaya_sewa",
    "pengali",
    "deskripsi_bisnis",
    "deskripsi_pribadi",
    "name_agen",
    "nomor_agen",
    "lat_position",
    "long_position",
    "link_map",
    "created_at",
    "updated_at"
)
VALUES (
    DEFAULT,                  -- id_properti will be automatically generated
    'Property Name',         -- Replace with the property name
    1000,                     -- Replace with the harga_dasar value
    2000,                     -- Replace with the harga_2022 value
    1800,                     -- Replace with the harga_2021 value
    1600,                     -- Replace with the harga_2020 value
    1400,                     -- Replace with the harga_2019 value
    'Property Type',         -- Replace with the tipe value
    200,                      -- Replace with the area value
    'Good Condition',         -- Replace with the kondisi value
    'Property Address',       -- Replace with the alamat value
    500,                      -- Replace with the biaya_sewa value
    2,                        -- Replace with the pengali value
    'Business Description',   -- Replace with the deskripsi_bisnis value
    'Personal Description',   -- Replace with the deskripsi_pribadi value
    'Agent Name',             -- Replace with the name_agen value
    'Agent Number',           -- Replace with the nomor_agen value
    123.456,                  -- Replace with the lat_position value
    789.012,                  -- Replace with the long_position value
    'link',                   -- Replace with the link_map value
    NOW(),                    -- Use the current timestamp for created_at
    NOW()                     -- Use the current timestamp for updated_at
);


