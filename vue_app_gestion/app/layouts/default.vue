<template>
  <v-app>
    <v-layout class="rounded rounded-md border">
      <v-app-bar>
        <v-app-bar-title>Menu</v-app-bar-title>
        <v-spacer />
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" :value="i">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
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

      <v-main class="d-flex align-center justify-center" height="300">
        <v-container>
          <v-sheet
            border="dashed md"
            color="surface-light"
            height="200"
            rounded="lg"
            width="100%"
          >

          </v-sheet>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
  const drawer = ref(true);

  const items = [
    { text: 'Dashboard', icon: 'mdi-view-dashboard', url: '/' },
    { text: 'Team', icon: 'mdi-account-group', url: "/team" },
    { text: 'Projects', icon: 'mdi-folder-multiple', url: "/projects" },
    { text: 'Reports', icon: 'mdi-file-chart', url: "/reports" },
  ]
</script>