<template lang="pug">
v-container.px-6
    .text-right
        v-icon(@click="goback()") mdi-close
    login-card
</template>
<script>
import LoginCard from '../components/nav/LoginCard.vue'
export default {
  name: 'LoginMobile',
  components: {
    LoginCard
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
