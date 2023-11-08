# Utiliza una imagen base de Node.js
FROM node:16.15.1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará tu aplicación
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD [ "node", "src/index.js" ]
