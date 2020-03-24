<template>
  <div class="user-item">
    <template v-if="user">
      欢迎您，{{ user }} [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="/login">您好，请登录</nuxt-link>
      <nuxt-link to="/register" style="color:#999">免费注册</nuxt-link>
    </template>
    <nav-bar />
  </div>
</template>

<script>
import navBar from "./nav.vue";

export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get("/users/getUser");
    if (status === 200) {
      this.user = user;
    }
  },
  components: {
    navBar
  }
};
</script>
<style lang="scss">
.user-item {
  float: right;
}
</style>
