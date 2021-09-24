<template lang="pug">
          v-col(cols="4", style="max-width:300px").px-2
                    //- .alert-other-campaign(v-show="showDialog", @mouseover="showDialog = true", @mouseout="showDialog = false")
                    //-     v-card.rounded-xl.elevation-5(style="position:absolute; top: -190px; z-index:10; width:400px;").pa-4.mt-n8
                    //-         .text-center.text-h6.py-4 {{ campaign.description }}
                    //-         v-container.pa-4
                    //-             v-row(no-gutters)
                    //-                 v-col(cols="10").pa-0
                    //-                     v-card-text.py-1 Desde : {{ campaign.pais }}
                    //-                     v-card-text.py-1 Hacia : {{ campaign.destino }}
                    //-                     //- v-card-text.py-1 Via : {{ campaign.via }}
                    //-                     //- v-card-text.py-1 Cierre : {{ campaign.cierre }} | Llegada : {{ campaign.llegada }}
                    //-                 v-col(cols="2")
                    //-                     v-card-actions
                    //-                         v-btn(fab, dark, small, color="secondary", @click="goCatalog()")
                    //-                             v-icon mdi-dots-horizontal
                    //-                     .card-more-information.text-caption.text-center Ver mas
                    //-         .container-trianglulo(style="position:absolute;bottom:-60px;z-index:10; width:100%").ml-5
                    //-             .triangulo-2

                    //- v-img.rounded-xl(:src="campaign.thumbnail", style="height:100px;", @mouseover="showDialog = true", @mouseout="showDialog = false")
                    v-img.rounded-xl(:src="campaign.thumbnail", style="height:100px;cursor:pointer;", @click="goCatalog()")
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'ItemOther',
  props: ['campaign'],
  data: () => ({
    showDialog: false
  }),
  computed: {
    ...mapGetters({ rubros: 'getRubros', catalogs: 'getCatalogs', catalog: 'getCatalogSelected', loaderCampaign: 'getLoaderItemCmapaign' })
  },
  methods: {
    ...mapActions(['getRubrosAPI', 'getCatalogsAPI']),
    ...mapMutations(['SET_CAMPAIGN_SELECTED', 'SET_CATALOG_SELECTED']),
    async goCatalog () {
      console.log(this.campaign)
      if (this.campaign.id === 32) {
        this.$router.push(`/campaign-extra/${this.campaign.id}`)
        this.SET_CAMPAIGN_SELECTED(this.campaign)
      } else {
        await this.getRubrosAPI(this.campaign.id)
        await this.getCatalogsAPI(this.campaign.id)
        this.SET_CAMPAIGN_SELECTED(this.campaign)
        this.SET_CATALOG_SELECTED(this.catalogs[0])
        this.$router.push(`/${this.campaign.id}/catalog/${this.catalogs[0].name}/${this.catalogs[0].id}`)
      }
    }
  }
}
</script>
<style scoped>
.triangulo-2 {
     width: 0;
     height: 0;
     border-right: 30px solid transparent;
     border-top: 30px solid white;
     border-left: 30px solid transparent;
     border-bottom: 30px solid transparent;
}
</style>
