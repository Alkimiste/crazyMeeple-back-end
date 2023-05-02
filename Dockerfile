# Utilisez l'image Node.js 14
FROM node:14

# Installer les clients mongodb
RUN apt-get update && apt-get install -y mongo-tools


# Créez le répertoire de travail
RUN mkdir /app

# Définissez le répertoire de travail à /app
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY . /app/

# Installez les dépendances
RUN npm install

# Exposez le port 3000
EXPOSE 3000

# Spécifiez l'utilisateur qui exécute l'application
USER node

# Démarrez l'application
CMD [ "npm", "start" ]