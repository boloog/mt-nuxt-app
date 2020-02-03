<template>
  <Layout>
    <Header><top-header /></Header>
    <Content><nuxt /></Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
import topHeader from '@/components/public/header/'
export default {
  components: {
    topHeader
  }

}
</script>
<style lang="scss">
  @import '@/assets/css/public/layout.scss';


</style>
