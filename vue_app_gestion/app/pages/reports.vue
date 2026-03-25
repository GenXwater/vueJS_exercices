<template>
    <h1 class="ma-0 mb-4">Rapports</h1>

    <v-container class="pa-0">
        <v-row class="mb-2">
            <v-col v-for="report in lineReports" :key="report.key" cols="12" md="6">
                <v-card class="rounded-xl pa-2 h-100">
                    <v-card-item :title="report.title">
                        <template #subtitle>
                            <v-icon class="me-1 pb-1" :color="trendColor(report.data)" icon="mdi-trending-up" size="18" />
                            {{ trendLabel(report.data) }}
                        </template>
                    </v-card-item>

                    <v-card-text>
                        <div class="text-h5 font-weight-medium mb-3">
                            {{ report.data[report.data.length - 1] }} {{ report.unit }}
                        </div>
                        <v-sparkline
                            :model-value="report.data"
                            :color="report.color"
                            :smooth="12"
                            line-width="2"
                            auto-draw
                            padding="10"
                            height="90"
                        />
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                        <v-btn color="orange" variant="text">Détail</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mb-4">
            <v-col v-for="metric in circleMetrics" :key="metric.key" cols="12" sm="6" md="3">
                <v-card class="rounded-xl py-6 px-4 text-center h-100">
                    <v-progress-circular
                        :model-value="metric.value"
                        :color="metric.color"
                        :size="118"
                        :width="12"
                        bg-color="surface-light"
                    >
                        <span class="text-h6 font-weight-bold">{{ metric.value }}%</span>
                    </v-progress-circular>

                    <div class="text-subtitle-1 font-weight-medium mt-4">{{ metric.label }}</div>
                    <div class="text-caption text-medium-emphasis">{{ metric.helper }}</div>
                </v-card>
            </v-col>
        </v-row>

        <v-card class="rounded-xl">
            <v-card-item
                title="Commentaires"
                subtitle="Derniers retours des utilisateurs"
            />
            <v-divider />

            <v-list>
                <v-list-item v-for="comment in comments" :key="comment.id" class="py-3">
                    <template #prepend>
                        <v-avatar :image="comment.avatar" size="46" />
                    </template>

                    <v-list-item-title class="font-weight-medium">
                        {{ comment.user }}
                    </v-list-item-title>

                    <v-list-item-subtitle class="mb-1">
                        {{ comment.role }} - {{ comment.date }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle class="text-wrap">
                        {{ comment.message }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
    type LineReport = {
        key: string
        title: string
        unit: string
        color: string
        data: number[]
    }

    type CircleMetric = {
        key: string
        label: string
        helper: string
        value: number
        color: string
    }

    type Comment = {
        id: string
        user: string
        role: string
        date: string
        message: string
        avatar: string
    }

    const lineReports: LineReport[] = [
        {
            key: 'sales',
            title: 'Progression des ventes',
            unit: 'k€',
            color: 'orange',
            data: [22, 28, 25, 33, 37, 42, 46]
        },
        {
            key: 'clients',
            title: 'Progression des clients',
            unit: 'clients',
            color: 'light-blue',
            data: [120, 130, 138, 142, 154, 166, 181]
        }
    ]

    const circleMetrics: CircleMetric[] = [
        { key: 'delay', label: 'Délai', helper: 'Respect planning', value: 82, color: 'teal' },
        { key: 'satisfaction', label: 'Satisfaction', helper: 'Avis clients', value: 91, color: 'green' },
        { key: 'efficiency', label: 'Efficacité', helper: 'Productivité équipe', value: 77, color: 'indigo' },
        { key: 'margin', label: 'Marge', helper: 'Rentabilité globale', value: 68, color: 'deep-orange' }
    ]

    const comments: Comment[] = [
        {
            id: 'c1',
            user: 'Emma Laurent',
            role: 'Product Manager',
            date: '25/03/2026',
            message: 'Le suivi des ventes est clair, on voit mieux les pics hebdomadaires.',
            avatar: 'https://robohash.org/vuejs16534215651894653168'
        },
        {
            id: 'c2',
            user: 'Nicolas Petit',
            role: 'Sales Lead',
            date: '24/03/2026',
            message: 'La progression clients est bonne, mais on doit accélérer sur la conversion.',
            avatar: 'https://robohash.org/vuejs16534215651894653168?set=set2'
        },
        {
            id: 'c3',
            user: 'Sofia Martin',
            role: 'Customer Success',
            date: '23/03/2026',
            message: 'Le niveau de satisfaction reste excellent, les retours sont très positifs.',
            avatar: 'https://robohash.org/vuejs16534215651894653168?set=set3'
        }
    ]

    const trendLabel = (values: number[]) => {
        const first = values[0]
        const last = values[values.length - 1]
        const evolution = ((last - first) / first) * 100
        return `${evolution >= 0 ? '+' : ''}${Math.round(evolution)}% sur la période`
    }

    const trendColor = (values: number[]) => {
        const first = values[0]
        const last = values[values.length - 1]
        return last >= first ? 'success' : 'error'
    }
</script>
