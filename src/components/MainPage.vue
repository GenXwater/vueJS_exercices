<template>
    Page
    {{ storeRecette }}
</template>

<script setup lang="ts">
    import { useRecetteStore } from '@/stores/recette';

    const storeRecette = useRecetteStore()
</script>