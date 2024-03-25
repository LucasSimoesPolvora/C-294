app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cart: {
      type: Array,
      required: false,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock </p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <button 
          class="button" 
          :class="{ disabledButton: !inCart }" 
          :disabled="!inCart" 
          v-if="inStock"
          v-on:click="removeFromCart">
          Remove
        </button>
        <p v-if="inStock">Number of products in cart: {{ NumberInCart }}</p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          nbrInCart: 0,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          nbrInCart: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      if(this.variants[this.selectedVariant].nbrInCart + 1 > this.variants[this.selectedVariant].quantity){
        alert("VOUS AVEZ TROP DE CE PRODUIT. ON N'EN AURA PLUS EN STOCK ! PENSEZ AUX AUTRES !!!")
      } else {
        console.log(this.cart);
        this.variants[this.selectedVariant].nbrInCart += 1
        this.$emit("add-to-cart", {
          id: this.variants[this.selectedVariant].id,
          add: true,
        });
      }
    },
    removeFromCart() {
      console.log(this.cart);
      this.variants[this.selectedVariant].nbrInCart -= 1
      this.$emit("remove-from-cart", {
        id: this.variants[this.selectedVariant].id,
        add: false,
      });
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
    inCart() {
      let nbr = 0;
      this.cart.forEach(product => {
        if (product == this.variants[this.selectedVariant].id) {
          nbr += 1
        }
      });
      return nbr
    },
    NumberInCart(){
      let nbr = 0;
      this.cart.forEach(product => {
        if (product == this.variants[this.selectedVariant].id) {
          nbr += 1
        }
      });
      return nbr
    }
  },
});
