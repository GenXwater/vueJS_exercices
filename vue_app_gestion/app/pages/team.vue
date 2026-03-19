<template>
    <v-container>
        <h1>L'équipe</h1>
        <ul>
            <li v-for="user in usersData" :key="user.id">{{ user.email }}</li>
        </ul>
    </v-container>
</template>

<script setup lang="ts">
    const { data: usersData } = await useFetch(`http://localhost:3002/users`)
    const { data: projectsData } = await useFetch(`http://localhost:3002/projects`)
</script>