import numpy as np

from tensorflow import keras


def create_sequence(ts, n_steps):
    X, y = [], []
    for i in range(len(ts)):
        end_idx = i + n_steps
        if end_idx >= len(ts):
            break

        seq_x, seq_y = ts[i:end_idx], ts[end_idx]
        X.append(seq_x)
        y.append(seq_y)

    return np.array(X), np.array(y)


def create_lstm_model(n_steps):
    input_layer = keras.Input(shape=(n_steps, 1))
    x = keras.layers.LSTM(10)(input_layer)
    output_layer = keras.layers.Dense(1)(x)

    model = keras.Model(input_layer, output_layer)
    model.compile(loss="mape", optimizer="adam")

    return model
