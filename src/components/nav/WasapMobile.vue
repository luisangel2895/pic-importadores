<template lang="pug">
    v-container(fluid style="position:fixed; z-index:5; bottom:0px;").d-lg-none.pa-0.ma-0
        v-row(no-gutters).justify-center.whatsapp.py-3.accent2--text.text-subtitle-2
            v-icon.px-1.accent2--text.accent2--text mdi-whatsapp
            | UNETE AL GRUPO DE IMPORTADORES
        v-row(no-gutters).accent2
            v-col(v-for="(country, index) in countries" :key="index", cols="4")
                country-wasap(:country="country", style="width:100%;")
</template>
<script>
import CountryWasap from '../nav/CountryWasap.vue'
export default {
  name: 'WasapMobile',
  components: {
    CountryWasap
  },
  data: () => ({
    countries: [
      { name: 'Panama', number: '+507 6219 4664', flag: 'Flag_of_Panama.svg', link: 'https://chat.whatsapp.com/BjCygW9T1yDKlwq0MLygac' },
      { name: 'Peru', number: '+51 920 301 745', flag: 'Flag_of_Peru.svg', link: 'https://chat.whatsapp.com/GQunqHtcmPR4X5unyVQ9qc' },
      { name: 'Venezuela', number: '+58 212 763 2240', flag: 'Flag_of_Venezuela.jpg', link: 'https://chat.whatsapp.com/H7ax5czGMWf9GwxBUwCSbE' }
    ]
  })
}
</script>
