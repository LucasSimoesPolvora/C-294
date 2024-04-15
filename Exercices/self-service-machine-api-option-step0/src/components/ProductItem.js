app.component("product-item", {
  props: {
    products: {
      type: Array,
    },
  },
  template:
    /*html*/
    `<div v-for="(product, index) in products" :class="product.quantity? 'product selected' : 'product'" >
        <div class="photo" @click="changeActivity(index, false)">
            <img v-bind:src="product.photo" />
        </div>
        <div class="description">
            <span class="name">{{ product.name }}</span>
            <span class="price">{{ product.price }}$</span>
            <div v-if="product.quantity" class="quantity-area">
                <button @click="removeQuantity(index)">-</button>
                <span class="quantity">{{ product.quantity }}</span>
                <button @click="addQuantity(index)">+</button>
            </div>
        </div>
    </div>`,
  data() {
    return {
      
    };
  },
  methods: {
    changeActivity(index, isItActive) {
      if (this.products[index].quantity > 0) {
        this.products[index].quantity = 0;
      } else if (this.products[index].quantity == 0 && !isItActive) {
        this.products[index].quantity = 1;
        this.$emit("add-order", this.products[index]);
      }
    },
    addQuantity(index) {
      this.products[index].quantity += 1;
      this.$emit("add-order", this.products[index]);
    },
    removeQuantity(index) {
      this.products[index].quantity -= 1;

      if (this.products[index].quantity <= 0) {
        this.changeActivity(index, true);
      }
      this.$emit("remove-order", this.products[index]);
    },
  },
});
