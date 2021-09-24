<template lang="pug">
    .cover(v-if="getShowCover" @click="clickOut")
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cover',
  computed: {
    ...mapGetters(['getShowCover'])
  },
  methods: {
    clickOut () {
      this.$store.commit('STATUS_SHOW_COVER', false)
      this.$store.commit('STATUS_MOBILE_POPUP', false)
    }
  }
}
</script>
<style scoped>
.cover{
  position:fixed;
  width:100%;
  z-index:6;
  height:100%;
  background-color:rgb(33, 33, 33, 0.4);
  animation-name: show-cover;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
@keyframes show-cover {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
