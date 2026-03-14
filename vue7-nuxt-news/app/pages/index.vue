<template>
  <div class="container py-4">
    <div class="row g-3">
      <div
        v-for="actu in (data?.results ?? [])"
        :key="actu.link"
        class="col-12 col-sm-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm">
          <img :src="actu.image_url" class="card-img-top" alt="">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ actu.title.slice(0, 100) }}</h5>
            <p class="card-text">{{ actu.description.slice(0, 300) }}</p>
            <a :href="actu.link" class="btn btn-primary btn-sm mt-auto align-self-end">Lire la suite</a>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script setup>
const { data } = await useFetch('/api/news')
</script>
