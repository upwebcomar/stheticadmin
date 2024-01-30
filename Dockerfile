# Stage 1: Build
FROM node:20-alpine3.18 AS build
# Directorio donde se mantendran los archivos de la app
WORKDIR /usr/src/app
# Copiar el package.json y el package-lock en nuestro WORKDIR
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar todos los archivos
COPY . .
# Construir la aplicacion lista para produccion, puede no incluir el # flag --prod
RUN npm run build --prod

# Stage 2
FROM nginx:1.25.3-alpine

# Copiar desde la "Etapa" build el contenido de la carpeta build/
# dentro del directorio indicado en nginx
COPY --from=build /usr/src/app/dist/stheticadmin/browser /usr/share/nginx/html
# Copiar desde la "Etapa" build el contenido de la carpeta la 
# configuracion de nginx dentro del directorio indicado en nginx
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Comando docker para crear la imagen
#   docker build --no-cache --progress=plain -t stheticadmin .

# Comando docker para ejecutar el contenedor
#   docker run -d -it -p 80:80/tcp stheticadmin