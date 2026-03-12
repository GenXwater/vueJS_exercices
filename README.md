# Micro site d'actu avec Nuxt 3 (NewsData)

Ce projet est un exercice pour aller un peu plus loin avec Nuxt :
- créer un micro site d'actus
- utiliser un endpoint d'API externe
- comprendre le routage (pages)
- structurer un appel API propre côté serveur
- afficher des cartes propres avec Bootstrap

## Objectif
Afficher les derniers articles (technologie, France, langue FR) depuis l'API NewsData, avec un layout simple et responsive.

## Lancer le projet
1. Installer les dépendances.
2. Ajouter la clé API dans l'environnement.
3. Lancer Nuxt.

Exemple de variable d'environnement :
```
NEWSDATA_API_KEY=ta_cle
```

## Concepts clés appris

### 1) Routage automatique avec `pages/`
Nuxt crée les routes automatiquement à partir des fichiers dans `app/pages`.
- `app/pages/index.vue` -> `/`
- `app/pages/contact.vue` -> `/contact`

Tu n'écris pas de configuration de routes à la main : Nuxt le fait pour toi.

### 2) `runtimeConfig` : séparer clé privée et config publique
Dans `nuxt.config.ts`, on stocke :
- la clé API côté serveur (privée)
- l'URL de base côté client (publique)

Extrait :
```ts
runtimeConfig: {
  apiSecret: process.env.NEWSDATA_API_KEY,
  public: {
    apiBase: 'https://newsdata.io/api/1'
  }
}
```

Pourquoi ?
- `apiSecret` ne doit jamais être exposée au navigateur
- `public.apiBase` peut être visible côté client

### 3) Créer une route API côté serveur
On utilise `server/api` pour faire une route interne Nuxt. Ici :
- fichier `server/api/news.get.ts`
- route dispo : `/api/news`

Exemple :
```ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  return $fetch(`${config.public.apiBase}/latest`, {
    params: {
      apikey: config.apiSecret,
      q: query.q ?? 'ai',
      category: query.category ?? 'technology',
      language: query.language ?? 'fr',
      country: query.country ?? 'fr',
      size: query.size ?? 10
    }
  })
})
```

Idée clé :
- le navigateur appelle `/api/news`
- le serveur ajoute la clé et appelle NewsData
- la clé reste privée

### 4) Utiliser `useFetch` côté page
Dans `app/pages/index.vue`, on appelle l'API interne :
```ts
const { data, pending, error } = await useFetch('/api/news')
```

Tu récupères :
- `data` : les articles
- `pending` : l'état de chargement
- `error` : les erreurs possibles

### 5) Afficher les cartes avec Bootstrap (simple)
On utilise la grille Bootstrap pour un rendu propre et responsive :
```vue
<div class="container py-4">
  <div class="row g-3">
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        ...
      </div>
    </div>
  </div>
</div>
```

Ce que ça fait :
- `container` : largeur lisible
- `py-4` : padding vertical
- `row g-3` : espace entre les cartes
- `col-...` : 1 colonne en mobile, 2 sur tablette, 3 sur desktop

### 6) Bouton toujours en bas à droite
On force le bouton à rester au même endroit pour un rendu propre :
```vue
<div class="card-body d-flex flex-column">
  <h5 class="card-title">...</h5>
  <p class="card-text">...</p>
  <a class="btn btn-primary btn-sm mt-auto align-self-end">
    Lire la suite
  </a>
</div>
```

- `d-flex flex-column` : empile verticalement
- `mt-auto` : pousse le bouton en bas
- `align-self-end` : aligne à droite

## Fichiers importants
- `nuxt.config.ts` : configuration générale + runtimeConfig
- `server/api/news.get.ts` : route API côté serveur
- `app/pages/index.vue` : page d'affichage des articles
- `app/pages/contact.vue` : autre page (exemple de routage)

## Mémo rapide
- Changer la langue : `language: 'fr'` ou `'en'`
- Changer le pays : `country: 'fr'`
- Changer la catégorie : `category: 'technology'`
- Limiter le nombre d'articles : `size: 10`

## Exemple de rendu minimal dans la page
```vue
<template>
  <div class="container py-4">
    <div class="row g-3">
      <div v-for="actu in (data?.results ?? [])" :key="actu.link" class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img :src="actu.image_url" class="card-img-top" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ actu.title.slice(0, 100) }}</h5>
            <p class="card-text">{{ actu.description.slice(0, 300) }}</p>
            <a :href="actu.link" class="btn btn-primary btn-sm mt-auto align-self-end">Lire la suite</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/news')
</script>
```

## En résumé
- Nuxt gère les routes automatiquement.
- `server/api` permet de cacher les clés API.
- `useFetch` simplifie les appels côté page.
- Bootstrap donne un rendu propre en quelques classes.
- Tu as un micro site d'actus simple, clair, et réutilisable.
