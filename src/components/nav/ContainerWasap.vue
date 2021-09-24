<template lang="pug">
    v-container(fluid).accent2.pa-0.elevation-3.py-2.d-none.d-lg-flex
        v-container.pa-0(style="width:80%")
            v-row(no-gutters)
                v-speed-dial(v-model="wasap", direction="bottom", transition="slide-y-transition",style="position:block;" ).d-none.d-lg-flex.mt-n1
                  template(v-slot:activator)
                    .sdf(v-model="wasap")
                      v-btn(color="whatsapp", dark, fab width="50" height="50" style="z-index:7")
                        v-icon(v-if="wasap" size="30") mdi-close
                        v-icon(v-else size="30") mdi-whatsapp
                      v-btn(large, dark, color="whatsapp").ml-n5
                        .d-flex.flex-column(style="line-height:1.3;").pl-5
                          .d UNETE A NUESTRO GRUPOS
                          .d DE IMPORTADORES
                      v-icon.whatsapp--text(size="42" style="posicion:relative; left:-15px") mdi-play
                  v-list.mr-16.elevation-5.pa-0
                      v-list-item.text-h6.primary.accent2--text Seleccione su pais
                      v-list-item.item-dial-wasap(v-for="(country, index) in countries" :key="index", style="border-bottom:1px solid #EAEDED;").py-0
                        a(:href="country.link" style="width:100%; text-decoration:none;")
                          v-avatar(size="30").mr-3
                              img(:src="require(`@/assets/nav/${country.flag}`)" alt="Flag")
                          | {{ country.name }}
                v-col.d-flex.flex-row.align-center.justify-right
                    country-wasap(v-for="(country, index) in countries" :key="index" :country="country")(style="width:120px")
                v-divider(vertical)
                v-col().d-flex.flex-row.align-center.justify-center
                    .workshop-title.mx-4(style="font-size:14px") APRENDE A IMPORTAR GRATIS
                    v-btn(dark, color="accent")
                      a(href="https://www.pic-cargo.com/es/noticias/taller-importaciones/" style="width:100%; text-decoration:none; color:white")
                        | Unete aqui
                        v-icon.ml-2 mdi-laptop
</template>
<script>
import CountryWasap from '../nav/CountryWasap.vue'

export default {
  name: 'ContainerWasap',
  components: {
    CountryWasap
  },
  data: () => ({
    wasap: false,
    countries: [
      { name: 'Panama', number: '+507 6219 4664', flag: 'Flag_of_Panama.svg', link: 'https://chat.whatsapp.com/BjCygW9T1yDKlwq0MLygac' },
      { name: 'Peru', number: '+51 920 301 745', flag: 'Flag_of_Peru.svg', link: 'https://chat.whatsapp.com/GQunqHtcmPR4X5unyVQ9qc' },
      { name: 'Venezuela', number: '+58 212 763 2240', flag: 'Flag_of_Venezuela.jpg', link: 'https://chat.whatsapp.com/H7ax5czGMWf9GwxBUwCSbE' }
    ]
  })
}
</script>
