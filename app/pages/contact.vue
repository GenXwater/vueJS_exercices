<template>
    <h1>Page de contact</h1>
    <p>Utilisez ce formulaire pour envoyer votre message</p>
    <NuxtLink to="/">Accueil</NuxtLink>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: `custom` //permet explicitement de choisir le layout souhaité (donc plus de header ni de footer en l'occurrence)
    })
</script>