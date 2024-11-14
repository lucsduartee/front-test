export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotalValue: (state) => {
      return state
        .cart.reduce((acc, product) => product.value + acc, 0)
    },
  },
  actions: {
    addCartItem(item) {
      this.cart.push(item);
    },
  },
});
