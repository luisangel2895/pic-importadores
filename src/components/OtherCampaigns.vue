<template lang="pug">
    v-container.pa-0.container-other-campaigns(fluid, style="position:fixed; bottom:0px; z-index:2; height:100px;")
        v-container(style="width:80%")
            v-row(no-gutters).align-center
                v-col
                    .title-other-campaigns.text-lg-h5.accent2--text(style="font-weight:900") OTRAS CAMPAÑAS
                v-spacer
                item-other(v-for="(campaign, index) in otherCampaigns" :key="index" :campaign="campaign")
</template>
<script>
import ItemOther from '../components/ItemOther.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'OtherCampaigns',
  components: {
    ItemOther
  },
  data: () => ({
    showDialog: false
  }),
  computed: {
    ...mapGetters(['getCampaigns', 'getCampaignSelected']),
    otherCampaigns () {
      const others = this.getCampaigns.filter((campaign) => {
        return campaign.id !== this.getCampaignSelected.id
      })
      return others.slice(0, 3)
    }
  }
}
</script>
<style scoped>
.container-other-campaigns{
box-shadow: 1px -9px 11px -15px rgba(0,0,0,1);
-webkit-box-shadow: 1px -9px 11px -15px rgba(0,0,0,1);
-moz-box-shadow: 1px -9px 11px -15px rgba(0,0,0,1);
background-image: linear-gradient(to right, #1e88e5, #2ba0e6, #56b5e4, #82c8e1, #afd9e2, #c3e0e4, #d7e7e8, #eaeded, #eaeded, #eaeded, #eaeded, #eaeded);
  animation-name: slide-up;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes slide-up {
  0% {bottom: -100px;}
  100% {bottom: 0px;}
}

</style>
