<template lang="pug">

-var branch = 'PIC'
-var slogan = ['IMPORTACIONES', 'GRUPALES']
-var button = ['mi cuenta']

nav
    v-app-bar.nav-up(app)
        v-container(fluid).d-flex.flex-column.pa-0.pt-lg-10
            v-container(fluid).d-flex.flex-row.justify-start.container-inner-nav
                v-app-bar-nav-icon.accent2--text.d-flex.d-lg-none(@click="drawermenu = true")
                .branch-container.d-flex.flex-row.accent2--text
                        img.branch-image(src="../assets/nav/logo.svg" style="cursor:pointer;" @click="goHome()").pa-1.mt-2.pa-lg-0.mt-lg-0
                v-spacer
                .menu-container.d-flex.flex-column.align-self-end
                    container-numbers
                    .d-flex.flex-row.justify-end.align-center
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                router-link(to="/").nav-element__link.text-body-2.accent2--text Home
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                a.nav-element__link.text-body-2.accent2--text(href="https://calculadoradefletes.com/") Cotiza tu flete
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                a.nav-element__link.text-body-2.accent2--text(href="https://www.pic-cargo.com/es/noticias/taller-importaciones/") Aprende a Importar
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                a.nav-element__link.text-body-2.accent2--text(href="https://www.pic-cargo.com/es/agencia-de-aduana-agente-aduanal/") Servicios
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                router-link(to="/faq").nav-element__link.text-body-2.accent2--text Como Participar
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .nav-element__links.d-none.d-lg-flex.flex-row
                                a.nav-element__link.text-body-2.accent2--text(href="https://www.pic-cargo.com/es/contact/") Contacto
                                .divisor.mx-2.accent2--text |
                        .nav-element
                            .text-center.d-none.d-lg-flex
                                logout-menu(v-if="isAuthenticated")
                                v-dialog(v-model="showLoginCard", max-width="500px")
                                  template(v-slot:activator="{ on, attrs }")
                                    v-btn(v-show="!isAuthenticated", small, color="accent", dark, v-bind="attrs", v-on="on") INICIAR SESION
                                  login-card
                            .d-flex.d-lg-none
                              logout-menu(v-if="isAuthenticated")
                              v-btn(v-show="!isAuthenticated", small, color="primary", dark, @click="goLoginMobile()", style="font-size:10px;").mb-2.mb-lg-0 INICIAR SESION
                        .divisor.mx-2.accent2--text.d-none.d-lg-flex |
                        .nav-element.d-none.d-lg-flex
                            v-btn(icon, color="accent2",@click="showShoppingCart()")
                                v-icon(style="font-size:20px;") mdi-cart
            container-wasap.mt-n3
    shopping-cart
    v-navigation-drawer(v-model='drawermenu' fixed, temporary)
      v-list(nav='' dense='')
        v-list-item-group(v-model='groupmenu' active-class='deep-purple--text text--accent-4')
          router-link(to="/").text-body-2(style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-home
              v-list-item-content Inicio
          a.text-body-2(href="https://calculadoradefletes.com/" style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-ferry
              v-list-item-content Cotiza tu flete
          a.text-body-2(href="https://www.pic-cargo.com/es/noticias/taller-importaciones/" style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-laptop
              v-list-item-content Aprende a Importar Gratis
          a.text-body-2(href="https://www.pic-cargo.com/es/agencia-de-aduana-agente-aduanal/" style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-calculator
              v-list-item-content Servicios
          router-link(to="/faq").text-body-2(style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-help
              v-list-item-content Como Participar
          a.text-body-2(href="https://www.pic-cargo.com/es/contact/" style="width:100%; text-decoration:none;")
            v-list-item
              v-list-item-icon
                v-icon mdi-phone
              v-list-item-content Contacto
</template>
<script>
import ShoppingCart from '../components/cart/ShoppingCart.vue'
import ContainerNumbers from '../components/nav/ContainerNumbers.vue'
import ContainerWasap from '../components/nav/ContainerWasap.vue'
import LoginCard from '../components/nav/LoginCard.vue'
import LogoutMenu from '../components/nav/LogoutMenu.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'NavbarComponent',
  components: {
    ContainerNumbers,
    ContainerWasap,
    ShoppingCart,
    LoginCard,
    LogoutMenu
  },
  data: () => ({
    drawermenu: false,
    groupmenu: null,
    showLoginCard: false,
    navElements: [
      { name: 'Home', route: 'https://pic-importadores.com/', icon: 'mdi-home' },
      { name: 'Cotiza tu flete', route: 'https://calculadoradefletes.com/', icon: 'mdi-ferry' },
      { name: 'Talleres', route: 'https://www.pic-cargo.com/es/noticias/taller-importaciones-11-12-septiembre/', icon: 'mdi-laptop' },
      { name: 'Servicios', route: 'https://www.pic-cargo.com/es/agencia-de-aduana-agente-aduanal/', icon: 'mdi-calculator' },
      { name: 'Preguntas Frecuentes', route: 'https://calculadoradefletes.com/faq', icon: 'mdi-cash-multiple' },
      { name: 'Contacto', route: 'https://www.pic-cargo.com/es/contact/', icon: 'mdi-phone' }
    ],
    countries: [
      { name: 'Panama', number: '+50 762 194 664', flag: 'Flag_of_Panama.svg' },
      { name: 'Peru', number: '+51 920 301 745', flag: 'Flag_of_Peru.svg' },
      { name: 'Venezuela', number: '+58 212 763 2240', flag: 'Flag_of_Venezuela.svg' }
    ]
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'getShowLoginCard', 'getIsMobile'])
  },
  watch: {
    showLoginCard (value) {
      this.$store.commit('SHOW_LOGIN_CART', value)
    },
    getShowLoginCard (value) {
      this.showLoginCard = value
    },
    groupmenu () {
      this.drawermenu = false
    }
  },
  methods: {
    showShoppingCart () {
      console.log(this.getIsMobile)
      if (this.getIsMobile) {
        this.$router.push('/cart-mobile', () => {})
      } else {
        this.$store.commit('SHOW_SHOPPING_CART', true)
      }
    },
    goLoginMobile () {
      this.$router.push('/login-mobile', () => {})
    },
    goHome () {
      this.$router.push('/', () => {})
    }
  }
}
</script>
<style lang="css">
.nav-element__link{
    text-decoration: none;
    color: white;
}
.nav-up{
    background-image: linear-gradient(to left, #584ae8, #4f56e9, #4960e8, #4569e6, #4571e4, #4177e3, #3f7de2, #4083e0, #3b89e0, #3a8fdf, #3b94dd, #4099db);
}
.v-toolbar__content{
    padding: 0px !important;
}
.branch-image{
    height: 30px;
}
.container-inner-nav{
  width: 100%;
}

/* TO LARGE > 1264px */
@media (min-width: 1264px) {
  nav{
    height: 81px;
  }
  .nav-up{
    height: 90px !important;
  }
  .branch-container{
    margin-top: 49px;
  }
  .branch-image{
    height: 40px;
  }
  .container-inner-nav{
  width: 100%;
  }
}
</style>
