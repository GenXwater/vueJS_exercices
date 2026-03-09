<template>
    <h1>Page</h1>
    {{ recettes }}
    <ul>
        <li v-for="r in recettes">{{ r.name  }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { useRecetteStore } from '@/stores/recette';

    const storeRecette = useRecetteStore()
    const recettes = storeRecette.getRecettes
</script>