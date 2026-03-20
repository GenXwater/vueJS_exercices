<template>
    <v-container>
        <div class="d-flex align-center justify-space-between mb-4">
            <h1 class="ma-0">L'équipe</h1>
            <v-btn
                prepend-icon="mdi-plus"
                rounded="pill"
                text="Ajouter"
                border
                @click="dialog = true"
            />
        </div>

        <v-data-table :items="usersData" v-if="usersData" class="rounded-xl"></v-data-table>
        <v-skeleton-loader type="article" v-else></v-skeleton-loader>

        <v-dialog v-model="dialog" max-width="560">
            <v-card class="px-12 pt-11 pb-10" rounded="xl"> 
                <div class="d-flex align-center justify-space-between mb-1">
                    <div class="text-h4 font-weight-bold">Créer un utilisateur</div>
                    <v-btn icon="mdi-close" variant="text" density="comfortable" @click="closeDialog" />
                </div>
                <div class="text-body-1 text-medium-emphasis mb-6">Renseigne les informations du compte</div>

                <div class="text-body-large text-medium-emphasis mb-1">Mail</div>
                <v-text-field
                    v-model="form.email"
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    class="mb-2"
                />

                <div class="text-body-large text-medium-emphasis mb-1">Mot de passe</div>
                <v-text-field
                    v-model="form.pass"
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
    </v-container>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const USERS_API_URL = 'http://localhost:3002/users'

    const dialog = ref(false)
    const visible = ref(false)
    const form = ref({
        email: '',
        pass: '',
    })

    const { data: usersData, refresh: refreshUsers } = await useFetch(USERS_API_URL)

    const closeDialog = () => {
        dialog.value = false
    }

    const addUser = async () => {
        const email = form.value.email.trim()
        const pass = form.value.pass.trim()

        if (!email || !pass) return

        await $fetch(USERS_API_URL, {
            method: 'POST',
            body: {
                email,
                pass,
            },
        })

        closeDialog()
        await refreshUsers()
    }
</script>
