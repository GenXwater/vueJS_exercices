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
                <form @submit.prevent="submit">
                    <div class="d-flex align-center justify-space-between mb-1">
                        <v-card-title class="text-h4 font-weight-bold ps-0">Ajouter un projet</v-card-title>
                        <v-btn type="button" icon="mdi-close" variant="text" density="comfortable" @click="closeDialog" />
                    </div>
                    <div class="text-body-1 text-medium-emphasis mb-6">Renseigne les informations du projet</div>
                    <v-text-field
                        v-model="name.value.value"
                        :counter="3"
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

                    <v-combobox
                        v-model="user.value.value"
                        :counter="1"
                        :error-messages="user.errorMessage.value"
                        label="Utilisateur"
                        placeholder="Tape un utilisateur puis Entrée"
                        prepend-inner-icon="mdi-account-outline"
                        variant="outlined"
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
    import { ref } from 'vue'
    import ProjectSingle from '~/components/ProjectSingle.vue';
    import { useField, useForm } from 'vee-validate';

    const dialogAddProject = ref(false)

    const { data, refresh } = await useFetch('http://localhost:3002/projects')

    
    const { handleSubmit, handleReset } = useForm({
        validationSchema: {
            name (value:any) {
                if (value?.length >= 3) return true
                return `Le nom doit contenir au moins 3 caractères`
            },
            user (value:any) {
                if (/^[0-9]{1,}$/.test(value)) return true
                return `Il faut au moins 1 chiffre`
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
        const { data: responseData } = await useFetch(`http://localhost:3002/projects`, {
            method: 'post',
            body: p
        })

        if (responseData.value)
            refresh()
    }
        
</script>
