# UiKit - Vue 3 Component Library

Ce projet est une bibliothèque de composants d'interface utilisateur (UI) construite avec **Vue 3**, **Vite** et **TypeScript**.

Il a été conçu pour être intégré comme dépendance dans d'autres applications Vue, en utilisant le mode "Library" de Vite qui externalise Vue pour éviter la duplication de dépendances dans le bundle final.

## Fonctionnalités

- **Configuration Librairie** : Le build est optimisé pour la distribution (formats ES et UMD) avec Vue.js configuré en `external`.
- **Typage TypeScript** : Le point d'entrée et les composants utilisent TypeScript.
- **Installation via Plugin** : Expose une méthode `install` pour un enregistrement global rapide via `app.use()`.

## Composants Disponibles

Les composants sont préfixés par `Tuk` pour éviter les conflits de nommage.

### TukButton

Un composant bouton qui accepte des propriétés de personnalisation (styles, props).

### TukTag

Un composant d'étiquetage (Tag) simple.

## Architecture

L'architecture du projet a évolué comme suit :

1.  **Initialisation** : Création du projet avec le template Vue 3 + Vite.
2.  **Configuration Build** : Adaptation de `vite.config.js` et `package.json` pour compiler en mode librairie.
3.  **Développement Composants** : Ajout progressif des composants `Button` et `Tag`.
4.  **Refactoring** :
    - Migration du point d'entrée vers TypeScript (`src/main.ts`).
    - Mise en place du système d'export de plugin pour l'enregistrement automatique des composants (`TukButton`, `TukTag`).

## Utilisation

Une fois buildé, le projet génère un fichier CSS et des fichiers JS (ESM/UMD) importables.

```typescript
import { createApp } from 'vue'
import UiKit from 'uikit'
import 'uikit/dist/style.css'

const app = createApp(App)
app.use(UiKit) // Enregistre TukButton et TukTag globalement
```
