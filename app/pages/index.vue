<template>
    <h1>Page d'accueil</h1>
    <p>ozdeoizdoizjedoized oizedoijzdoized zedoizedoized zedizjed zedoizjedz edizedoizejd zedozedijzed</p>
    <NuxtLink to="/contact">Contact</NuxtLink><br /><br />
    <NuxtLink to="/blog">Blog</NuxtLink><br /><br />
    <SimpleButton>Mon Btn</SimpleButton><br />
    <img src="/copyright-6114655_1280-3092848910.jpg" width="220" /> <!-- depuis /public -->
    <img class="animate__animated animate__headShake" src="~/assets/copyright-6114655_1280-3092848910.jpg" width="220" /> <!-- depuis /assets -->
</template>

<script setup lang="ts">
    useHead({
        link: [{ rel: 'stylesheet', href:`https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`}]
    })
    // encore un autre façon d'injecter la classe CCS, mais juste pour la page concernée.
</script>

<style>
/* @import url("~/assets/test.css");    <---- Une façon d'insérer du style */
</style>