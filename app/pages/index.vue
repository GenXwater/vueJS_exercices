<template>
  <div>
    <h1>Actus</h1>
    <p v-if="pending">Chargement...</p>
    <p v-else-if="error">Erreur: {{ error.message }}</p>
    <ul v-else>
      <li v-for="item in data?.results ?? []" :key="item.link">
        <a :href="item.link" target="_blank" rel="noopener">
          {{ item.title }}
        </a>
      </li>
    </ul>
    <h2>Categories (depuis /sources)</h2>
    <p v-if="sourcesPending">Chargement...</p>
    <p v-else-if="sourcesError">Erreur: {{ sourcesError.message }}</p>
    <ul v-else>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/news', {
  query: {}
})

const {
  data: sourcesData,
  pending: sourcesPending,
  error: sourcesError
} = await useFetch('/api/news-sources')

const categories = computed(() => {
  const set = new Set()
  const results = sourcesData.value?.results ?? []
  for (const item of results) {
    const cat = item?.category
    if (Array.isArray(cat)) {
      for (const c of cat) {
        if (c) set.add(c)
      }
    } else if (cat) {
      set.add(cat)
    }
  }
  return Array.from(set).sort()
})

watch(
  categories,
  (cats) => {
    if (import.meta.client && cats.length) {
      console.log('NewsData categories:', cats)
    }
  },
  { immediate: true }
)
</script>
