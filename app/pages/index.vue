<template>
  <div>
    <h1>Actus</h1>
    <p v-if="pending">Chargement...</p>
    <p v-else-if="error">Erreur: {{ error.message }}</p>
    <p v-else>
      {{ data }}
    </p>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/news', {
  query: {
    language: 'en',
    category: 'technology'
  }
})
</script>
