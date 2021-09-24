<template lang="pug">
    v-container(fluid)
        .text-right.d-lg-none
                v-icon(@click="goback()") mdi-close
        v-container.accent2.my-lg-10.container-importadores-inner
            v-row(no-gutters)
                v-col(cols="12" lg="6")
                    v-card
                        .d-flex.justify-center
                            img(:src="campaignStock.portada"  height="300px" width="300px")
                        v-card-title {{campaignStock.name}}
                        v-card-subtitle {{campaignStock.description}}
                v-col(cols="12" lg="6")
                    v-container(v-if="getImportadores.length")
                        table.mx-auto(style="border-collapse:collapse; border:grey 1px solid;")
                            thead.terciary.white--text.i(style = " font-size:14px;" )
                                tr
                                    th.pa-2.pa-lg-4(style="border:grey 1px solid; border-right: grey 1px solid;") Nombre
                                    th.pa-2.pa-lg-4(style="border:grey 1px solid; border-left: grey 1px solid;") Telefono
                                    th.pa-2.pa-lg-4(style="border:grey 1px solid; border-left: grey 1px solid;") Provincia
                            tbody
                                tr(v-for="(importador, index) in getImportadores" :key="index")
                                    td.text-center.py-2.px-5(style="border:grey 1px solid;") {{ importador.importador }}
                                    td.text-center.py-2.px-5(style="border:grey 1px solid;") {{ importador.telefono }}
                                    td.text-center.py-2.px-5(style="border:grey 1px solid;") {{ importador.provincia }}
                    v-container(v-else) No hay importadores para mostrar
        .d-flex.d-lg-none(style="height:100px")
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Importadores',
  data: () => ({
  }),
  methods: {
    ...mapActions(['getCampaignsStockAPI', 'getImportadoresAPI']),
    goback () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['getImportadores', 'getCampaignsStock']),
    campaignStock () {
      return this.getCampaignsStock.filter((campaign) => {
        return campaign.id === Number(this.$route.params.idCampaign)
      })[0]
    }
  },
  mounted () {
    window.scroll(0, 0)
    this.getCampaignsStockAPI()
    this.getImportadoresAPI(this.$route.params.idCampaign)
  }
}
</script>
<style scoped>
.container-importadores-inner{
    width: 100%;
  }

@media only screen and (min-width: 1264px) {
  .container-importadores-inner{
    width: 70%;
  }
}
</style>
