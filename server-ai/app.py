from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import src.controller.model as model_controller
import src.database.connector as db_connector

app = Flask(__name__)
connection = db_connector.connect_db()
cursor = connection.cursor()

@app.route("/api/v1/train", methods=["POST"])
def train_model():
    return model_controller.train_model(cursor)

@app.route("/api/v1/predict/<property_id>")
def predict(property_id):
    return model_controller.predict(cursor, str(property_id))

@app.route("/api/v1/evaluate/<property_id>")
def evaluate(property_id):
    return model_controller.evaluate(cursor, str(property_id))

if __name__ == "__main__":
    app.run(debug=True)