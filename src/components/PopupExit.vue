<template lang="pug">
    v-dialog(v-model='dialog' width='950' transition="dialog-top-transition")
        v-card.pa-10
          .d-flex.flex-row.justify-end.mt-n8.mr-n8
            v-btn(icon, @click="dialog = false" color="titles")
              v-icon(size="20") mdi-close
          v-container.d-flex.flex-column.pa-0
            .row-title.d-flex.flex-column.text-center.pb-4
              .titulo-p1.primary--text(style="line-height:1.0;") ESPERA! TENEMOS MAS PARA TI
              .titulo-p2.primary--text(style="line-height:1.0;") SERVICIOS EXCLUSIVOS
            v-row(no-gutters)
              v-col(cols="4").pa-4
                v-card.pb-1
                  .image-container.text-center
                    img(src="../assets/popup/aprende-importar.png" width="80%")
                  .text-container.d-flex.flex-column.text-center.primary--text(style="line-height:1.0;")
                    .text-p1 APRENDE
                    .text-p2 A IMPORTAR
                    .text-p3 GRATIS
                  .button-container.text-center.my-6
                    a(href="https://www.pic-cargo.com/es/noticias/taller-importaciones-11-12-septiembre/")
                      v-btn(dark, large, color="primary").rounded-lg APUNTATE AHORA
              v-col(cols="4").pa-4
                v-card.pb-1
                  .image-container.text-center
                    img(src="../assets/popup/cotiza-flete.png" width="80%")
                  .text-container.d-flex.flex-column.text-center.primary--text(style="line-height:1.0;")
                    .text-p1 COTIZA
                    .text-p2 TU FLETE
                    .text-p3 EN 2 MINUTOS
                  .button-container.text-center.my-6
                    a(href="https://calculadoradefletes.com/")
                      v-btn(dark, large, color="primary").rounded-lg OBTENER COTIZACION
              v-col(cols="4").pa-4
                v-card.pb-1
                  .image-container.text-center
                    img(src="../assets/popup/agente-aduana.png" width="80%")
                  .text-container.d-flex.flex-column.text-center.primary--text(style="line-height:1.0;")
                    .text-p1 TU AGENTE
                    .text-p2 DE ADUANA
                    .text-p3 DE CONFIANZA
                  .button-container.text-center.my-6
                    a(href="https://www.pic-cargo.com/es/agencia-de-aduana-agente-aduanal/")
                      v-btn(dark, large, color="primary").rounded-lg QUIERO UN AGENTE
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PopupExit',
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapGetters(['getExitPop'])
  },
  watch: {
    getExitPop (val) {
      this.dialog = val
    },
    dialog (val) {
      this.$store.commit('SET_EXIT_POP', val)
    }
  }
}
</script>
<style scoped>
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamBold.ttf');
    font-weight: bold;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamLight.ttf');
    font-weight: lighter;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamBook.ttf');
    font-weight: 500;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamBlack.otf');
    font-weight: 900;
}
.titulo-p1{
  font-family: 'Gotham';
  font-size: 35px;
  font-weight: 900;
}
.titulo-p2{
  font-family: 'Gotham';
  font-size: 35px;
  font-weight: 500;
}
.text-container{
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: 900;
}
</style>
