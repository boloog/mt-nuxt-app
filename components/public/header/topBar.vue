<template>
  <Row type="flex" justify="space-between">
    <Col span="4">
      <city />
    </Col>
    <Col span="20">
      <user />
    </Col>
  </Row>
</template>

<script>
import City from './city.vue'
import User from './user.vue'

export default {
  components: {
    City,
    User
  }

}
</script>
