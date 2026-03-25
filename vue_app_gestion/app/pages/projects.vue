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
            <template v-for="leProjet in data" :key="leProjet.id"> 
                    <v-col cols="12" md="4">
                        <project-single :project="leProjet" @delete-project="deleteProjectById" />
                    </v-col>
            </template>
        </v-row>

        <!-- CREATION PROJECT -->
        <v-dialog v-model="dialogAddProject" max-width="560">
            <v-card class="px-12 pt-11 pb-10 rounded-xl">
                <form @submit.prevent="submit">
                    <div class="d-flex align-center justify-space-between mb-1">
                        <v-card-title class="text-h4 font-weight-bold ps-0">Ajouter un projet</v-card-title>
                        <v-btn type="button" icon="mdi-close" variant="text" density="comfortable" @click="closeDialog" />
                    </div>
                    <div class="text-body-1 text-medium-emphasis mb-6">Renseigne les informations du projet</div>
                    <v-text-field
                        v-model="name.value.value"
                        :error-messages="name.errorMessage.value"
                        label="Nom"
                        placeholder="Tape le nom du projet"
                        prepend-inner-icon="mdi-folder-outline"
                        variant="outlined"
                        class="mb-6"
                    />
                    
                    <v-textarea
                        v-model="desc.value.value"
                        :error-messages="desc.errorMessage.value"
                        label="Description"
                        row-height="25"
                        rows="3"
                        variant="outlined"
                        auto-grow
                        class="mb-6"
                    ></v-textarea>

                    <v-autocomplete
                        v-model="user.value.value"
                        :error-messages="user.errorMessage.value"
                        :items="userEmails"
                        :loading="usersStatus === 'pending'"
                        label="Utilisateur"
                        placeholder="Sélectionne un utilisateur"
                        no-data-text="Aucun email utilisateur trouvé"
                        prepend-inner-icon="mdi-account-outline"
                        variant="outlined"
                        clearable
                        chips
                        closable-chips
                        class="mb-6"
                    />

                    <div class="d-flex ga-3">
                        <v-btn
                            class="font-weight-bold rounded-pill text-none"
                            style="flex: 1"
                            size="large"
                            variant="outlined"
                            type="button"
                            @click="resetProjectForm"
                        >
                            Réinitialiser
                        </v-btn>
                        <v-btn
                            class="font-weight-bold rounded-pill text-none"
                            type="submit"
                            style="flex: 1"
                            color="blue"
                            size="large"
                            variant="flat"
                        >
                            Ajouter
                        </v-btn>
                    </div>
                </form>
            </v-card>
        </v-dialog>
    </v-container>
    
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue'
    import ProjectSingle from '~/components/ProjectSingle.vue';
    import { useField, useForm } from 'vee-validate';
    import type { Project } from '~/types/project'

    const dialogAddProject = ref(false)

    const PROJECTS_API_URL = 'http://localhost:3002/projects'
    const USERS_API_URL = 'http://localhost:3002/users'

    type UserApi = {
        email: string
    }
    const { data, refresh } = await useFetch<Project[]>(PROJECTS_API_URL)
    const { data: usersData, status: usersStatus } = await useFetch<UserApi[]>(USERS_API_URL)

    const userEmails = computed(() => {
        return (usersData.value ?? [])
            .map((u) => u.email)
            .filter((email): email is string => Boolean(email))
    })

    
    const { handleSubmit, handleReset } = useForm({
        validationSchema: {
            name (value:any) {
                if (value?.length >= 3) return true
                return `Le nom doit contenir au moins 3 caractères`
            },
            user (value:any) {
                if (!value) return `Veuillez sélectionner un utilisateur`
                if (!userEmails.value.includes(value)) return `Cet email n existe pas`
                return true
            },
            desc (value:any) {
                if (value?.length >= 1) return true
                return `La description doit contenir au moins 1 caractère`
            },
        },
    })

    const name = useField('name')
    const user = useField('user')
    const desc = useField('desc')

    const submit = handleSubmit(async (values) => {
        // alert(JSON.stringify(values, null, 2))
        await createProject(values)
        closeDialog()
    })

    const closeDialog = () => {
        resetProjectForm()
        dialogAddProject.value = false
    }

    const resetProjectForm = () => {
        handleReset()
    }

    const createProject = async (p:any) => {
        await $fetch(PROJECTS_API_URL, {
            method: 'post',
            body: p
        })

        refresh()
    }

    const deleteProjectById = async (projectId: string) => {
        await $fetch(`${PROJECTS_API_URL}?id=${projectId}`, {
            method: 'DELETE'
        })

        refresh()
    }

        
</script>
