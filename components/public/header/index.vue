<template>
  <div class="m-header">
    <Row>
      <Col>
        <top-bar />
      </Col>
      <Col>
        <search-bar />
      </Col>
    </Row>

  </div>

</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'

export default {
  components: {
    topBar,
    searchBar
  }

}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
</style>


