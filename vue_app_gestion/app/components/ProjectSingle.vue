<template>
  <v-card
    class="mx-auto"0
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="getRandomImage()"
      cover
    >
      <v-card-title>{{ project.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      10k€
    </v-card-subtitle>

    <v-card-text>
      <div>{{ project.desc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Voir"></v-btn>

      <v-btn color="orange" text="Fermer"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
    type ProjectProps = {
        project: Object;
    }

    const props = defineProps<ProjectProps>();

    const getRandomImage = () => {
        return "https://random.imagecdn.app/300/240";
    }
</script>