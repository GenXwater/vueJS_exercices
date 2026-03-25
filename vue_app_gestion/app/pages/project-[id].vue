<template>
    <h1>Page détail</h1>
    {{ route.params }}
</template>

<script setup lang="ts">
    const route = useRoute()
</script>