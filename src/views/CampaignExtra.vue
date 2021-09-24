<template lang="pug">
    v-container(fluid)
        v-container.text-center
          .d.text-h6.text-lg-h5 Contenido de un lote de laptops
          img(:src="require(`../assets/campaign/campaign_laptop/laptops1.png`)" style="width:100%; max-width:900px;")
        other-campaigns.d-none.d-lg-flex
</template>
<script>
import OtherCampaigns from '../components/OtherCampaigns.vue'
export default {
  name: 'CampaignExtra',
  components: {
    OtherCampaigns
  }
}
</script>
<style scoped>
.image-pc{
  width: 800px;
}
.image-mobile{
  width: 100%;
}
</style>
