<template lang="pug">
    v-container
      .text-right
        v-icon(@click="goback()") mdi-close
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
            .total-card__number $ {{ totalCart }}
        v-container.d-flex.flex-column.align-end
          v-btn(dark, color="primary", style="width:100%;", @click="goPurchasePage()").align-self-end Comprar
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import ItemCart from '../components/cart/ItemCart.vue'

export default {
  name: 'CartMobile',
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
  methods: {
    goPurchasePage () {
      if (this.isAuthenticated) {
        this.$router.push(`/purchase/${this.productsCart}`)
      } else {
        this.$router.push('/login-mobile', () => {})
      }
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
