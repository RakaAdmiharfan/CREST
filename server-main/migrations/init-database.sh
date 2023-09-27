#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$USER" --dbname "$DB_NAME" <<-EOSQL
    CREATE USER postgres_user;
    CREATE DATABASE tes_db;
    GRANT ALL PRIVILEGES ON DATABASE tes_db TO postgres_user;
EOSQL