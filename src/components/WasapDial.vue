<template lang="pug">
      v-speed-dial(v-model="wasap", right, bottom, direction="top", transition="scale-transition",style="position:fixed; z-index:7;" class="button-watsapp").d-none.d-lg-flex.mb-16
        template(v-slot:activator)
          a(:href="getAsesorEnLinea" style="text-decoration:none;")
            .container(v-model="wasap")
              v-btn(large, dark, color="whatsapp" style="position:relative; left:10px").text-h5.py-8
                .d-flex.flex-column(style="line-height:1.3;") Asesor en lInea
              v-btn(color="whatsapp", dark, fab width="100" height="100")
                //- v-icon(v-if="wasap" size="70") mdi-close
                v-icon(size="70") mdi-whatsapp
        //- v-list.mr-16.elevation-5.pa-0
        //-     v-list-item.text-h6.primary.accent2--text Asesores Online
        //-     v-list-item.item-dial-wasap(style="border-bottom:1px solid #EAEDED;").py-0
        //-       a(:href="getAsesorEnLinea" style="width:100%; text-decoration:none;")
        //-         v-avatar(size="30").mr-3
        //-             v-icon mdi-account
        //-         | Brian
            //- v-list-item.item-dial-wasap(v-for="(country, index) in countries" :key="index", style="border-bottom:1px solid #EAEDED;").py-0
            //-   a(:href="country.link" style="width:100%; text-decoration:none;")
            //-     v-avatar(size="30").mr-3
            //-         img(:src="require(`@/assets/nav/${country.flag}`)" alt="Flag")
            //-     | {{ country.name }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WasapDial',
  data: () => ({
    wasap: false,
    countries: [
      { name: 'Panama', number: '+50 762 194 664', flag: 'Flag_of_Panama.svg', link: 'https://chat.whatsapp.com/BjCygW9T1yDKlwq0MLygac' },
      { name: 'Peru', number: '+51 920 301 745', flag: 'Flag_of_Peru.svg', link: 'https://chat.whatsapp.com/GQunqHtcmPR4X5unyVQ9qc' },
      { name: 'Venezuela', number: '+58 212 763 2240', flag: 'Flag_of_Venezuela.jpg', link: 'https://chat.whatsapp.com/F0A0dOrWoYEFDCLjN06m9l' }
    ]
  }),
  // watch: {
  //   wasap (val) {
  //     this.$store.commit('STATUS_SHOW_COVER', val)
  //   }
  // },
  computed: {
    ...mapGetters(['getAsesorEnLinea'])
  }
}
</script>
<style>
.item-dial-wasap{
  cursor: pointer;
}
.item-dial-wasap:hover{
  background-color: #cfd8dc;
}
</style>
