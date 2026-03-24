<template>
  <v-card
    class="mx-auto"
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
      <v-btn color="orange" text="Voir" @click="GoToProject(project.id)"></v-btn>

      <v-btn color="orange" text="Fermer"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  type Project = {
    id: string
    name: string
    desc: string
  }
  type ProjectProps = {
      project: Project;
  }

  const props = defineProps<ProjectProps>();

  const getRandomImage = () => {
      return "https://random.imagecdn.app/300/240";
  }

  const GoToProject = (id:any) => {
    console.log(id)
  }
</script>