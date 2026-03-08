<template>
    <div id="app" style="width: 500px;">
        <BarChart v-bind="barChartProps" :options="options" />
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { Chart, registerables } from 'chart.js';
    import { BarChart, useBarChart } from "vue-chart-3";
    Chart.register(...registerables);

    type ChartProps = {
        data: Array;
    };

    const props = defineProps<ChartProps>();

    const chartData = computed(() => ({
        labels: ["US", "UK", "FR", "JP", "CN", "AU"],
        datasets: [
            {
                data: props.data,
                backgroundColor: [
                    "#77CEFF",
                    "#77CEFF",
                    "#77CEFF",
                    "#77CEFF",
                    "#77CEFF",
                    "#77CEFF",
                ],
            },
        ],
    }));

    const {barChartProps, barChartRef } = useBarChart({
        chartData,
    });

    const options = ref({
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Revenues (in USD) by countries",
            },
        },
    });
</script>
