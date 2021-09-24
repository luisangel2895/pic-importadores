<template lang="pug">
    v-navigation-drawer(v-model="drawer", fixed, temporary, right, style="z-index:100; width:50%; max-width:400px").px-1
      v-form.d-flex.flex-column(style="height:100%;")
        .title-cart.text-button.text-center CARRITO
        v-container.d-flex.flex-column.align-start.pa-1
          item-cart(v-for="(productCart, index) in productsCart" :key="index" :productCart="productCart" :quantity="productCart.quantity")
        v-spacer
        v-container.d-flex.flex-column
          v-divider(horizontal, style="width:100%")
          .total-cart.d-flex.flex-row.mt-1.align-center(style="width:100%")
            .total-card__text.text-h6 Total
            v-spacer
            .total-card__number $ {{ totalCart | redondear }}
        v-container.d-flex.flex-column.align-end
          v-btn(dark, color="primary", style="width:100%;", @click="goPurchasePage()").align-self-end Comprar
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import ItemCart from '../cart/ItemCart.vue'

export default {
  name: 'ShoppingCart',
  components: {
    ItemCart
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapState(['showShoppingCart', 'productsCart', 'totalCart']),
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    showShoppingCart (value) {
      this.drawer = value
    },
    drawer (value) {
      this.$store.commit('SHOW_SHOPPING_CART', value)
    }
  },
  filters: {
    redondear (total) {
      if (total) {
        return total.toFixed(2)
      }
    }
  },
  methods: {
    goPurchasePage () {
      if (this.isAuthenticated) {
        this.$router.push(`/purchase/${this.productsCart}`)
      } else {
        this.$store.commit('SHOW_LOGIN_CART', true)
      }
    }
  }
}
</script>
