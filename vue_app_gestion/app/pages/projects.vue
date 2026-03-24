<template>
    <v-container>
        <div class="d-flex align-center justify-space-between mb-4">
            <h1 class="ma-0">Projets</h1>
            <v-btn
                prepend-icon="mdi-plus"
                rounded="pill"
                text="Ajouter"
                @click="dialogAddProject = true"
            />
        </div>

        <!--- Liste de projets -->
        <v-row>
            <template v-for="leProjet in data"> 
                    <v-col cols="12" md="4">
                        <project-single :project="leProjet" />
                    </v-col>
            </template>
        </v-row>

        <!-- CREATION PROJECT -->
        <v-dialog v-model="dialogAddProject" max-width="560">
            <v-card class="px-12 pt-11 pb-10 rounded-xl"> 
                <div class="d-flex align-center justify-space-between mb-1">
                    <v-card-title class="text-h4 font-weight-bold ps-0">Ajouter un projet</v-card-title>
                    <v-btn icon="mdi-close" variant="text" density="comfortable" @click="closeDialog" />
                </div>
                <div class="text-body-1 text-medium-emphasis mb-6">Renseigne les informations du projet</div>
                <v-textarea
                    label="Description"
                    row-height="25"
                    rows="3"
                    variant="outlined"
                    auto-grow
                ></v-textarea>
                <v-btn
                    class="font-weight-bold rounded-pill text-none"
                    color="blue"
                    size="large"
                    variant="flat"
                    block
                    @click="closeDialog"
                >
                    Ajouter
                </v-btn>
            </v-card>
        </v-dialog>
    </v-container>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectSingle from '~/components/ProjectSingle.vue';

const dialogAddProject = ref(false)

const closeDialog = () => {
    dialogAddProject.value = false
}

const { data } = await useFetch(`http://localhost:3002/projects`)
</script>
