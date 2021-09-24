<template lang="pug">
  v-col(cols="6",sm = "6" md="4", lg="4").pa-1.px-lg-4.py-lg-4
      v-skeleton-loader(v-bind='attrs' type='card', v-if="loaderCampaign")
      v-card.card-item-campaign(v-else @click="goCatalog()").pa-0
          v-container.px-1.px-lg-6.py-0
            v-container.pa-0.d-flex.flex-row.align-center.justify-center
              v-img(:src="campaign.portada").image-item-campaign.mt-8
          v-container.text-center.container-link-campaign.mt-4.text-button
            p.text-body-2(style="width:100%") VER MAS
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ItemCampaign',
  props: ['campaign'],
  data: () => ({
    attrs: {
      class: 'mb-10',
      boilerplate: false,
      elevation: 2
    }
  }),
  computed: {
    ...mapGetters({ rubros: 'getRubros', catalogs: 'getCatalogs', catalog: 'getCatalogSelected', loaderCampaign: 'getLoaderItemCmapaign', isMobile: 'getIsMobile' })
  },
  methods: {
    ...mapActions(['getRubrosAPI', 'getCatalogsAPI']),
    ...mapMutations(['SET_CAMPAIGN_SELECTED', 'SET_CATALOG_SELECTED']),
    async goCatalog () {
      // console.log(this.campaign)
      if (this.campaign.id === 32) {
        this.$router.push(`/campaign-extra/${this.campaign.id}`)
        this.SET_CAMPAIGN_SELECTED(this.campaign)
      } else {
        await this.getRubrosAPI(this.campaign.id)
        await this.getCatalogsAPI(this.campaign.id)
        this.SET_CAMPAIGN_SELECTED(this.campaign)
        console.log(this.catalogs)
        if (this.catalogs[0]) {
          this.SET_CATALOG_SELECTED(this.catalogs[0])
          this.$router.push(`/${this.campaign.id}/catalog/${this.catalogs[0].name}/${this.catalogs[0].id}`)
        }
        window.scroll(0, 0)
      }
    }
  }
}
</script>
<style scoped>
.card-item-campaign:hover{
  color: orangered !important;
  text-decoration-line: underline;
}
</style>
