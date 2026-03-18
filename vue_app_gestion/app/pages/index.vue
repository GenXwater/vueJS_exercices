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
                        64
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

                    <v-expand-transition>
                    <div v-if="expand">
                        <div class="py-2">
                        <v-slider
                            v-model="time"
                            :max="6"
                            :step="1"
                            :ticks="labels"
                            class="mx-4"
                            color="primary"
                            density="compact"
                            show-ticks="always"
                            thumb-size="10"
                            hide-details
                        ></v-slider>
                        </div>

                        <v-list class="bg-transparent">
                        <v-list-item
                            v-for="item in forecast"
                            :key="item.day"
                            :append-icon="item.icon"
                            :subtitle="item.temp"
                            :title="item.day"
                        >
                        </v-list-item>
                        </v-list>
                    </div>
                    </v-expand-transition>

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
                        64
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

                    <v-expand-transition>
                    <div v-if="expand">
                        <div class="py-2">
                        <v-slider
                            v-model="time"
                            :max="6"
                            :step="1"
                            :ticks="labels"
                            class="mx-4"
                            color="primary"
                            density="compact"
                            show-ticks="always"
                            thumb-size="10"
                            hide-details
                        ></v-slider>
                        </div>

                        <v-list class="bg-transparent">
                        <v-list-item
                            v-for="item in forecast"
                            :key="item.day"
                            :append-icon="item.icon"
                            :subtitle="item.temp"
                            :title="item.day"
                        >
                        </v-list-item>
                        </v-list>
                    </div>
                    </v-expand-transition>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-btn
                        :text="'Détail'"
                        :to="'/team'"
                    ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
            <div>
                <v-container class="d-flex flex-wrap ga-4 px-0 justify-center">
                <v-card
                    v-for="(c, i) in cards"
                    :key="i"
                    elevation="6"
                    mode="out-in"
                    rounded="pill"
                    width="330"
                >
                    <div class="d-flex align-center pa-3 justify-space-between">
                    <div class="mt-n2">
                        <v-card-title v-text="c.title"></v-card-title>
                        <v-card-subtitle class="mt-n1" v-text="c.subtitle"></v-card-subtitle>
                    </div>
                    <v-progress-circular
                        :key="`${updateTrigger}_${i}`"
                        :model-value="c.value"
                        :size="100"
                        :width="12"
                        bg-color="surface-light"
                        class="ma-3"
                        color="orange-accent-2"
                        reveal
                        rounded
                    >
                        <v-avatar color="surface-light" size="70">{{ c.value }}%</v-avatar>
                    </v-progress-circular>
                    </div>
                </v-card>
                </v-container>
                <div class="d-flex justify-center">
                <v-btn color="primary" text="Reload" @click="updateTrigger++"></v-btn>
                </div>
            </div>
    </v-container>
</template>


<script setup>
    import { ref } from 'vue'

    const labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' }
    const forecast = [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\u00B0/12\u00B0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\u00B0/14\u00B0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\u00B0/15\u00B0' },
    ]

    const expand = ref(false)
    const time = ref(0)

    import { shallowRef } from 'vue'

        const updateTrigger = shallowRef(0)

        const cards = [
            { title: 'CPU Usage', subtitle: '0.63 / 2 units', value: 31.5 },
            { title: 'Memory Usage', subtitle: '13.43 / 16 GB', value: 83.9 },
        ]
</script>
