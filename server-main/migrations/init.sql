-- Add up migration script here
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS properti (
    "id_properti" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    "nama_properti" varchar NOT NULL,
    "harga_dasar" BIGINT NOT NULL,
    "harga_2022" BIGINT NOT NULL,
    "harga_2021" BIGINT NOT NULL,
    "harga_2020" BIGINT NOT NULL,
    "harga_2019" BIGINT NOT NULL,
    "tipe" varchar NOT NULL,
    "area" INT NOT NULL,
    "kondisi" varchar NOT NULL,
    "alamat" varchar NOT NULL,
    "biaya_sewa" BIGINT NOT NULL,
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
VALUES (DEFAULT, 'Rumah alam modern', 7500000000, 7009000000, 6550794000, 6122234000, 5721714000, 'Rumah', 250, 'New', 'dago pakar', 525000000, 1.07, 'Cocok untuk tempat liburan', 'Perumahan Elit, dago pakar, akses jalan bagus', 'Budi', '081290908333', -6.8669765, 107.6358903, 'link', NOW(), NOW()),(DEFAULT, 'Vila hub strategis', 5060000000, 4865384000, 4678254000, 4498321000, 4325309000, 'Rumah', 220, 'Old', 'dago pakar', 202400000, 1.04, 'Cocok untuk disewakan sebagai vila', 'Rumah hub, akses jalan bagus', 'Fitra', '085288771122', -6.866931, 107.636029, 'link', NOW(), NOW()),(DEFAULT, 'Rumah kayu alam', 8250000000, 7638888000, 7073045000, 6549115000, 6063996000, 'Rumah', 250, 'New', 'dago pakar', 660000000, 1.08, 'Cocok untuk disewakan sebagai vila', 'rumah parkiran luas, interior kayu dengan nuansa alam', 'Budi', '081290908333', -6.8664783, 107.6365675, 'link', NOW(), NOW()),(DEFAULT, 'Rumah alam eksklusif', 8160000000, 7661971831, 7194339747, 6755248589, 6342956422, 'Rumah', 240, 'New', 'dago pakar', 530400000, 1.065, 'Cocok untuk disewakan, dapat menampung banyak orang', 'Garasi indoor + carport, rumah tingkat 3', 'Fitra', '085288771122', -6.8664811, 107.6365455, 'link', NOW(), NOW()),(DEFAULT, 'Vila dago luas', 4620000000, 4421052632, 4230672375, 4048490311, 3874153407, 'Rumah', 220, 'Old', 'dago pakar', 207900000, 1.045, 'Bangunan siap renovasi', 'Carport banyak, rumah tingkat 3', 'Budi', '081290908333', -6.8664944, 107.63657, 'link', NOW(), NOW()),(DEFAULT, 'Vila 8 kamar', 13600000000, 12710280374, 11878766705, 11101651126, 10375374884, 'Rumah', 400, 'New', 'dago pakar', 952000000, 1.07, 'Bangunan siap sewa, interior dibuat oleh arsitek profesional, kamar banyak', 'kamar banyak, cocok untuk liburan keluarga besar', 'Vira', '08512125566', -6.8664712, 107.6365544, 'link', NOW(), NOW()),(DEFAULT, 'Rumah nyaman', 5800000000, 5345622120, 4926840663, 4540866971, 4185130849, 'Rumah', 280, 'New', 'dago pakar', 493000000, 1.085, 'Bangunan 1 lantai, taman bagus, cocok untuk spot foto', 'Rumah homy, cocok untuk keluarga kecil berlibur', 'Heri', '082356569111', -6.8664845, 107.6365911, 'link', NOW(), NOW()),(DEFAULT, 'Modern house', 9240000000, 8477064220, 7777123138, 7134975356, 6545848950, 'Rumah', 280, 'New', 'dago pakar', 831600000, 1.09, 'bangunan 3 lantai, eksterior menarik, cocok untuk acara besar', 'Rumah cozy, cocok untuk milenial kelas atas', 'Budi', '081290908333', -6.8664611, 107.6365671, 'link', NOW(), NOW()),(DEFAULT, 'Vila nuansa timur tengah', 5460000000, 5150943396, 4859380562, 4584321285, 4324831401, 'Rumah', 260, 'New', 'dago pakar', 327600000, 1.06, 'Bangunan 3 lantai, eksterior khas timur tengah, garasi indoor', 'Rumah cozy, cocok untuk acara keluarga besar', 'Heri', '082356569111', -6.8664932, 107.6365679, 'link', NOW(), NOW()),(DEFAULT, 'Rumah modern estetik', 8100000000, 7570093458, 7074853699, 6612012803, 6179451218, 'Rumah', 300, 'New', 'dago pakar', 567000000, 1.07, 'Bangunan 2 lantai, garasi indoor, 4 kamar view luar', 'Rumah dengan 4 kamar yang menghadap ke luar, garasi luas indoor, akses jalan bagus', 'Vira', '08512125566', -6.8664413, 107.6365654, 'link', NOW(), NOW()),(DEFAULT, 'Modern glass vila', 6720000000, 6251162791, 5815035154, 5409335027, 5031939560, 'Rumah', 280, 'New', 'dago pakar', 504000000, 1.075, 'Vila pribadi siap sewa, 2 carport, exterior dan interior megah', 'Vila 3 kamar, 2 lantai, carport covered, cozy', 'Budi', '081290908333', -6.866954, 107.636122, 'link', NOW(), NOW()),(DEFAULT, 'Ruko 2 lantai', 5880000000, 5469767442, 5088155760, 4733168149, 4402947115, 'Komersial', 210, 'Old', 'Pasar kaliki', 441000000, 1.075, 'Cocok dijadikan ruko dengan lantai 1 toko dan lantai 2 tempat penghuni', 'Akses jalan bagus, cocok untuk investasi', 'Vira', '08512125566', -6.908958, 107.600172, 'link', NOW(), NOW()),(DEFAULT, 'Rumah strategis', 8160000000, 7555555556, 6995884774, 6477671087, 5997843599, 'Rumah', 340, 'Old', 'Pasar kaliki', 652800000, 1.08, 'Rumah pinggir jalan siap pakai untuk komersial ataupun pribadi, parkiran luas', 'Rumah strategis tengah kota, akses jalan mudah', 'Budi', '081290908333', -6.908981, 107.600288, 'link', NOW(), NOW()),(DEFAULT, 'Rumah bisnis fleksibel', 9860000000, 9087557604, 8375629128, 7719473851, 7114722443, 'Komersial', 350, 'New', 'Pasar kaliki', 838100000, 1.085, 'Akses jalan strategis, tengah kota, siap pakai untuk bisnis ataupun pribadi', 'Rumah strategis tengah kota, akses jalan mudah', 'Heri', '082356569111', -6.908944, 107.600244, 'link', NOW(), NOW()),(DEFAULT, 'Rumah mantan walikota', 6600000000, 6255924171, 5929785944, 5620650184, 5327630506, 'Rumah', 300, 'Old', 'jalan tirtayasa', 363000000, 1.055, 'Akses jalan strategis, tengah kota, siap pakai untuk bisnis cafe atau pribadi, parkiran luas outdoor', 'Rumah strategis, lingkungan nyaman tidak bising, parkiran luas ', 'Heri', '082356569111', -6.90455, 107.614862, 'link', NOW(), NOW()),(DEFAULT, 'Rumah modern jepang', 9180000000, 8660377358, 8170167319, 7707705018, 7271419829, 'Rumah', 340, 'New', 'jl. tirtayasa', 550800000, 1.06, 'Rumah pinggir jalan, bangunan 2 lantai, cocok untuk dijadikan kos-kosan', 'Rumah strategis, kamar banyak, cocok dijadikan kumpul keluarga besar', 'Vira', '08512125566', -6.904661, 107.614672, 'link', NOW(),NOW()),(DEFAULT, 'Rumah sejuk', 5280000000, 4934579439, 4611756485, 4310052790, 4028086720, 'Rumah', 240, 'New', 'Jalan tirtayasa', 369600000, 1.07, 'Rumah 1 lantai, siap pakai untuk bisnis FnB, parkiran luas, akses jalan mudah', 'Rumah homy, cozy 1 lantai, parkiran luas', 'Jaka', '081256569431', -6.904571, 107.6148561, 'link', NOW(), NOW()),(DEFAULT, 'Vila nuansa rumah nenek', 13200000000, 12452830189, 11747953008, 11082974536, 10455636355, 'Rumah', 300, 'Old', 'Jl. Tengku Angkasa', 792000000, 1.06, 'Bangunan 1 lantai strategis siap renov, cocok digunakan bisnis FnB ataupun disewa untuk penghuni', 'Rumah homy, cozy nuansa jawa, terawat', 'Fitra', '085288771122', -6.892249, 107.615367, 'link', NOW(), NOW()),(DEFAULT, 'Rumah dinas perkantoran', 15400000000, 14460093897, 13577552955, 12748876014, 11970775600, 'Rumah', 280, 'New', 'Jl. Tengku Angkasa', 1001000000, 1.065, 'Bangunan 1 lantai perkiran luas, cocok untuk kantor atau rumah dinas', 'Rumah homy, strategis, parkiran luas outdoor', 'Heri', '082356569111', -6.892341, 107.6153578, 'link', NOW(), NOW()),(DEFAULT, 'Rumah alam luas', 19800000000, 18679245283, 17621929512, 16624461804, 15683454532, 'Rumah', 400, 'New', 'Jl. Tengku Angkasa', 1386000000, 1.06, 'Bangunan 1 lantai, parkiran luas, cocok dijadikan bisnis cafe', 'Rumah cozy, view outdoor baik, akses jalan mudah', 'Budi', '081290908333', -6.892651, 107.6153889, 'link', NOW(), NOW()),(DEFAULT, 'Rumah full privasi', 15600000000, 14647887324, 13753884811, 12914445832, 12126240218, 'Rumah', 240, 'New', 'Jl. Tengku Angkasa', 1014000000, 1.065, 'Bangunan 2 lantai, cocok dijadikan bisnis penginapan', 'Rumah 2 lantai, privasi penuh, kamar 5', 'Jaka', '081256569431', -6.8922512, 107.6153541, 'link', NOW(), NOW()),(DEFAULT, 'Rumah cozy anti bising', 14040000000, 13183098592, 12378496330, 11623001249, 10913616196, 'Rumah', 260, 'New', 'Jl. Tengku Angkasa', 912600000, 1.065, 'Bangunan 1 lantai, cocok untuk rumah dinas ataupun disewakan', 'Rumah homy, parkiran luas, taman luas', 'Heri', '082356569111', -6.8922653, 107.6153448, 'link', NOW(), NOW()),(DEFAULT, 'Rumah modern perancis', 17550000000, 16401869159, 15328849681, 14326027739, 13388810971, 'Rumah', 270, 'New', 'Jl. Tengku Angkasa', 1228500000, 1.07, 'Bangunan 2 lantai, cocok untuk investasi ataupun disewakan', 'Rumah homy, eksterior mewah, interor megah, 2 lantai, parkiran luas', 'Jaka', '081256569431', -6.8922711, 107.6153891, 'link', NOW(), NOW()),(DEFAULT, 'Bangunan spesialis FnB', 12000000000, 11162790698, 10383991347, 9659526834, 8985606357, 'Komersial', 250, 'New', 'Jl. Tengku Angkasa', 900000000, 1.075, 'Bangunan 1 lantai, cocok untuk komersial seperti cafe atau toko, parkiran outdoor luas', 'Siap tambah pagar langsung jadi rumah nyaman, parkiran luas, lingkugnan sejuk.', 'Fitra', '085288771122', -6.8922901, 107.6153715, 'link', NOW(), NOW()),(DEFAULT, 'Bangunan 2 lantai', 11000000000, 10526315789, 10073029464, 9639262645, 9224174780, 'Rumah', 250, 'Old', 'Jl. Dipatiukur', 495000000, 1.045, 'Bangunan 2 lantai, siap renovasi, parkiran luas', 'Bangunan 2 lantai, siap renovasi, parkiran luas', 'Budi', '081290908333', -6.892249, 107.6153655, 'link', NOW(), NOW()),(DEFAULT, 'Rumah hijau', 2100000000, 2000000000, 1904761905, 1814058957, 1727675197, 'Rumah', 150, 'Old', 'Buah batu', 105000000, 1.05, 'bangunan 2 lantai, parkiran indoor, cocok untuk dijadikan ruko', 'Bangunan 2 lantai, akses jalan bagus, cozy', 'Heri', '082356569111', -6.948727, 107.643927, 'link', NOW(), NOW()),(DEFAULT, 'Rumah nenek', 4180000000, 3943396226, 3720185119, 3509608603, 3310951512, 'Rumah', 190, 'New', 'Buah batu', 250800000, 1.06, 'Bangunan 1 lantai, parkiran luas, taman luas, cocok untuk dijadikan tempat hiburan atau FnB seperti cafe', 'Bangunan 1 lantai, parkiran luas, homy, cozy, taman bagus', 'Jaka', '081256569431', -6.9487754, 107.6439334, 'link', NOW(), NOW()),(DEFAULT, 'Rumah homy', 4140000000, 3905660377, 3684585262, 3476023832, 3279267766, 'Rumah', 180, 'Old', 'Buah batu', 248400000, 1.06, 'Bangunan 2 lantai, cocok dijadikan perkantoran atau komersial disewakan', 'Rumah 2 lantai, view ke luar bagus, akses jalan abgus', 'Fitra', '085288771122', -6.9487334, 107.6439441, 'link', NOW(), NOW()),(DEFAULT, 'Rumah milenial', 2880000000, 2729857820, 2587542957, 2452647353, 2324784221, 'Rumah', 160, 'New', 'Buah batu', 158400000, 1.055, 'Bangunan 2 lantai, cocok disewakan atau untuk investasi jangka panjang', 'Rumah milenial kantoran, kamar view luar bagus', 'Vira', '08512125566', -6.9487443, 107.6439224, 'link', NOW(), NOW()),(DEFAULT, 'Tanah siap pakai', 400000000, 380952381, 362811791.4, 345535039.4, 329080989.9, 'Tanah', 80, '-', 'Buah batu', 8000000, 1.05, 'Tanah kosong siap pakai untuk bangunan apapun', 'Tanah kosong siap pakai untuk rumah idamanmu!', 'Jaka', '081256569431', -6.9487331, 107.6439346, 'link', NOW(), NOW()),(DEFAULT, 'Tanah hub', 500000000, 476190476.2, 453514739.2, 431918799.3, 411351237.4, 'Tanah', 90, '-', 'Buah batu', 12500000, 1.05, 'Tanah kosong siap pakai untuk bangunan apapun', 'Tanah kosong siap pakai untuk rumah idamanmu!', 'Vira', '08512125566', -6.9487541, 107.6439554, 'link', NOW(), NOW()),(DEFAULT, 'Hidden modern house', 3480000000, 3252336449, 3039566774, 2840716612, 2654875338, 'Rumah', 140, 'Old', 'Buah batu', 243600000, 1.07, 'Bangunan pribadi full privasi cocok untuk rumah dinas atau kantor bisnis', 'Rumah homy, cozy, full privasi, parkiran indoor cukup', 'Jaka', '081256569431', -6.9487665, 107.6439443, 'link', NOW(), NOW()),(DEFAULT, 'Rumah perumahan standar', 1600000000, 1531100478, 1465167922, 1402074566, 1341698150, 'Rumah', 80, 'Old', 'Buah batu', 72000000, 1.045, 'Bangunan siap renovasi, cocok untuk dijadikan tempat sekretariat', 'Untuk kaum milenial yang baru saja ingin punya rumah, homy, cozy', 'Fitra', '085288771122', -6.9487554, 107.6439294, 'link', NOW(), NOW()),(DEFAULT, 'Tanah kosong', 500000000, 476190476.2, 453514739.2, 431918799.3, 411351237.4, 'Tanah', 100, '-', 'Buah batu', 10000000, 1.05, 'Tanah kosong siap pakai untuk bangunan apapun', 'Tanah kosong siap pakai untuk rumah idamanmu!', 'Vira', '08512125566', -6.9487754, 107.6439319, 'link', NOW(), NOW()),(DEFAULT, 'Rumah homy nyaman', 2880000000, 2742857143, 2612244898, 2487852284, 2369383127, 'Rumah', 120, 'New', 'Buah batu', 144000000, 1.05, 'Bangunan 2 lantai, cocok untuk ivestasi ataupun disewakan', 'Bangunan siap huni 2 lantai, homy, cozy, parkiran indoor covered', 'Fitra', '085288771122', -6.9487334, 107.643932, 'link', NOW(), NOW());
CREATE TABLE IF NOT EXISTS users (
    "id_user" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);