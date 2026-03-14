<template>
    <h1>Article {{ id }}</h1>
    <p>Le Contenu de l'article {{ id }}</p>
    <p>ozdeoizdoizjedoized oizedoijzdoized zedoizedoized zedizjed zedoizjedz edizedoizejd zedozedijzed</p>
    <NuxtLink to="/blog">Liste des articles</NuxtLink><br /><br />
    <SimpleButton><NuxtLink to="/">Accueil</NuxtLink></SimpleButton>

    {{ route }}
</template>

<script setup lang="ts">
    const route = useRoute()
    const id = route.params.id
</script>