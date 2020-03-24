<template>
  <Layout>
    <Header><top-header /></Header>
    <Content><nuxt /></Content>
    <Footer style="height: 100%"><comFooter /></Footer>
  </Layout>
</template>

<script>
import topHeader from "@/components/public/header/";
import comFooter from "@/components/public/footer/";
export default {
  components: {
    topHeader,
    comFooter
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
