<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/news', {
  query: {}
})
</script>
