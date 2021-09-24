<template lang="pug">
 v-card
    v-container
        v-card-title
            .login-card__title.text-center.text-h5(style="width:100%;") INICIAR SESION
        v-card-text
            v-form(@submit.prevent='submit')
                v-container.pa-0
                    v-row(no-gutters)
                        v-col(cols="12")
                            v-text-field(label="Usuario", type="text", required, v-model="form.username")
                        v-col(cols="12")
                            v-text-field(label="Contrasena", type="password", required, v-model="form.password")
                        v-col(cols="12").text-center
                            p.error-message-login(v-if='showError') El usuario o la contrasena son incorrectos
                            router-link(to="/page") Olvidaste tu contrasena?
                        v-col(cols="12").my-1
                            v-btn(color="primary", dark, style="width:100%;" type="submit") Iniciar Sesion
                        v-col(cols="12").text-center Quieres una cuenta en PIC?
                        v-btn(color="secondary", dark, style="width:100%;") Hablar con Asesor
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginCard',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      showError: false
    }
  },
  computed: {
    ...mapGetters(['getIsMobile'])
  },
  methods: {
    ...mapActions(['logIn']),
    async submit () {
      const User = {}
      User.usuario = this.form.username
      User.contraseña = this.form.password
      try {
        await this.logIn(User)
        if (!this.getIsMobile) {
          this.$store.commit('SHOW_LOGIN_CART', false)
        }
        // this.$router.push('/dashboard-junior')
        this.showError = false
        this.form.username = ''
        this.form.password = ''
      } catch (error) {
        this.showError = true
      }
      if (this.getIsMobile) {
        this.$router.push('/congratulation')
      }
    }
  }
}
</script>
<style scoped>
.error-message-login{
color: red;
}
</style>
