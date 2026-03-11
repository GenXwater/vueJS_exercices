<template>
    <h1>Liste des articles</h1>
    <ul>
        <li v-for="i in 5"><NuxtLink :to="`/blog/article-`+i">Article {{ i }}</NuxtLink></li>
    </ul>>
    <NuxtLink to="/">Accueil</NuxtLink>
</template>
