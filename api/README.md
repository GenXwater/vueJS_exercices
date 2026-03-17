# API Node.js (cours Vue.js)

## Lancer le serveur
```bash
node app.js
```

## But du projet
Créer une petite API HTTP en Node.js (sans framework) pour alimenter une application Vue.js.

L'API lit des données JSON locales (utilisateurs et projets), expose des routes simples, et prépare une structure claire en couches :
- `app` : serveur HTTP et routage
- `api` : logique de route
- `entities` : accès aux données
- `db` : fichiers de données JSON

## Ce qui a été fait
1. Mise en place d'un serveur HTTP sur le port `3002`.
2. Ajout des en-têtes CORS pour autoriser les appels depuis le front.
3. Création d'une route `GET /users`.
4. Lecture des utilisateurs depuis un fichier JSON local.
5. Masquage du mot de passe dans la réponse API.
6. Préparation des routes `/checkUser` et `/projects` (placeholders pour la suite).
7. Correction d'un bug dans `entities/users.js` : variable de chemin non définie (`path`), désormais correctement utilisée pour la lecture du fichier.

## Architecture et rôle de chaque fichier (hors package)

### `app.js`
Point d'entrée du serveur.

Responsabilités :
- créer le serveur HTTP (`createServer`),
- définir les headers JSON + CORS,
- lire l'URL et la méthode HTTP,
- router les requêtes selon `url.pathname`,
- appeler `readUsers()` pour `GET /users`,
- renvoyer la réponse au format JSON.

Route actuellement opérationnelle :
- `GET /users`

Routes prévues mais non implémentées :
- `/checkUser`
- `/projects`

### `api/usersApi.js`
Couche API dédiée aux utilisateurs.

Responsabilités :
- exposer la fonction `readUsers()`,
- déléguer la récupération des données à la couche `entities`,
- demander explicitement le masquage des mots de passe (`getUsers(true)`).

### `entities/users.js`
Couche d'accès aux données utilisateurs.

Responsabilités :
- lire `./db/users.json`,
- parser le JSON,
- retourner les données brutes ou masquées selon le paramètre `hidePass`.

Comportement actuel :
- `getUsers(true)` retourne les utilisateurs avec `pass: "******"`.
- `getUsers(false)` retourne les valeurs originales.

Note : la fonction utilise `fs/promises` (`readFile`) pour de l'I/O asynchrone.

### `db/users.json`
Base de données locale des utilisateurs (fichier JSON).

Contenu actuel :
- un utilisateur administrateur de test avec :
  - `id`
  - `email`
  - `pass`
  - `isAdmin`

### `db/project.json`
Base de données locale des projets (fichier JSON).

Contenu actuel :
- un projet de test avec :
  - `id`
  - `name`
  - `desc`
  - `user` (id du propriétaire)

### `README.md`
Documentation du projet (ce fichier).

Objectif :
- expliquer l'intention du projet,
- décrire la structure,
- documenter l'état actuel d'implémentation,
- faciliter les prochaines étapes.

### `.gitignore`
Fichier Git pour exclure les éléments qui ne doivent pas être versionnés.

## Flux actuel d'une requête `/users`
1. Le client appelle `GET http://localhost:3002/users`.
2. `app.js` détecte la route `/users` et la méthode `GET`.
3. `app.js` appelle `readUsers()` dans `api/usersApi.js`.
4. `readUsers()` appelle `getUsers(true)` dans `entities/users.js`.
5. `entities/users.js` lit `db/users.json`, masque les mots de passe, retourne les données.
6. `app.js` renvoie la réponse JSON au client.

## État actuel
Le socle API est en place et fonctionnel pour la lecture des utilisateurs.
Les routes de connexion (`/checkUser`) et des projets (`/projects`) restent à implémenter.
