<template lang="pug">
    v-container(fluid).pa-0
      v-container(fluid).pa-0.container-product-inner
        v-btn.d-flex.d-lg-none(style="width:100%" color="accent" @click="gobackCatalog()")
          v-icon mdi-chevron-left
          | Volver al catalogo
        v-card
          v-container.pt-lg-14
            v-row(no-gutters)
              v-col(cols="12" lg="6")
                    v-img(:src="getProductToDetail.image", width="60%").mx-auto
                    v-card-subtitle.text-lg-h4.text-h5.text-center(v-if="showForProducts") Precio: $ {{ getProductToDetail.precio_venta }}
                    v-container(v-if="showForPallets")
                      table.mx-auto(style="border-collapse:collapse; border:grey 1px solid;")
                        thead.primary.white--text(style = " font-size:14px;" )
                          tr
                            th.pa-1.pa-lg-4(style="border:grey 1px solid; border-right: grey 1px solid;") Cantidad Importadores
                            th.pa-1.pa-lg-4(style="border:grey 1px solid;") Precio por Importador
                            th.pa-1.pa-lg-4(style="border:grey 1px solid; border-left: grey 1px solid;") Unidades por importador
                        tbody
                          tr(v-for="(item, index) in datatable" :key="index")
                            td.text-center(style="border:grey 1px solid;") {{ item.cantidad_importadores }}
                            td.text-center(style="border:grey 1px solid;") $ {{ item.precio_por_importador }}
                            td.text-center(style="border:grey 1px solid;") {{ item.unidades_por_importador }}
                      .d.text-button.text-center.py-4 Precio por pieza : $ {{ (this.getProductToDetail.precio_venta)/(this.getProductToDetail.unidades) | aproximar }}
                    v-container(style="width:60%"  v-if="showForProducts")
                      v-text-field(label="Cantidad", v-model="quantity",type="number",min="1", style="width:100%")
                      p.red--text(style="font-size:12px;" v-if="addpUshed && !quantity") Nesesita agregar una cantidad
                      v-btn.btn-add-cart(dark, color="primary", style="width:100%",  @click="addCartProduct()")
                          v-icon mdi-cart
                          | Agregar
              v-col(cols="12" lg="6").pa-0
                .product-title.text-lg-h5.text-button.py-4 {{ getProductToDetail.name }}
                v-container.pa-0
                  .video-product.mb-6(v-if="getIsMobile && getProductToDetail.video")
                    iframe.video-product__iframe(v-if="getProductToDetail.video" :src="getProductToDetail.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  .text-body-2.text-lg-subtitle-1.px-0.pb-4(v-if="descriptionFormated" style="line-height:1.3;" v-html="descriptionFormated")
                  .video-product(v-if="getProductToDetail.video")
                    iframe.video-product__iframe(v-if="getProductToDetail.video" :src="getProductToDetail.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  //- .d-flex.flex-column.mx-auto(v-if="getIsMobile" style="width:100%")
                  //-   v-card-subtitle.text-lg-h4.text-h5.text-center(v-if="showForProducts") Precio: $ {{ getProductToDetail.precio_venta }}
                  //-   v-text-field(label="Cantidad", v-model="quantity",type="number",min="1", style="width:100%" v-if="showForProducts")
                  //-   v-btn.btn-add-cart(dark, color="primary", style="width:100%",  @click="addCartProduct()" v-if="showForProducts")
                  //-       v-icon mdi-cart
                  //-       | Agregar
                //- v-dialog(v-model="dialogPalette2" width="100%" v-if="showForPallets")
                //-       template(v-slot:activator="{ on, attrs }")
                //-           v-btn(dark, small color="terciary", style="width:100%",v-bind="attrs", v-on="on").pa-4.mt-4
                //-             | Ver precios
                //-             v-icon.pl-2 mdi-eye-settings
                //-       v-card
                //-         .d-flex.align-center.justify-center.text-lg-h6.py-4.px-.text-center {{ getProductToDetail.name }}
                //-         v-container
                //-           table.mx-auto(style="border-collapse:collapse; border:grey 1px solid;")
                //-             thead.primary.white--text(style = " font-size:14px;" )
                //-               tr
                //-                 th.pa-1.pa-lg-4(style="border:grey 1px solid; border-right: grey 1px solid;") Cantidad Importadores
                //-                 th.pa-1.pa-lg-4(style="border:grey 1px solid;") Precio por Importador
                //-                 th.pa-1.pa-lg-4(style="border:grey 1px solid; border-left: grey 1px solid;") Unidades por importador
                //-             tbody
                //-               tr(v-for="(item, index) in datatable" :key="index")
                //-                 td.text-center(style="border:grey 1px solid;") {{ item.cantidad_importadores }}
                //-                 td.text-center(style="border:grey 1px solid;") $ {{ item.precio_por_importador }}
                //-                 td.text-center(style="border:grey 1px solid;") {{ item.unidades_por_importador }}
      //- other-campaigns.d-none.d-lg-flex
</template>
<script>
import OtherCampaigns from '../components/OtherCampaigns.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Product',
  components: {
    OtherCampaigns
  },
  data: () => ({
    addpUshed: false,
    quantity: null,
    descriptionFormated: null,
    autenticatedByKey: false,
    dialogPalette: false,
    dialogPalette2: false
  }),
  computed: {
    ...mapGetters(['getProductToDetail', 'getIsMobile', 'getCountryUser', 'isAuthenticated']),
    dialogWidth () {
      if (this.isMobile) {
        return '100%'
      } else {
        return '30%'
      }
    },
    datatable () {
      if (this.getProductToDetail.cantidad_importadores) {
        const data = []
        for (let index = 0; index < this.getProductToDetail.cantidad_importadores; index++) {
          var row = {}
          row.cantidad_importadores = index + 1
          row.precio_por_importador = (this.getProductToDetail.precio_venta) / (index + 1)
          row.unidades_por_importador = (this.getProductToDetail.unidades) / (index + 1)
          data.push(row)
        }
        return data
      } else {
        return []
      }
    },
    showForProducts () {
      return !this.getProductToDetail.cantidad_importadores && (this.getCountryUser !== 'PE' || this.isAuthenticated || this.autenticatedByKey)
    },
    showForPallets () {
      return this.getProductToDetail.cantidad_importadores && (this.getCountryUser !== 'PE' || this.isAuthenticated || this.autenticatedByKey)
    }
  },
  filters: {
    aproximar: (number) => {
      return Number.parseFloat(number).toFixed(2)
    }
  },
  methods: {
    addCartProduct () {
      this.addpUshed = true
      if (this.quantity) {
        this.$store.commit('ADD_PRODUCT_CART', { product: this.getProductToDetail, quantity: this.quantity })
        this.$store.commit('UPDATE_TOTAL_CART')
        if (this.getIsMobile) {
          this.$router.push('/cart-mobile')
        } else {
          this.$store.commit('SHOW_SHOPPING_CART', true)
        }
      }
    },
    gobackCatalog () {
      this.$router.go(-1)
    }
  },
  mounted () {
    var texto = this.getProductToDetail.caracteristicas
    // console.log(texto)
    this.descriptionFormated = texto.replace(/\n/g, '<br />')
    // console.log(this.descriptionFormated)
    if (this.$route.params.key) {
      const key = this.$route.params.key
      if (key === 'pictemp123') {
        this.autenticatedByKey = true
        console.log('autenticado por key')
      } else {
        this.autenticatedByKey = false
      }
    } else {
      this.autenticatedByKey = false
    }
  }
}
</script>
<style scoped>
.video-product{
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
.btn-add-cart{
  animation: moving 8s infinite;
}
.container-product-inner{
  width: 100%;
  margin-top: 0px;
  margin-bottom:100px;
}
@keyframes moving {
  1%   {left:0px;}
  2%  {left:50px;}
  3%  {left:-50px;}
  4%  {left:10px;}
  5% {left:-10px;}
  6% {left: 0px;}
  100% {left: 0px;}
}
@media only screen and (min-width: 1264px) {
  .container-product-inner{
    width: 70%;
  margin-top: 50px;
  }
}
</style>
