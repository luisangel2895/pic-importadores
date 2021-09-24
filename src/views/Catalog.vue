<template lang="pug">
    v-container(fluid).background.pa-0
      .d-flex.flex-column.d-lg-none.secondary.accent2--text(style="width:100%;position:fixed; z-index:3")
        //- v-row(no-gutters).py-1.primary.justify-center.text-button.text-center(style="line-height:1.5") {{ getCampaignSelected.description }}
        a(no-gutters).py-1.justify-center.text-center.cyan.lighten-2.black--text(style="line-height:1.5; cursor:pointer; text-decoration:none;" href="https://www.pic-cargo.com/es/noticias/taller-importaciones/")
          .d.text-body-1.d-flex.flex-row.justify-center(style="font-weight:bold;")
            .d APRENDE A IMPORTAR
            .d.px-1.accent--text GRATIS
            .d.red--text ⏩ (Click Aqui)
        .py-1.accent2
          .d-flex.flex-column
            .d-flex.flex-row.justify-center
              .d.red--text(style="font-weight:bold").mx-1 IMPORTANTE:
              .d.black--text Precios incluyen:
            .d-flex.flex-row.justify-center.black--text
              .d(style="font-weight:bold") (producto) + (envio) + (aduanas)
        v-row(no-gutters).pa-0
          v-col.text-center.text-overline.pa-0.secondary(@click="goHome()", style="cursor:pointer; z-index:10") Ver mas Campañas
          v-divider(vertical, style="background-color:white;")
          v-col.text-center.text-overline.pa-0.terciary(style="cursor:pointer;" @click.stop="menuCatalogs = !menuCatalogs") Ver mas Productos
        v-row(no-gutters).pa-0
          v-col.text-center.pa-0.accent.py-2(@click="goFaq()", style="cursor:pointer; z-index:10; font-weight:bolder; font-size:16px;")
            v-icon.accent2--text.mr-2 mdi-account-group
            | COMO PARTICIPAR
      v-navigation-drawer(v-model="menuCatalogs" fixed temporary right)
        catalog-selector
      .container-inner.d-none.d-lg-flex.mx-auto(style="width:100%; max-width:1500px;").pt-lg-6
            .terciary.d-flex.flex-column.flex-lg-row.text-body-2.text-lg-body-1.py-4.px-4.mt-n6(style="color:white; position:fixed; z-index:3; width:98.5%; max-width:1500px;")
              .d-flex.flex-row.align-center
                span(@click="goCampaigns" style="cursor:pointer;").accent2--text CAMPAÑA
                v-icon.accent--text mdi-chevron-right
                span(v-if="loaderText") {{ getCampaignSelected.description }}
              v-spacer
              .d-flex.flex-row.align-center
                v-btn(dark, color="accent" @click="goFaq()")
                  v-icon.accent2--text mdi-chevron-right
                  | COMO PARTICIPAR EN NUESTRAS IMPORTACIONES
            .terciary.d-flex.flex-column.flex-lg-row.text-body-2.text-lg-body-1.py-4.px-4.mt-10.justify-center.accent2.elevation-5(style="position:fixed; z-index:10; width:98.5%; max-width:1500px;")
              .d.red--text(style="font-weight:bold").mx-1 IMPORTANTE:
              .d Los precios incluyen:
              .d(style="font-weight:bold") (El precio del producto) + (Costos de envio) + (Impuesto de aduanas)
      .container-inner-products-catalog.mx-auto(style="width:100%; max-width:1500px;").accent2.elevation-1.mt-lg-14
                v-row.py-3(no-gutters)
                    v-col(cols="0" lg="2")
                      .d-none.d-lg-flex.flex-row.justify-center
                        catalog-selector(style="width:190px; position:fixed;")
                    v-divider(vertical)
                    v-col(cols="12" lg="10" style="margin-bottom:100px;").px-0.px-lg-4
                        v-container.pa-0.pt-10.pt-lg-0.d-flex.flex-column
                            v-container.pa-0.mt-lg-n5
                                v-row(no-gutters)
                                    item-product(v-for="(product, index) in getProducts" :key="index" :product="product" :autenticatedByKey="autenticatedByKey")
      //- other-campaigns.d-none.d-lg-flex
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CatalogSelector from '../components/catalog/CatalogSelector.vue'
import ItemProduct from '../components/catalog/ItemProduct.vue'
import OtherCampaigns from '../components/OtherCampaigns.vue'

export default {
  name: 'Catalog',
  components: {
    CatalogSelector,
    ItemProduct,
    OtherCampaigns
  },
  data: () => ({
    menuCatalogs: false,
    loaderText: null,
    autenticatedByKey: false
  }),
  methods: {
    ...mapActions(['getCampaignsAPI', 'setCampaignSelected', 'getRubrosAPI', 'getCatalogsAPI', 'setCatalogSelected', 'getProductsCatalogAPI']),
    async createValues () {
      this.loaderText = false
      await this.getCampaignsAPI()
      await this.setCampaignSelected(this.$route.params.idCampaign)
      await this.getRubrosAPI(this.$route.params.idCampaign)
      await this.getCatalogsAPI(this.$route.params.idCampaign)
      await this.setCatalogSelected(this.$route.params.idCatalog)
      this.loaderText = true
    },
    goHome () {
      this.$router.push('/')
      window.scroll(0, 0)
      window.scroll(0, 450)
    },
    showCatalogs () {
      this.$store.commit('STATUS_CATALOG_MOBILE', true)
    },
    goFaq () {
      this.$router.push('/faq')
      window.scroll(0, 0)
    },
    goCampaigns () {
      this.$router.push('/')
      const altura = window.innerHeight
      window.scroll(0, 0)
      window.scroll(0, altura - 100)
    }
  },
  computed: {
    ...mapGetters(['getCampaignSelected', 'getCatalogSelected', 'getProducts']),
    numberItemsCatalog () {
      return this.catalog.length
    },
    idCatalog () {
      return this.$route.params.idCatalog
    }
  },
  watch: {
    idCatalog (idCatalogURL) {
      this.getProductsCatalogAPI(idCatalogURL)
    }
  },
  async mounted () {
    await this.getProductsCatalogAPI(this.$route.params.idCatalog)
    if (this.getCampaignSelected) {
      this.loaderText = true
    } else {
      this.createValues()
      console.log('valores creados')
    }
  },
  updated () {
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
.container-inner-products-catalog{
padding-top:100px;
}
@media (min-width: 1264px) {
  .container-inner-products-catalog{
  padding-top:50px;
  }
}
</style>
