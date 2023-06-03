from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Ruta para obtener todos los datos
@app.route('/data', methods=['GET'])
def get_data():
    with open('data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

# Ruta para obtener un dato específico
@app.route('/data/<id>', methods=['GET'])
def get_single_data(id):
    with open('data.json', 'r') as file:
        data = json.load(file)
        for item in data:
            if item['id'] == id:
                return jsonify(item)
        return jsonify({'message': 'Data not found'})

# Ruta para crear un nuevo dato
@app.route('/data', methods=['POST'])
def create_data():
    new_data = request.get_json()
    with open('data.json', 'r+') as file:
        data = json.load(file)
        data.append(new_data)
        file.seek(0)
        json.dump(data, file, indent=4)
    return jsonify({'message': 'Data created successfully'})

# Ruta para actualizar un dato existente
@app.route('/data/<id>', methods=['PUT'])
def update_data(id):
    updated_data = request.get_json()
    with open('data.json', 'r+') as file:
        data = json.load(file)
        for item in data:
            if item['id'] == id:
                item.update(updated_data)
                file.seek(0)
                json.dump(data, file, indent=4)
                return jsonify({'message': 'Data updated successfully'})
        return jsonify({'message': 'Data not found'})

# Ruta para eliminar un dato
@app.route('/data/<id>', methods=['DELETE'])
def delete_data(id):
    with open('data.json', 'r+') as file:
        data = json.load(file)
        for i, item in enumerate(data):
            if item['id'] == id:
                data.pop(i)
                file.seek(0)
                json.dump(data, file, indent=4)
                return jsonify({'message': 'Data deleted successfully'})
        return jsonify({'message': 'Data not found'})

if __name__ == '__main__':
    app.run(debug=True)
