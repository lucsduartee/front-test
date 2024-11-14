export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        category: 'category1',
        name: 'c1 - Item 1',
        value: 1000,
      },
      {
        category: 'category1',
        name: 'c1 - Item 2',
        value: 1500,
      },
      {
        category: 'category1',
        name: 'c1 - Item 3',
        value: 500,
      },
      {
        category: 'category1',
        name: 'c1 - Item 4',
        value: 800,
      },
      {
        category: 'category1',
        name: 'c1 - Item 5',
        value: 200,
      },
      {
        category: 'category2',
        name: 'c2 - Item 1',
        value: 1000,
      },
      {
        category: 'category2',
        name: 'c2 - Item 2',
        value: 1500,
      },
      {
        category: 'category2',
        name: 'c2 - Item 3',
        value: 500,
      },
      {
        category: 'category2',
        name: 'c2 - Item 4',
        value: 800,
      },
      {
        category: 'category2',
        name: 'c2 - Item 5',
        value: 200,
      },
      {
        category: 'category3',
        name: 'c3 - Item 1',
        value: 1000,
      },
      {
        category: 'category3',
        name: 'c3 - Item 2',
        value: 1500,
      },
      {
        category: 'category3',
        name: 'c3 - Item 3',
        value: 500,
      },
      {
        category: 'category3',
        name: 'c3 - Item 4',
        value: 800,
      },
      {
        category: 'category3',
        name: 'c3 - Item 5',
        value: 200,
      },
      {
        category: 'category4',
        name: 'c4 - Item 1',
        value: 1000,
      },
      {
        category: 'category4',
        name: 'c4 - Item 2',
        value: 1500,
      },
      {
        category: 'category4',
        name: 'c4 - Item 3',
        value: 500,
      },
      {
        category: 'category4',
        name: 'c4 - Item 4',
        value: 800,
      },
      {
        category: 'category4',
        name: 'c4 - Item 5',
        value: 200,
      },
      {
        category: 'category5',
        name: 'c5 - Item 1',
        value: 1000,
      },
      {
        category: 'category5',
        name: 'c5 - Item 2',
        value: 1500,
      },
      {
        category: 'category5',
        name: 'c5 - Item 3',
        value: 500,
      },
      {
        category: 'category5',
        name: 'c5 - Item 4',
        value: 800,
      },
      {
        category: 'category5',
        name: 'c5 - Item 5',
        value: 200,
      },
    ],
  }),

  getters: {
    getProductsByCategory: (state) => {
      const categoriesDictionary = {
        category1: 'c1',
        category2: 'c2',
        category3: 'c3',
        category4: 'c4',
        category5: 'c5',
      }
      
      return (category, name) => state
        .products.filter(
          (product) => product.category === category && product.name === `${categoriesDictionary[category]} - ${name}`)
    },
  },
});
