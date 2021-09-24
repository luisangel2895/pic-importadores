import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1C2B53',
        secondary: colors.indigo.accent2,
        terciary: colors.blue.darken1,
        accent: colors.orange.darken2,
        accent2: colors.shades.white,
        whatsapp: '#128c7e',
        titles: colors.grey.darken2,
        background: '#EAEDED'
      }
    }
  }
})
