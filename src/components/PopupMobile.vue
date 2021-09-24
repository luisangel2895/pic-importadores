<template lang="pug">
        v-card.px-2.py-3(fluid style="position:fixed;z-index:20; bottom:0px; width:100%;" v-if="getMobilePop" :style="{ height: mobileHeight}").accent2.container-inner-exit-mobile
          .d-flex.flex-row.justify-end
            v-btn(fab, dark @click="clickOut" color="primary")
              v-icon(size="25") mdi-close
          v-container.d-flex.flex-column.pa-0.mt-n8
            .row-title.d-flex.flex-row.justify-center
              .titulo-p1.primary--text HEY
              .titulo-p2.primary--text ANTES DE IRTE !
            v-divider(horizontal).py-1
            .row-logo.d-flex.flex-column
              v-row(no-gutters).pa-2.blue-grey.lighten-4.align-center
                v-col.pa-1
                  .d.primary--text(style="font-weight:bolder; font-size:15px;") APRENDE A IMPORTAR GRATIS
                  .d.primary--text.py-1.pb-2(style="line-height:1.0; font-size:14px;") Los mejores recursos para aprender desde cero
                  a(href="https://www.pic-cargo.com/es/noticias/taller-importaciones-11-12-septiembre/" style="text-decoration:none;")
                    v-btn(small, outlined, color="primary") VER MAS AQUI
                v-col
                  v-dialog(v-model="videoDialogAprende" width="800")
                    template(v-slot:activator="{ on, attrs }")
                      v-btn(small, fab, dark, color="red", style="position: absolute; z-index:2;", v-bind="attrs", v-on="on")
                        v-icon mdi-play
                    .video-product-modal
                      iframe.video-product__iframe-1(src="https://www.youtube.com/embed/lzd8-jM9mao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  img(src="../assets/pop-mobile/aprende-importar.png" style="width:100%")
              v-row(no-gutters).pa-2.align-center(style="background-color:#0F436C;")
                v-col
                  .d.accent2--text(style="font-weight:bolder; font-size:15px;") COTIZA TU FLETE EN 2 MINUTOS
                  .d.accent2--text.py-1.pb-2(style="line-height:1.0; font-size:14px;") La calculadora gratis y fácil de usar
                  a(href="https://www.calculadoradefletes.com/" style="text-decoration:none;")
                    v-btn(small, dark, color="terciary") COTIZA AQUI
                v-col.text-center
                  img(src="../assets/popup/cotiza-flete.png" style="height:100px;")
              v-row(no-gutters).pa-2.align-center
                v-col
                  img(src="../assets/pop-mobile/agente-carga.png" style="width:100%")
                v-col.text-right
                  .d.primary--text(style="font-weight:bolder; font-size:15px;") NECESITAS UN AGENTE DE CARGA Y ADUANA
                  .d.primary--text.py-1.pb-2(style="line-height:1.0; font-size:14px;") El traslado de tu mercancía en manos confiables
                  a(href="https://wa.link/qv3uxg" style="text-decoration:none;")
                    v-btn(small, dark, color="terciary") VER MAS AQUI
              v-row(no-gutters).pa-2.align-center(style="background-color:#0F436C;")
                v-col
                  v-dialog(v-model="videoDialogCapital" width="800")
                    template(v-slot:activator="{ on, attrs }")
                      v-btn(small,fab, dark, color="red", style="position: absolute; z-index:2;", v-bind="attrs", v-on="on")
                        v-icon mdi-play
                    .video-product-modal
                      iframe.video-product__iframe-2(src="https://www.youtube.com/embed/YAAamNCy870" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  img(src="../assets/pop-mobile/proveedores-confiables.png" style="width:100%")
                v-col.text-right
                  .d.accent2--text(style="font-weight:bolder; font-size:15px;") ¿COMPRANDO EN ALIBABA?
                  .d.accent2--text.py-1.pb-2(style="line-height:1.0; font-size:14px;") Encontrando proveedores confiables
                  a(href="https://www.pic-cargo.com/es/noticias/pasos-para-comprar-en-alibaba/" style="text-decoration:none;")
                    v-btn(small, outlined, color="white" style="background-color:#0F436C;") VER MAS AQUI
              v-row(no-gutters).pa-2.blue-grey.lighten-4.align-center
                v-col
                  .d.primary--text(style="font-weight:bolder; font-size:15px;") PASOS PARA UND ESPACHO DE ADUANA
                  .d.primary--text.py-1.pb-2(style="line-height:1.0; font-size:14px;") Minimiza el gasto de tus impuestos
                  a(href="https://www.pic-cargo.com/es/agencia-de-aduana-agente-aduanal/" style="text-decoration:none;")
                    v-btn(small, outlined, color="primary") VER MAS AQUI
                v-col
                  v-dialog(v-model="videoDialogPasos" width="800")
                    template(v-slot:activator="{ on, attrs }")
                      v-btn(small,fab, dark, color="red", style="position: absolute; z-index:2;", v-bind="attrs", v-on="on")
                        v-icon mdi-play
                    .video-product-modal
                      iframe.video-product__iframe-3(src="https://www.youtube.com/embed/aViiB6wgeLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  img(src="../assets/pop-mobile/pasos-despacho.png" style="width:100%")
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PopupMobile',
  data: () => ({
    videoDialogAprende: false,
    videoDialogCapital: false,
    videoDialogPasos: false
  }),
  computed: {
    ...mapGetters(['getMobilePop', 'getMobileHeight']),
    mobileHeight () {
      if (this.getMobileHeight) {
        return this.getMobileHeight + 'px'
      } else {
        return '500px'
      }
    }
  },
  methods: {
    clickOut () {
      this.$store.commit('STATUS_SHOW_COVER', false)
      this.$store.commit('STATUS_MOBILE_POPUP', false)
    }
  },
  watch: {
    videoDialogAprende (value) {
      if (!value) {
        const $modalVideo = document.querySelector('.video-product__iframe-1')
        $modalVideo.src = 'https://www.youtube.com/embed/lzd8-jM9mao'
      }
    },
    videoDialogCapital (value) {
      if (!value) {
        const $modalVideo = document.querySelector('.video-product__iframe-2')
        $modalVideo.src = 'https://www.youtube.com/embed/YAAamNCy870'
      }
    },
    videoDialogPasos (value) {
      if (!value) {
        const $modalVideo = document.querySelector('.video-product__iframe-3')
        $modalVideo.src = 'https://www.youtube.com/embed/aViiB6wgeLg'
      }
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
.titulo-p1{
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: bold;
}
.titulo-p2{
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: 500;
}
.container-inner-exit-mobile{
  animation-name: slide-up;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes slide-up {
  0% {bottom: -100%;}
  100% {bottom: 0px;}
}
.video-product-modal{
  position:relative;
    width:100%;
    height:0;
    padding-bottom:56%;
}
.video-product__iframe-1{
position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
.video-product__iframe-2{
position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
.video-product__iframe-3{
position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
</style>
