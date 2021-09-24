<template lang="pug">
    v-col(cols="6" lg="3").pa-1.pa-lg-2
      v-skeleton-loader(v-bind='attrs' type='card', v-if="loaderProduct")
      v-card(v-else).my-2.elevation-3
        v-dialog(v-model="videoDialog" width="800" v-if="product.video")
          template(v-slot:activator="{ on, attrs }")
            v-btn(fab, dark, color="red", style="position: absolute; z-index:2; right:10px; top:10px;", v-bind="attrs", v-on="on")
              v-icon mdi-play
          v-card
          .video-product-modal
            iframe.video-product__iframe(v-if="product.video" :src="product.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        v-container.pa-0(@click="goProduct(product.id)", style="cursor:pointer;")
          v-container.pa-0.pa-lg-4
            v-container.pa-0(:class="[{ 'image-mobile': isMobile }, 'image-pc']").d-flex.flex-row.align-center.justify-center
              v-img(:src="product.image").image-item-product
          .d-flex.flex-row.align-center.justify-center(style="height:70px;")
            .d-flex.text-overline.text-lg-button.px-2(style="line-height:1.3") {{ product.name }}
          v-card-subtitle.text-subtitle-1.text-lg-h6(v-if="showForProducts") $ {{ product.precio_venta }}

        v-dialog(v-model="dialogPalette" :width="dialogWidth" v-if="showForPallets")
          template(v-slot:activator="{ on, attrs }")
              v-btn(dark, small color="terciary", style="width:100%",v-bind="attrs", v-on="on").pa-4.mt-4
                | Ver precios
                v-icon.pl-2 mdi-eye-settings
          v-card
            .d-flex.align-center.justify-center.text-lg-h6.py-4.px-.text-center {{ product.name }}
            v-container
              table.mx-auto(style="border-collapse:collapse; border:grey 1px solid;")
                thead.primary.white--text(style = " font-size:14px;" )
                  tr
                    th.pa-1.pa-lg-4(style="border:grey 1px solid; border-right: grey 1px solid;") Cantidad Importadores
                    th.pa-1.pa-lg-4(style="border:grey 1px solid;") Precio por Importador
                    th.pa-1.pa-lg-4(style="border:grey 1px solid; border-left: grey 1px solid;") Unidades por importador
                tbody
                  tr(v-for="(item, index) in datatable" :key="index")
                    td.text-center(style="border:grey 1px solid;") {{ item.cantidad_importadores | aproximar }}
                    td.text-center(style="border:grey 1px solid;") $ {{ item.precio_por_importador | aproximar }}
                    td.text-center(style="border:grey 1px solid;") {{ item.unidades_por_importador | aproximar }}
              .d.text-button.text-center.py-4 Precio por pieza : $ {{ (this.product.precio_venta)/(this.product.unidades) | aproximar }}

        v-dialog(v-model="dialog" :width="dialogWidth" v-if="showForProducts")
          template(v-slot:activator="{ on, attrs }")
              v-btn(dark, small color="primary", style="width:100%",v-bind="attrs", v-on="on").pa-4
                v-icon mdi-cart
                | Agregar
          v-card
            .d-flex.align-center.justify-center.text-button.text-lg-h6.py-4.px-2 Producto : {{ product.name }}
            v-container
              v-row(no-gutters)
                v-col(cols="4").pa-0
                  v-img(:src="product.image")
                v-col(cols="8").pa-8
                  v-text-field(label="Cantidad:", required, type="number", min="1", max="999", v-model="quantity")
                  p.red--text(style="font-size:12px;" v-if="addpUshed && !quantity") Nesesita agregar una cantidad
                  v-btn(dark, color="primary", style="width:100%;", @click="addCartProduct()")
                    v-icon mdi-cart
                    | Agregar

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ItemProduct',
  props: ['product', 'autenticatedByKey'],
  data: () => ({
    addpUshed: false,
    videoDialog: false,
    dialog: false,
    dialogPalette: false,
    quantity: null,
    attrs: {
      class: 'mb-10',
      boilerplate: false,
      elevation: 2
    }
  }),
  filters: {
    aproximar: (number) => {
      return Number.parseFloat(number).toFixed(2)
    }
  },
  watch: {
    videoDialog (value) {
      if (!value) {
        const $modalVideo = document.querySelector('.video-product__iframe')
        $modalVideo.src = this.product.video
      }
    }
  },
  computed: {
    ...mapGetters({ loaderProduct: 'getLoaderItemProduct', isMobile: 'getIsMobile', country: 'getCountryUser', isAuthenticated: 'isAuthenticated' }),
    dialogWidth () {
      if (this.isMobile) {
        return '100%'
      } else {
        return '30%'
      }
    },
    datatable () {
      if (this.product.cantidad_importadores) {
        const data = []
        for (let index = 0; index < this.product.cantidad_importadores; index++) {
          var row = {}
          row.cantidad_importadores = index + 1
          row.precio_por_importador = (this.product.precio_venta) / (index + 1)
          row.unidades_por_importador = (this.product.unidades) / (index + 1)
          data.push(row)
        }
        return data
      } else {
        return []
      }
    },
    showForProducts () {
      return !this.product.cantidad_importadores && (this.country !== 'PE' || this.isAuthenticated || this.autenticatedByKey)
    },
    showForPallets () {
      return this.product.cantidad_importadores && (this.country !== 'PE' || this.isAuthenticated || this.autenticatedByKey)
    }
  },
  methods: {
    addCartProduct () {
      this.addpUshed = true
      if (this.quantity) {
        this.dialog = false
        this.$store.commit('ADD_PRODUCT_CART', { product: this.product, quantity: this.quantity })
        this.$store.commit('UPDATE_TOTAL_CART')
        if (this.isMobile) {
          this.$router.push('/cart-mobile')
        } else {
          this.$store.commit('SHOW_SHOPPING_CART', true)
        }
      }
    },
    goProduct (productId) {
      this.$store.commit('SET_PRODUCT_DETAIL', this.product)
      this.$router.push(`/product/${productId}`)
    }
  }
}
</script>
<style scoped>
.image-item-product{
  max-width: 100%;
  max-height: 100%;
}
.image-pc{
  height: 300px;
}
.image-mobile{
  height: 200px;
}
.video-product-modal{
  position:relative;
    width:100%;
    height:0;
    padding-bottom:56%;
}
.video-product__iframe{
position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
</style>
