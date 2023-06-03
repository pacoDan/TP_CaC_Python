# Usa una imagen base de node.js
FROM node:18

# # Establece el directorio de trabajo
# WORKDIR /app

# Instala curl para descargar el archivo
RUN apt-get update && apt-get install -y curl

# Descarga el archivo db.json desde la URL y cópialo al directorio /app
RUN curl -o db.json https://raw.githubusercontent.com/pacodan/restaurant/main/db.json

# Instala las dependencias del servidor
RUN npm install json-server

# Expone el puerto 3000 para el servidor json-server
EXPOSE 3000

# Comando para ejecutar el servidor json-server
CMD ["npx", "json-server", "db.json"]