<template>
    <ClientOnly>
        <v-app>
            <v-layout>
                <v-app-bar>
                    <v-app-bar-title>Application de gestion</v-app-bar-title>
                    <v-spacer />
                    <v-menu>
                        <template #activator="{ props }">
                        <v-btn variant="text" v-bind="props" icon>
                            <v-avatar
                            image="https://robohash.org/vuejs16534215651894653168"
                            size="50"
                            />
                        </v-btn>
                        </template>

                        <v-list class="pa-2 rounded-xl">
                            <v-list-item v-for="(item, i) in options"
                                :key="i"
                                :value="i"
                                color="primary"
                                rounded="xl"
                                :to="item.url"
                            >
                                <v-list-item-title v-text="item.text"></v-list-item-title>

                                <template v-slot:append>
                                    <v-icon :icon="item.icon"></v-icon>
                                </template>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>
                <v-main>
                    <div class="pa-4">
                        <slot />
                    </div>
                </v-main>
            </v-layout>
        </v-app>
    </ClientOnly>
</template>