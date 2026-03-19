<template>
  <div class="d-flex align-center justify-center pa-4 fill-height">
    <v-card
      class="mx-auto px-12 pt-11 pb-10"
      color="surface"
      elevation="8"
      width="100%"
      max-width="500"
      rounded="xl"
    >
      <div class="text-h4 font-weight-bold mb-1">Account</div>
      <div class="text-body-1 text-medium-emphasis mb-6">Connecte-toi pour accéder au dashboard</div>

      <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
        variant="outlined" class="mb-2" v-model="userData.email"></v-text-field>

      <div class="text-body-large text-medium-emphasis d-flex align-center justify-space-between mb-1">
        Password

        <a class="text-body-small text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible" class="mb-2" v-model="userData.pass"></v-text-field>

      <v-expand-transition>
        <v-alert
          v-if="error"
          class="mb-6 mt-2"
          type="error"
          variant="tonal"
          rounded="xl"
          icon="mdi-alert-circle-outline"
          density="comfortable"
        >
          Email ou mot de passe incorrect.
        </v-alert>
      </v-expand-transition>

      <v-btn class="mb-8 font-weight-bold rounded-pill text-none" color="blue" size="large" variant="flat" block @click="login">
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

definePageMeta({
    layout: 'login'
})

const userData = ref({
    email: '',
    pass: '',
})

const error = ref(false)

const login = async () => {
    error.value = false

    try {
        const responseData = await $fetch('http://localhost:3002/checkUser', {
            method: 'GET',
            params: {
                email: userData.value.email,
                pass: userData.value.pass
            }
        })

        if (!responseData || responseData.length === 0) {
            error.value = true
        } else {
            localStorage.setItem("isAdmin", "true"); // pas sécurisé mais ce n'est pas le but du cours.
            await navigateTo("/");
        }
    } catch {
        error.value = true
    }
}
</script>
