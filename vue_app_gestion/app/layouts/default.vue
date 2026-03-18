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

        <v-navigation-drawer v-model="drawer">
          <v-list nav>
            <v-list-subheader>ADMINISTRATION</v-list-subheader>

            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              rounded="xl"
              :to="item.url"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <div class="pa-4" v-if="showContent">
            <slot />
          </div>
        </v-main>
      </v-layout>
    </v-app>
  </ClientOnly>
</template>

<script setup lang="ts">
  const drawer = ref(true);

  const showContent = ref(true)

  const items = [
    { text: 'Dashboard', icon: 'mdi-view-dashboard', url: '/' },
    { text: 'Team', icon: 'mdi-account-group', url: "/team" },
    { text: 'Projects', icon: 'mdi-folder-multiple', url: "/projects" },
    { text: 'Reports', icon: 'mdi-file-chart', url: "/reports" },
  ]

  const options = [
    { text: 'Options', icon: 'mdi-view-dashboard', url: '/options' },
    { text: 'Se déconnecter', icon: 'mdi-account-group', url: "/Logout" },
  ]
</script>
