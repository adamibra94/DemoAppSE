# Basis-Image
FROM node:16

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# App-Dateien kopieren
COPY . .

# Port und Startbefehl
EXPOSE 3000
CMD ["node", "app.js"]

