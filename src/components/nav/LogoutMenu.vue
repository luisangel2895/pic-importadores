<template lang="pug">
  .text-center
    v-menu(offset-y='')
      template(v-slot:activator='{ on, attrs }')
        v-btn(color='accent', small, dark, v-bind='attrs' v-on='on')
            .d-flex.flex-row.align-center
                v-icon mdi-account
                .name-user-auth.px-2 {{ getUserAuth.usuario }}
      v-list.pa-0
        v-list-item.py-0.px-2.item_list_menu
          v-list-item-title.item_list_menu__title(@click="goPanel") Panel de Administracion
        v-list-item.py-0.px-2.item_list_menu(@click="logout")
          v-list-item-title.item_list_menu__title Cerrar Sesion
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LogoutMenu',
  data: () => ({
  }),
  methods: {
    async logout () {
      await this.$store.dispatch('logOut')
      this.$router.push('/')
    },
    goPanel () {
      if (this.getTypeUser === 'senior') {
        this.$router.push('/dashboard-senior')
      } else if (this.getTypeUser === 'junior') {
        this.$router.push('/dashboard-junior')
      }
    }
  },
  computed: {
    ...mapGetters(['getUserAuth', 'getTypeUser'])
  }
}
</script>
<style scoped>
.item_list_menu{
    border-bottom: 1px solid rgb(201, 201, 201);
    cursor: pointer;
}
.item_list_menu:hover{
  background-color: #cfd8dc;
}
.item_list_menu__title{
    font-size: 14px;
}
</style>
