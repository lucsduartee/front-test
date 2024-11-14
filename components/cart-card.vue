<template>
  <div>
    <v-col v-for="(variant, i) in variants" :key="i" cols="12">
      <v-card :color="color" variant="tonal" class="mx-auto">
        <v-card-item>
          <div>
            <div class="text-h6 mb-1">Headline</div>
            <div class="text-caption">
              Greyhound divisely hello coldly fonwderfully
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </div>
</template>

<script setup>
import { ref } from "vue";

const variants = ["elevated", "flat", "tonal", "outlined"];
const color = ref("indigo");
</script>
