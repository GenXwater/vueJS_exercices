# Vue 3 + Vitest + Cypress
Guide factuel pour garantir des tests Vitest et Cypress reproductibles.

## 1. Préparer l’environnement
- **Node** : `20.19.x` ou toute version ≥ `22.12.0` (voir `package.json` `engines`) pour rester en phase avec l’écosystème.
- **Navigateurs** : utiliser Chrome/Edge/Brave ou Firefox avec Vue DevTools + formatage personnalisé.
- **Dependencies** : exécuter `npm install` après chaque clone ou modification de `package-lock.json`. Cette commande installe `node_modules` et déclenche `npm run prepare` (=> `cypress install`).

```sh
npm install
```

## 2. Développement local
```sh
npm run dev
```
Vite reste actif, compile les `.vue` à chaud et fournit les mêmes résolutions que les tests. Le typage est assuré par `vue-tsc` via la configuration projet.

## 3. Tests

### 3.1 Vitest – tests unitaires
```sh
npm run test:unit
```
Vitest, runner natif Vite, compile les composants et utilitaires avec les mêmes alias/imports que le dev server avant d’exécuter les specs dans Node. Le mode `--watch` permet un retour immédiat en cas de régression.

### 3.2 Cypress interactif (GUI)
```sh
npm run test:e2e:dev
```
Processus :
1. `vite dev --port 4173`
2. attente de la réponse sur `http://localhost:4173`
3. `cypress open --e2e`

L’interface graphique Cypress s’ouvre : sélectionner la spec à observer, suivre la liste de commandes dans la colonne droite et relancer un test ou une vidéo sans arrêter Vite. Le serveur Vite et la fenêtre Cypress doivent rester ouverts pendant l’inspection des scénarios.

### 3.3 Cypress headless (build obligatoire)
```sh
npm run build
npm run test:e2e
```
**Construction requise avant `test:e2e` :** `npm run build` enchaîne `vue-tsc --build` puis `vite build` pour créer un dossier `dist/` prêt pour la prod. Ensuite, `test:e2e` déclenche `vite preview` sur le port 4173 via `start-server-and-test`, puis `cypress run --e2e` exécute les tests sur ce build.

Sans ce build, les tests headless tournent sur une version non compilée, potentiellement différente de celle déployée. La séquence build → preview → test garantit que le bundle final est validé avant toute mise en production ou CI.

## 4. Checklist de validation
1. `npm install` à la première session ou après chaque modification de `package-lock.json`.
2. Pendant la phase de développement, garder `npm run dev` et/ou `npm run test:unit -- --watch` actifs pour un feedback immédiat.
3. Pour l’analyse des e2e, lancer `npm run test:e2e:dev` et maintenir le serveur Vite tant que la GUI est utilisée.
4. Avant CI ou déploiement : `npm run build` puis `npm run test:e2e` pour tester le bundle final.
5. Comparer avec l’environnement de développement via `npm run test:e2e:dev` si nécessaire pour observer les interactions GUI.
