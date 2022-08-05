# Villes-de-France

Application permettant de lister les villes française en fonction d'une recherche.

## INSTALLATION

`git clone https://github.com/damienh972/Villes-de-France.git`

Le repo se compose d'un dossier backen et d'un dossier front end.

### BACKEND
Depuis la racine du projet:
`cd backend` 
`npm install` pour installer les dépendances du projet
`npm run start` pour demarrer le serveur local de l'api sur http://localhost:8080

ROUTES DISPONIBLES:
http://localhost:8080/cities pour les 100 premieres villes (ordre alphabetique)
http://localhost:8080/cities?search=<ma-recherche> pour les 100 premieres villes commençant par la recherche desirée.

L'api est déployéé ici https://villes-de-france-backend.herokuapp.com/ avec les meme endpoints ci-dessus.

### FRONTEND
Depuis la racine du projet:
`cd frontend` 
`npm install` ou `yarn install` pour installer les dépendances du projet.
`npm run start` ou `yarn start`pour demarrer le serveur local de l'api sur http://localhost:3000




