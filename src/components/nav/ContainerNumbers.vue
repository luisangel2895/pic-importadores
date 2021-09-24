<template lang="pug">
    .container-numbers.d-none.d-lg-flex.d-flex-column.pt-8.justify-center.rounded-b-lg.pb-1.primary
        country-number(v-for="(country, i) in countries", :key="i", :country="country")
</template>
<script>
import CountryNumber from '../nav/CountryNumber.vue'
export default {
  name: 'ContainerNumber',
  components: {
    CountryNumber
  },
  data: () => ({
    countries: [
      { name: 'Panama', number: '+507 6219 4664', flag: 'Flag_of_Panama.svg', url: 'https://chat.whatsapp.com/BjCygW9T1yDKlwq0MLygac' },
      { name: 'Peru', number: '+51 920 301 745', flag: 'Flag_of_Peru.svg', url: 'https://chat.whatsapp.com/GuQRpdA2ET54rOsgZjsDY5' },
      { name: 'Venezuela', number: '+58 212 763 2240', flag: 'Flag_of_Venezuela.jpg', url: 'https://chat.whatsapp.com/H7ax5czGMWf9GwxBUwCSbE' }
    ]
  })
}
</script>
