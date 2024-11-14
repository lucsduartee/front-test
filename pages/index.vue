<template>
  <v-container>
    <app-header />
    <nav-category />
    <v-main>
      <div class="container">
        <div class="items">
          <v-container>
            <v-row class="cards">
              <card v-for="item in 10" :key="item" />
            </v-row>
          </v-container>
        </div>
        <div class="cart">
          <cart-card />
        </div>
      </div>
    </v-main>
  </v-container>
</template>


<style scoped>
.container {
  margin-top: 32px;
  display: flex;
}

.items {
  flex-grow: 5;
  width: 80%;
}

.cards {
  gap: 24px;
}

.cart {
  border: 1px solid #000000;
  flex-grow: 1;
  width: 20%;
}
</style>