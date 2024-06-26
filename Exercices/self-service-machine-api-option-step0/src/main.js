const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          photo: "../assets/images/big-mac.png",
          name: "Big Mac",
          price: 5.99,
          active: true,
          quantity: 0,
        },
        {
          photo: "../assets/images/mc-chicken.png",
          name: "Mc Chicken",
          price: 4.99,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/double-cb.png",
          name: "Double Cheese Burger",
          price: 2.99,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/fries.png",
          name: "Fries",
          price: 2.99,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/nuggets.png",
          name: "Mc Nuggets",
          price: 3.49,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/salad.png",
          name: "Salad",
          price: 2.79,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/cola.png",
          name: "Coke",
          price: 1.99,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/lipton.png",
          name: "Ice Tea",
          price: 1.99,
          active: false,
          quantity: 0,
        },
        {
          photo: "../assets/images/water.png",
          name: "Water",
          price: 1.49,
          active: false,
          quantity: 0,
        },
      ],
      totalPrice: 0,
    };
  },
  methods: {
    updateOrder( product ) {
        console.log(product)
      const index = this.products.indexOf(product.name);
      if (index > -1) {
        totalPrice -= product.price
        console.log(totalPrice)
        this.products.splice(index, 1)
      }
    },
  },
});
