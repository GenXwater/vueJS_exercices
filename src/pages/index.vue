<template>
  <v-app>
    <!-- Top bar -->
    <v-app-bar class="grey-darken-4" flat density="compact">
      <v-spacer></v-spacer>
        <v-tabs v-model="selecteTab" centered color="frey-darken-1">
          <v-tab v-for="link in links" :key="link">
            {{ link }}
          </v-tab>
        </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- Container -->
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- Left col -->
          <v-col cols="12" sm="2">
            
          </v-col>
          <!-- Main col -->
          <v-col cols="12" sm="8">
            <v-sheet
              v-if="selecteTab == 0"
              min-height="70vh"
              rounded="lg"
              class="pa-4"
            >
              <h2 class="mt-4">Apps list :</h2>

              <v-data-table
                v-if="groupedData"
                :items="groupedData"
                :headers="headers"
                item-value="app"
                v-model:expanded="expanded"
                show-expand
              >
              <template v-slot:header.app="{ column }">
                {{ column.title?.toUpperCase() }}
              </template>
              </v-data-table>

            </v-sheet>
            <v-sheet v-else min-height="70vh" rounded="lg" class="pa-2 pt-4">
              
            </v-sheet>
          </v-col>
          <!-- Right col -->
          <v-col cols="12" sm="2">
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// Imports
import { ref, watch, onMounted } from 'vue';
import useGroupApps from "../functions/useGroupApps";

// Variables
let selecteTab = ref(0);
const links = ref(["Dashboard", "About"]);
let apiResult = ref();
let groupedData = ref([]);
let expanded = ref([]);
const headers = ref([
  {title: "App",    key:"app"},
  {title: "US",     key:"totalRevenuesUS"},
  {title: "UK",     key:"totalRevenuesUK"},
  {title: "FR",     key:"totalRevenuesFR"},
  {title: "JP",     key:"totalRevenuesJP"},
  {title: "CN",     key:"totalRevenuesCN"},
  {title: "AU",     key:"totalRevenuesAU"},
  {title: "Total",  key:"totalRevenues"},
  {title: "",       key:"data-table-expand"},
])

// Vue lifecycle
onMounted(async () => {
  fetchMonetizationApi();
});

// Vue func
watch(apiResult, (newValue) => {
  groupedData.value = useGroupApps(newValue.data);
});

// API
const fetchMonetizationApi = async () => {
  fetch('https://www.anthony-cardinale.fr/_placeholder/monetization-api.json')
  .then(response => response.json())
  .then(data => apiResult.value = data);
};
</script>
