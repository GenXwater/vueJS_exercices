<template>
    <v-container>
        <h1>L'équipe</h1>
        <v-data-table :items="usersData" v-if="usersData"></v-data-table>
        <v-skeleton-loader type="article" v-else></v-skeleton-loader>
    </v-container>
</template>

<script setup lang="ts">
    const { data: usersData } = await useFetch(`http://localhost:3002/users`)
    const { data: projectsData } = await useFetch(`http://localhost:3002/projects`)
</script>