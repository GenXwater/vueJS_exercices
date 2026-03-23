<template>
    <h1 class="ma-0 mb-4">Liste des Projets</h1>
    <v-container>
        <!--- Liste de projets -->
        <v-row>
            <template v-for="leProjet in data"> 
                    <v-col cols="12" md="4">
                        <project-single :project="leProjet" />
                    </v-col>

            </template>
        </v-row>
    </v-container>
    
</template>

<script setup lang="ts">
import ProjectSingle from '~/components/ProjectSingle.vue';

    const { data, status, error, refresh } = await useFetch(`http://localhost:3002/projects`)
</script>