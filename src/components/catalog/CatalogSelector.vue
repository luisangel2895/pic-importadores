<template lang="pug">
          .d-flex.flex-column
            .d-flex.justify-center.py-2(style="font-weight:bold") Seleccione un catalogo:
            v-expansion-panels(accordion)
                v-expansion-panel(v-for="(rubro, keyRubro) in getRubros" :key="keyRubro")
                    v-expansion-panel-header {{ rubro.name }}
                    v-expansion-panel-content(v-for="(catalog, keyCatalog) in catalogsOfThisRubro(rubro.id)" :key="keyCatalog").container-category
                        v-container(@click="showCatalog(catalog.name, catalog.id)", style="cursor:pointer;") {{ catalog.name }}
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CatalogSelector',
  data: () => ({
  }),
  computed: {
    ...mapGetters(['getRubros', 'getCatalogs', 'getCampaignSelected'])
  },
  methods: {
    ...mapActions(['getCampaignsAPI', 'setCampaignSelected', 'getRubrosAPI', 'getCatalogsAPI', 'setCatalogSelected']),
    catalogsOfThisRubro (id) {
      const catalogs = this.getCatalogs.filter((catalog) => catalog.id_rubro === id)
      return catalogs
    },
    showCatalog (catalogName, catalogId) {
      this.$router.push(`/${this.getCampaignSelected.id}/catalog/${catalogName}/${catalogId}`, () => {})
      window.scroll(0, 0)
    },
    async createValues () {
      this.loaderText = false
      await this.getCampaignsAPI()
      await this.setCampaignSelected(this.$route.params.idCampaign)
      await this.getRubrosAPI(this.$route.params.idCampaign)
      await this.getCatalogsAPI(this.$route.params.idCampaign)
      await this.setCatalogSelected(this.$route.params.idCatalog)
      this.loaderText = true
    }
  },
  mounted () {
    if (this.getCampaignSelected) {
      this.loaderText = true
    } else {
      this.createValues()
    }
  }
}
</script>
<style scoped>
.container-category:hover{
  background-color: #cfd8dc;
}
</style>
