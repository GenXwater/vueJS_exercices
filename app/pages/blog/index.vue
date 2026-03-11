<template>
    <h1>Liste des articles</h1>
    <ul>
        <li v-for="i in 5"><NuxtLink :to="`/blog/article-`+i">Article {{ i }}</NuxtLink></li>
        
        <div v-if="status === 'pending'">
            Loading...
        </div>
        <div v-else>
            <li v-for="i in data"><NuxtLink :to="`/blog/article-`+i.id">Article {{ i.title }}</NuxtLink></li>
        </div>
    </ul>>
    <NuxtLink to="/">Accueil</NuxtLink>
    <br />
    {{ data }}
</template>

<script setup lang="ts">
    const { status, data } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
        lazy: true // lazy qui permet de gérer soi-même le temps de chargement des données
    })

    // je peux aussi faire useLazyFetch au lieu de useFetch pour le même comportement


</script>