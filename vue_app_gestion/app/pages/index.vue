<template>
    <h1 class="ma-0 mb-4">Accueil</h1>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto rounded-xl pa-2" max-width="368">
                    <v-card-item title="Utilisateurs">
                    <template v-slot:subtitle>
                        <v-icon
                        class="me-1 pb-1"
                        color="success"
                        icon="mdi-trending-up"
                        size="18"
                        ></v-icon>

                        En hausse de 5%
                    </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                    <v-row class="align-center" density="compact">
                        <v-col
                        class="text-display-large font-weight-light"
                        cols="6"
                        >
                        {{ usersData.length }}
                        </v-col>

                        <v-col class="text-right" cols="6">
                        <v-icon
                            color="error"
                            icon="mdi-account"
                            size="88"
                        ></v-icon>
                        </v-col>
                    </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between">
                    <v-list-item
                        density="compact"
                        prepend-icon="mdi-gender-male"
                    >
                        <v-list-item-subtitle>34</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item
                        density="compact"
                        prepend-icon="mdi-gender-female"
                    >
                        <v-list-item-subtitle>30</v-list-item-subtitle>
                    </v-list-item>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-btn
                        :text="'Détail'"
                        :to="'/team'"
                    ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto rounded-xl pa-2" max-width="368">
                    <v-card-item title="Projets">
                    <template v-slot:subtitle>
                        <v-icon
                        class="me-1 pb-1"
                        color="error"
                        icon="mdi-trending-down"
                        size="18"
                        ></v-icon>

                        En baisse de 1%
                    </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                    <v-row class="align-center" density="compact">
                        <v-col
                        class="text-display-large font-weight-light"
                        cols="6"
                        >
                        84
                        </v-col>

                        <v-col class="text-right" cols="6">
                        <v-icon
                            color="error"
                            icon="mdi-folder-multiple"
                            size="88"
                        ></v-icon>
                        </v-col>
                    </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between">
                    <v-list-item
                        density="compact"
                        prepend-icon="mdi-folder-open"
                    >
                        <v-list-item-subtitle>45 ouverts</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item
                        density="compact"
                        prepend-icon="mdi-folder-lock"
                    >
                        <v-list-item-subtitle>39 clos</v-list-item-subtitle>
                    </v-list-item>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-btn
                        :text="'Détail'"
                        :to="'/projects'"
                    ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-container class="d-flex px-0 justify-center">
            <v-card elevation="8" rounded="xl" width="580" class="pa-2">
                <div class="d-flex align-center justify-space-between px-4 py-3">
                    <div class="d-flex flex-column ga-2">
                        <v-card-title class="pa-0 text-h4 font-weight-bold">Progression du CA</v-card-title>
                        <div class="text-h6 font-weight-medium">
                            {{ formatEuros(caCurrent) }}
                            <span class="text-medium-emphasis">/ {{ formatEuros(caGoal) }}</span>
                        </div>
                        <v-chip :color="remainingColor" variant="tonal" rounded="pill" size="small" class="font-weight-medium">
                            {{ remainingLabel }}
                        </v-chip>
                        <div class="mt-2">
                            <v-btn color="orange-accent-2" variant="flat" rounded="pill" size="large">
                                Rapport détaillé
                            </v-btn>
                        </div>
                    </div>

                    <v-progress-circular
                        :model-value="caTarget"
                        :size="128"
                        :width="13"
                        bg-color="surface-light"
                        class="ma-1"
                        color="orange-accent-2"
                        reveal
                        rounded
                    >
                        <v-avatar color="surface-light" size="86" class="text-h6 font-weight-bold">
                            {{ Math.round(caTarget) }}%
                        </v-avatar>
                    </v-progress-circular>
                </div>
            </v-card>
        </v-container>
    </v-container>
</template>


<script setup lang="ts">
    import { computed } from 'vue'

    const caCurrent = 160_000
    const caGoal = 100_000
    const caTarget = (caCurrent / caGoal) * 100
    const caRemaining = computed(() => caGoal - caCurrent)
    const remainingColor = computed(() => (caRemaining.value > 0 ? 'error' : 'success'))
    const remainingLabel = computed(() => {
        const amount = formatEuros(Math.abs(caRemaining.value))
        return caRemaining.value > 0 ? `${amount} restant` : `${amount} au-dessus de l'objectif`
    })

    function formatEuros(value) {
        return new Intl.NumberFormat('fr-FR').format(value) + '€'
    }

    const { data: usersData } = await useFetch(`http://localhost:3002/users`)

</script>
