export const useTabsStore = defineStore('tabs', {
  state: () => ({
    pages: [
      {
        name: 'category1',
        selectedTab: 'category1',
      },
      {
        name: 'category2',
        selectedTab: 'category2',
      },
      {
        name: 'category3',
        selectedTab: 'category3',
      },
      {
        name: 'category4',
        selectedTab: 'category4',
      },
      {
        name: 'category5',
        selectedTab: 'category5',
      },
    ],
  }),

  actions: {
    selectTab(page, tab) {
      this.pages.find((p) => p.name === page).selectedTab = tab;
    },
  },
});
