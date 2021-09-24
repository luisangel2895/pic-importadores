<template lang="pug">
            v-container.pa-0.d-flex.flex-row.product-cart.my-1(style="border:1px solid #3949ab;width:100%")
              v-row(no-gutters)
                v-col(cols="1")
                  .product-cart__count.d-flex.flex-row.align-center.justify-end(style="height:100%") {{ quantity }}
                v-col(cols="3")
                  .product-cart__image.pa-3
                    v-container.pa-0
                      v-container.pa-0(style="width:60px; height:60px;").d-flex.flex-row.align-center.justify-center.elevation-3
                        v-img(:src="productCart.image").image-item-cart
                v-col(cols="7")
                  .product-cart__text.d-flex.flex-row.align-center(style="height:100%")
                    .product-cart__description
                      .product-cart__name.titles--text.text-body-2 {{ productCart.name | name }}
                      .product-cart__price.text-caption Precio : $ {{ productCart.precio_venta }}
                      .product-cart__discount.text-caption(style="font-weight:bold") Subtotal : $ {{ productCart.precio_venta * productCart.quantity | redondear}}
                v-col(cols="1")
                  .product-cart__drop.d-flex.flex-row.align-center.jutify-center(style="height:100%")
                    v-icon.primary--text(@click="deleteItemCart()") mdi-trash-can
</template>
<script>
export default {
  name: 'ItemCart',
  props: ['productCart', 'quantity'],
  data: () => ({
    // quantity: 1
  }),
  filters: {
    name: (name) => {
      return name.toUpperCase()
    },
    // currency: (currerncy) => {
    //   if (currerncy === 'USD') { return '$' }
    // }
    redondear (Subtotal) {
      return Subtotal.toFixed(2)
    }
  },
  watch: {
    // quantity (value) {
    //   if (value === '0') {
    //     this.$store.commit('REMOVE_PRODUCT_CART', this.productCart)
    //     this.$store.commit('UPDATE_TOTAL_CART')
    //   } else {
    //     const newQuantity = []
    //     newQuantity.push(this.productCart)
    //     newQuantity.push(parseInt(value))
    //     this.$store.commit('UPDATE_QUANTITY_PRODUCT_CART', newQuantity)
    //     this.$store.commit('UPDATE_TOTAL_CART')
    //   }
    // }
  },
  methods: {
    deleteItemCart () {
      this.$store.commit('REMOVE_PRODUCT_CART', this.productCart)
      this.$store.commit('UPDATE_TOTAL_CART')
    }
  },
  updated () {
    console.log('items actualizados')
  }
}
</script>
<style scoped>
.image-item-cart{
    max-width: 100%;
    max-height: 100%;
}
</style>
