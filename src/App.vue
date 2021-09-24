<template lang="pug">
  v-app
    .d(fluid, style="position:fixed; z-index:100; width:100%; height:15px;" @mouseover="tryExit()").d-none.d-lg-flex
    //- v-container(fluid).pa-0(@mouseleave="showDialogvExit")
    cover
    popup-exit
    popup-mobile
    navbar-component
    v-main.background
      router-view
      wasap-dial
      wasap-mobile
    footer-component
</template>

<script>
import axios from 'axios'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import WasapDial from './components/WasapDial.vue'
import WasapMobile from './components/nav/WasapMobile.vue'
import Cover from './components/Cover.vue'
import PopupExit from './components/PopupExit.vue'
import PopupMobile from './components/PopupMobile.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    WasapDial,
    WasapMobile,
    Cover,
    PopupExit,
    PopupMobile
  },
  data: () => ({
    counterExit: 0
  }),
  computed: {
    ...mapGetters(['getIsMobile'])
  },
  watch: {
    counterExit (val) {
      if (val === 2) {
        this.$store.commit('SET_EXIT_POP', true)
      }
    }
  },
  methods: {
    tryExit () {
      this.counterExit += 1
      console.log(this.counterExit)
      this.$store.commit('SET_EXIT_POP', false)
    },
    async getUbication () {
      const jsonUbication = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=c7594f46b6b648dc843787cd1c029a6f')
      console.log(jsonUbication)
      this.$store.commit('SET_COUNTRY_USER', jsonUbication.data.country_code2)
    },
    isMobile () {
      const width = window.innerWidth
      if (width < 600) {
        this.$store.commit('SET_IS_MOBILE_USER', true)
        console.log('IS MOBILE')
      } else {
        this.$store.commit('SET_IS_MOBILE_USER', false)
      }
    }
  },
  mounted () {
    this.isMobile()
    this.getUbication()
    this.counterExit = 0
    const alturaMobile = window.innerHeight
    this.$store.commit('SET_MOBILE_HEIGHT', alturaMobile)
    if (this.getIsMobile) {
      setTimeout(() => {
        this.$store.commit('STATUS_SHOW_COVER', true)
        this.$store.commit('STATUS_MOBILE_POPUP', true)
      }, 1000 * 45)
    }
  }
}
</script>

<style lang="sass">
  @import './sass/main.scss'
</style>
<style>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #EAEDED;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #34363d;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1C2B53;
}
</style>
