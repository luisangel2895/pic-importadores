<template lang="pug">
    v-container
        v-card.pa-4.mt-10
            .d.text-h4.text-center Felicitaciones
            .d.my-3(style="font-weight:bold;").titles--text Ahora ya puedes ver nuestros precios
            .d.my-3.text-body-2 Por favor solo ve a nuestras campanas y ya podras ver los precios
            .d.text-center
                v-btn(dark, color="secondary" @click="goHome") Ver las campanas
</template>
<script>
export default {
  name: 'CongratulationMobile',
  methods: {
    goHome () {
      this.$router.push('/')
      window.scroll(0, 0)
      window.scroll(0, 450)
    }
  }
}
</script>
