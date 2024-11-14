<template>
  <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-img
      class="align-end text-white"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>{{props.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{props.value}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
      @click="cartStore.addCartItem({
        name: props.name,
        value: props.value,
        category: props.category
      })"
      color="orange"
      text="Comprar"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from "@/stores/cart";

const tabsStore = useTabsStore();
const cartStore = useCartStore();

const { addCartItem } = storeToRefs(cartStore);
const props = defineProps(['name', 'value', 'category']);
</script>
