<template>
  <div class="user-item">
    <nuxt-link to="/login">你好，请登录</nuxt-link>
    <nav-bar />
  </div>
</template>

<script>
import navBar from './nav.vue'

export default {
  components: {
    navBar
  }
}
</script>
<style lang="scss">
  .user-item {
    float: right;
  }
</style>
