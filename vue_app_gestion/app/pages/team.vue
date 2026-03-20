<template>
    <v-container>
        <div class="d-flex align-center justify-space-between mb-4">
            <h1 class="ma-0">L'équipe</h1>
            <v-btn
                prepend-icon="mdi-plus"
                rounded="pill"
                text="Ajouter"
                @click="dialogAdd = true"
            />
        </div>

        <v-data-table :headers="headers" :items="usersData" v-if="usersData" class="rounded-xl">
            <!-- Boutton suppr -->
            <template v-slot:item.actions="{ item }">
                    <v-icon class="ps-6" icon="mdi-delete" size="small" @click="openDeleteDialog(item.id, item.email)" />
            </template>
        </v-data-table>
        <v-skeleton-loader type="article" v-else></v-skeleton-loader>

        <v-dialog v-model="dialogAdd" max-width="560">
            <v-card class="px-12 pt-11 pb-10 rounded-xl"> 
                <div class="d-flex align-center justify-space-between mb-1">
                    <v-card-title class="text-h4 font-weight-bold ps-0">Créer un utilisateur</v-card-title>
                    <v-btn icon="mdi-close" variant="text" density="comfortable" @click="closeDialog" />
                </div>
                <div class="text-body-1 text-medium-emphasis mb-6">Renseigne les informations du compte</div>

                <div class="text-body-large text-medium-emphasis mb-1">Mail</div>
                <v-text-field
                    v-model="formUser.email"
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    class="mb-2"
                />

                <div class="text-body-large text-medium-emphasis mb-1">Mot de passe</div>
                <v-text-field
                    v-model="formUser.pass"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    class="mb-6"
                    @click:append-inner="visible = !visible"
                />

                <v-btn
                    class="font-weight-bold rounded-pill text-none"
                    color="blue"
                    size="large"
                    variant="flat"
                    block
                    @click="addUser"
                >
                    Ajouter
                </v-btn>
            </v-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="420">
            <v-card class="px-12 pt-11 pb-10 rounded-xl">
                <v-card-title class="texte-h4">Supprimer cet utilisateur ?</v-card-title>
                <v-card-text>{{ mailToDelete }}</v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text" class="px-4 rounded-pill" @click="deleteDialog = false">Annuler</v-btn>
                    <v-btn color="error" class="px-4 rounded-pill" @click="confirmeDelete">Supprimer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const USERS_API_URL = 'http://localhost:3002/users'

    // VAR ----------------------------------- //

    const dialogAdd = ref(false)
    const deleteDialog = ref(false)
    const visible = ref(false)
    const mailToDelete = ref('')
    const idToDelete = ref(-1)
    
    const formUser = ref({
        email: '',
        pass: '',
    })

    const { data: usersData, refresh } = await useFetch(USERS_API_URL)

    const closeDialog = () => {
        dialogAdd.value = false
        visible.value = false
    }
    // ---------------------------------------- //
    
    // FUNCTIONS

    const addUser = async () => {
        const email = formUser.value.email.trim()
        const pass = formUser.value.pass.trim()

        if (!email || !pass) return

        const createdUser = await $fetch(USERS_API_URL, {
            method: 'POST',
            body: {
                email,
                pass,
            },
        })
        
        // console.log(`User crée :`, createdUser)

        formUser.value.email = ''
        formUser.value.pass = ''

        closeDialog()
        refresh()
    }

    const openDeleteDialog = (id: any, email: any) => {
        idToDelete.value = id
        mailToDelete.value = email
        deleteDialog.value = true
    }

    
        const confirmeDelete = async () => {
            await $fetch(`${USERS_API_URL}?id=${idToDelete.value}`, {
                method: 'DELETE',
            })

            closeDelete()
            refresh()
        }

        const closeDelete = () => {
            deleteDialog.value = false
            idToDelete.value = -1
            mailToDelete.value = ''
        }

    // HEADERS
    const headers = ref([
        { title: 'ID', key:"id" }, // key correspondant aux noms défini dans la db
        { title: 'Email', key:"email" },
        { title: 'Pass', key:"pass" },
        { title: 'Admin', key:"isAdmin" },
        { title: 'Actions', key:"actions", sortable: false, }, // actions connu par vuetify pour créer des actions
    ])
</script>
