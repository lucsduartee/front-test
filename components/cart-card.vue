<template>
  <div>
    <v-card color="indigo" variant="tonal" class="cart-card">
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">{{ props.name }} - {{ props.value }}</div>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(["name", "value"]);
</script>

<style scoped>
  .cart-card {
    margin: 12px;
  }
</style>