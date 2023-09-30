import os

import pandas as pd
import numpy as np

from flask import jsonify
from tensorflow import keras
from sklearn.metrics import mean_absolute_percentage_error

import src.functions.helper as helper

MULTIPLIER = 10e9


def train_model(cursor):
    try:
        folder_path = "/src/models"
        if os.path.exists(folder_path) and os.path.isdir(folder_path):
            for filename in os.listdir(folder_path):
                file_path = os.path.join(folder_path, filename)

                if os.path.isfile(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    os.rmdir(file_path)

        N_STEPS = 3

        query = """
            SELECT id_properti, harga_dasar, harga_2022, harga_2021, harga_2020, harga_2019
            FROM properti
        """
        cursor.execute(query)
        results = cursor.fetchall()

        dfs = []
        ids = []
        for (
            id_properti,
            harga_dasar,
            harga_2022,
            harga_2021,
            harga_2020,
            harga_2019,
        ) in results:
            data = [
                ["2019-01-01", harga_2019 / MULTIPLIER],
                ["2020-01-01", harga_2020 / MULTIPLIER],
                ["2021-01-01", harga_2021 / MULTIPLIER],
                ["2022-01-01", harga_2022 / MULTIPLIER],
                ["2023-01-01", harga_dasar / MULTIPLIER],
            ]

            df = pd.DataFrame(data, columns=["date", "value"])
            df["date"] = pd.to_datetime(df["date"])

            dfs.append(df)
            ids.append(id_properti)

        for idx, df in enumerate(dfs):
            X_train, y_train = helper.create_sequence(df["value"], N_STEPS)
            X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)

            model = helper.create_lstm_model(N_STEPS)
            model.fit(X_train, y_train, epochs=100, verbose=1)

            model.save(f"src/models/model_{ids[idx]}.keras")

        return jsonify({"message": "model trained successfully"}), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500


def predict(cursor, property_id):
    try:
        model = keras.models.load_model(f"src/models/model_{property_id}.keras")

        query = """
            SELECT harga_2021, harga_2022, harga_dasar
            FROM properti
            WHERE id_properti = %s
        """
        cursor.execute(query, (property_id,))
        results = cursor.fetchall()

        X_test = np.array([[x / MULTIPLIER for x in results[0]]])
        X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)
        prediction = model.predict(X_test)

        return jsonify({"prediction": float(prediction * MULTIPLIER)}), 200

    except Exception as e:
        print(e)
        return jsonify({"message": str(e)}), 500
    
def evaluate(cursor, property_id):
    try:
        model = keras.models.load_model(f"src/models/model_{property_id}.keras")

        query = """
            SELECT harga_2020, harga_2021, harga_2022, harga_dasar
            FROM properti
            WHERE id_properti = %s
        """
        cursor.execute(query, (property_id,))
        results = cursor.fetchall()

        X_val = np.array([[x / MULTIPLIER for x in results[0]][:-1]])
        y_val = [results[0][-1]]
        
        X_val = X_val.reshape(X_val.shape[0], X_val.shape[1], 1)
        prediction = model.predict(X_val)
        
        real_pred = float(prediction * MULTIPLIER)
        mape = mean_absolute_percentage_error([real_pred], y_val)

        return jsonify({"mape_score": mape}), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500