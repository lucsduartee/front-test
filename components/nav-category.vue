<script setup>
import { useTabsStore } from "@/stores/tabs";

const tabsStore = useTabsStore();
const { pages } = storeToRefs(tabsStore);
const { selectTab } = tabsStore;
const tab = ref(null);
const tabs = computed(() => pages.value);
</script>

<template>
  <v-card>
    <client-only>
      <v-tabs v-model="tab">
        <v-tab
          v-for="(item, index) in tabs"
          :key="index"
          :value="item.name"
          @click="selectTab(item.name, tab)"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </client-only>
  </v-card>
</template>
