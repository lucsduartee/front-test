<template>
  <v-container>
    <app-header />
    <nav-category />
    <v-main>
      <div class="container">
        <div class="items">
          <v-container>
            <v-row class="cards">
              <card
                v-for="product in products"
                :key="product.name"
                :name="product.name"
                :value="product.value"
                :category="product.category"
              />
            </v-row>
          </v-container>
        </div>
        <div class="cart">
          <div class="cart-items">
            <cart-card
              v-for="item in cart"
              :key="item.name"
              :name="item.name"
              :value="item.value"
              :category="item.category"
            />
          </div>
          <v-btn @click="createOrder" color="indigo" variant="outlined" class="mx-3 my-3"
            >Comprar - {{ cartTotalValue }}</v-btn
          >
        </div>
      </div>
    </v-main>
  </v-container>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTabsStore } from "@/stores/tabs";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";

const tabsStore = useTabsStore();
const productsStore = useProductsStore();
const cartStore = useCartStore();

const { cart, cartTotalValue } = storeToRefs(cartStore);

const { products } = productsStore;

async function createOrder() {
  try {
    const order = await $fetch("http://localhost:33473/api/orders", {
      method: "POST",
      body: {
        value: cartTotalValue.value,
      },
    });

    if (order) {
      console.log('requisiçao deu certo')
    }
  } catch (e) {
    console.log("trata o erro aqui", e);
  }
}
</script>


<style scoped>
.container {
  margin-top: 32px;
  display: flex;
  gap: 12px;
}

.items {
  flex-grow: 5;
  width: 80%;
}

.cards {
  gap: 24px;
}

.cart {
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 25%;
  height: 600px;
  padding: 12px;
}

.cart-items {
  flex-grow: 1;
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>