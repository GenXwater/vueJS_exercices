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
</script>
