<template>
    <v-sheet rounded="lg" min-height="268" class="pa-3">
        <v-list-item-title class="text-h5 mb-1 mt-2">
            Quick insights:
        </v-list-item-title>

        <v-list density="compact">
            <v-list-item>
                <v-list-item-title>Total apps:</v-list-item-title>
                <v-list-item-subtitle>{{ totalApps }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Total revenues:</v-list-item-title>
                <v-list-item-subtitle>{{ useFormatRevenues(totalRevenues) }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Top app:</v-list-item-title>
                <v-list-item-subtitle>{{ topAppName }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Top app revenues:</v-list-item-title>
                <v-list-item-subtitle>{{ useFormatRevenues(topAppRevenues) }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item v-if="searchValue">
                <v-list-item-title>Current filter:</v-list-item-title>
                <v-list-item-subtitle>"{{ searchValue }}"</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useFormatRevenues from '@/functions/useFormatRevenues';

const props = defineProps<{
    groupedData: any[];
    searchValue: string;
}>();

const totalApps = computed(() => {
    return props.groupedData?.length || 0;
});

const totalRevenues = computed(() => {
    return props.groupedData?.reduce((total: number, app: any) => total + (app.totalRevenues || 0), 0) || 0;
});

const topApp = computed(() => {
    if (!props.groupedData?.length) {
        return null;
    }

    return props.groupedData.reduce((best: any, app: any) => {
        return (app.totalRevenues || 0) > (best.totalRevenues || 0) ? app : best;
    }, props.groupedData[0]);
});

const topAppName = computed(() => {
    return topApp.value?.app || 'No data';
});

const topAppRevenues = computed(() => {
    return topApp.value?.totalRevenues || 0;
});
</script>
