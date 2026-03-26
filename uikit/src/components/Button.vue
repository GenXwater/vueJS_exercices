<template>
    <button class="tuk-button" :class="type">
        <slot>
            Click-me
        </slot>
    </button>
</template>

<script setup lang="ts">
    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: "Primary"
        }
    })
</script>

<style>
    .tuk-button {
        padding: 10px 20 px;
        border-radius: 25px;
        border: none;
    }

    tuk-primary {
        color: white;
        background-color: cornflowerblue;
    }

    .tuk-secondary {
        color: white;
        background-color: slategray;
    }
</style>