<template lang="pug">
    v-footer.primary.d-none.d-lg-none
        v-container(style="width:80%").accent2--text
          v-row(no-gutters)
            v-col(cols="12" lg="6")
              v-container.d-flex.flex-column.flex-lg-row.justify-center.text-caption
                .servicio.px-2.pb-4.pb-lg-0
                  v-icon.accent2--text.text-body-2.px-1 mdi-calculator
                  | SERVICIOS DE PIC CARGO
                .somos.px-2.pb-4.pb-lg-0
                  v-icon.accent2--text.text-body-2.px-1 mdi-account-group-outline
                  | QUIENES SOMOS
                .contacto.px-2.pb-4.pb-lg-0
                  v-icon.accent2--text.text-body-2.px-1 mdi-phone
                  | CONTACTO
            v-col(cols="12" lg="6")
              v-container.d-flex.flex-column-reverse.flex-lg-row.justify-center.text-caption
                .copy.justify-center Copyright © 2021 PIC Cargo
                .social-networks.d-flex.flex-row.justify-center.pb-4.pb-lg-0
                  .facebook.px-2
                    v-icon.accent2--text.text-body-2 mdi-facebook
                  .twitter.px-2
                    v-icon.accent2--text.text-body-2 mdi-twitter
                  .instagram.px-2
                    v-icon.accent2--text.text-body-2 mdi-instagram
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style lang="css">
.background-footer{
  background-color: #1D2B50;
}
</style>
