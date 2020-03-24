<template>
  <div class="page-index">
    <nuxt-link to="/" class="wrap-ace"
      ><img
        src="//img12.360buyimg.com/img/jfs/t1/103258/1/9333/414678/5e0ef879E069729fd/c2e20d14f533f622.png.webp"
        alt=""
    /></nuxt-link>
    <Row :gutter="10">
      <Col span="4">
        <common-emenu />
      </Col>
      <Col span="12">
        <div class="slide">
          <slider />
        </div>
      </Col>
      <Col span="4">
        <div class="slide-right">
          <slider :autoplay-speed="4000" />
        </div>
      </Col>
      <Col span="4">
        <user-life />
      </Col>
    </Row>
    <Row span="24">
      <div class="service_inner">
        123
      </div>
    </Row>
  </div>
</template>

<script>
import CommonEmenu from "@/components/index/menu.vue";
import Slider from "@/components/index/slider.vue";
import userLife from "@/components/index/life.vue";
export default {
  components: {
    CommonEmenu,
    Slider,
    userLife
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
