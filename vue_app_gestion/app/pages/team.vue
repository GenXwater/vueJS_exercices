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

        <v-dialog v-model="dialog" max-width="420">
            <v-card title="Ajouter" subtitle="Créer un utilisateur">
                <template v-slot:text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="form.email" label="Email" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="form.pass" label="Mot de passe" type="password" />
                        </v-col>
                    </v-row>
                </template>

                <v-divider />

                <v-card-actions class="bg-surface-light">
                    <v-btn text="Annuler" variant="plain" @click="dialog = false" />
                    <v-spacer />
                    <v-btn text="Ajouter" @click="addUser" />
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const dialog = ref(false)
    const form = ref({
        email: '',
        pass: '',
    })

    const { data: usersData, refresh: refreshUsers } = await useFetch(`http://localhost:3002/users`)

    const addUser = async () => {
        if (!form.value.email || !form.value.pass) return

        await $fetch('http://localhost:3002/users', {
            method: 'POST',
            body: {
                email: form.value.email,
                pass: form.value.pass,
            },
        })

        form.value.email = ''
        form.value.pass = ''
        dialog.value = false
        await refreshUsers()
    }
</script>
