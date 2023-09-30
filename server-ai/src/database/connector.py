import psycopg2
import os


def connect_db():
    params = {
        "host": os.getenv("HOST"),
        "database": os.getenv("DB_NAME"),
        "user": os.getenv("DB_USER"),
        "password": os.getenv("DB_PASSWORD"),
        "port": os.getenv("DB_PORT")
    }

    connection = psycopg2.connect(**params)
    
    return connection