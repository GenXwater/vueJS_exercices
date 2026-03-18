<template>
  <v-app>
    <v-layout class="rounded rounded-md border">
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list nav>
          <v-list-subheader>REPORTS</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            rounded="xl"
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
          ></v-sheet>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
  const items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ]
</script>