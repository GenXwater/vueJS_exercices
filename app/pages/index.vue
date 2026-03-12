<template>
  <div class="row align-items-start">
    <div v-for="actu in data.results" class="card" style="width: 18rem;">
      <img :src="actu.image_url" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ actu.title }}</h5>
        <p class="card-text">{{ actu.description }}</p>
        <a :href="actu.link" class="btn btn-primary">Lire la suite</a>
      </div>
    </div>
  </div>
      
</template>

<script setup>
const { data } = await useFetch('/api/news')
</script>
