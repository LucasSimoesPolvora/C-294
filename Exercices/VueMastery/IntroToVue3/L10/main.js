const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart({ id, add }) {
      if (add) {
        this.cart.push(id);
      } else{
        const index = this.cart.indexOf(id);
        if (index > -1) { 
          this.cart.splice(index, 1);
        }
      }
    },
  },
});
