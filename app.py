from flask import Flask, jsonify, request
import json
import os

# Obtener el directorio actual (donde se encuentra app.py)
dir_path = os.path.dirname(os.path.realpath(__file__))

# Construir la ruta completa al archivo db.json
db_path = os.path.join(dir_path, 'db.json')

print(db_path)  # Imprimir la ruta completa

# Cargar datos desde db.json
with open(db_path, 'r') as file:
    data = json.load(file)


app = Flask(__name__)

# # Cargar datos desde db.json
# with open(db_path, 'r') as file:
#     data = json.load(file)

# Ruta para obtener todos los datos
@app.route('/<resource>', methods=['GET'])
def get_all(resource):
    if resource in data:
        return jsonify(data[resource])
    else:
        return jsonify({'message': 'Resource not found'})

# Ruta para obtener un dato específico
@app.route('/<resource>/<id>', methods=['GET'])
def get_single(resource, id):
    if resource in data and id in data[resource]:
        return jsonify(data[resource][id])
    else:
        return jsonify({'message': 'Resource or ID not found'})

# Ruta para crear un nuevo dato
@app.route('/<resource>', methods=['POST'])
def create(resource):
    new_data = request.get_json()
    if resource in data:
        data[resource].append(new_data)
    else:
        data[resource] = [new_data]
    with open('db.json', 'w') as file:
        json.dump(data, file, indent=4)
    return jsonify({'message': 'Data created successfully'})

# Ruta para actualizar un dato existente
@app.route('/<resource>/<id>', methods=['PUT'])
def update(resource, id):
    updated_data = request.get_json()
    if resource in data and id in data[resource]:
        data[resource][id].update(updated_data)
        with open('db.json', 'w') as file:
            json.dump(data, file, indent=4)
        return jsonify({'message': 'Data updated successfully'})
    else:
        return jsonify({'message': 'Resource or ID not found'})

# Ruta para eliminar un dato
@app.route('/<resource>/<id>', methods=['DELETE'])
def delete(resource, id):
    if resource in data and id in data[resource]:
        del data[resource][id]
        with open('db.json', 'w') as file:
            json.dump(data, file, indent=4)
        return jsonify({'message': 'Data deleted successfully'})
    else:
        return jsonify({'message': 'Resource or ID not found'})

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == '__main__':
    app.run(debug=True, port=8080)

