# Etapa 1: Construcción de la carpeta dist
FROM node:18 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias y construir el proyecto
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente de tu aplicación
COPY . .

# Construye la carpeta dist
RUN npm run build

# Usar una imagen de NGINX como base
FROM nginx:alpine

# Copiar los archivos de la carpeta build generada por `npm run build`
COPY --from=builder /app/build /usr/share/nginx/html
#COPY ./build /usr/share/nginx/html

# Exponer el puerto 80 para el servidor web
EXPOSE 80

# Comando para ejecutar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]