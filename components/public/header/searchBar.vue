<template>
  <Row class="m-header-searchbar">
    <Col span="3" class="left">
      <img
        src="//img10.360buyimg.com/img/jfs/t1/105695/24/9139/98608/5e0b0faeE8933b6fa/dcf9596d4a744228.gif"
        alt=""
      />
    </Col>
    <Col span="10" class="center">
      <div class="wrapper">
        <Input search enter-button placeholder="Enter something..." v-model="search" @on-focus="handelFocus" @on-blur="handelBlur" @on-change="handelChange"/>
        <dl class="hotPlace" v-if="isHotPlace">
          <dt>热门搜索</dt>
          <dd v-for="(item, idx) in hotPlace" :key="idx">{{ item }}</dd>
        </dl>
         <dl class="searchList" v-if="isSearchList">
          <dd v-for="(item, idx) in searchList" :key="idx">{{ item }}</dd>
        </dl>
      </div>
      <p class="suggest">
        <a href="">减2000券</a>
        <a href="">年货节</a>
        <a href="">礼盒99元</a>
        <a href="">京东京造</a>
        <a href="">女装5折</a>
      </p>
      <ul class="nav">
        <li><nuxt-link to="/a">秒杀</nuxt-link> </li>
        <li><nuxt-link to="/a">优惠券</nuxt-link> </li>
        <li><nuxt-link to="/a">PLUS会员</nuxt-link> </li>
        <li><nuxt-link to="/a">品牌闪购</nuxt-link> </li>
        <li><nuxt-link to="/a">拍卖</nuxt-link> </li>
        <li><nuxt-link to="/a">京东时尚</nuxt-link> </li>
        <li><nuxt-link to="/a">京东超市</nuxt-link> </li>
        <li><nuxt-link to="/a">京东生鲜</nuxt-link> </li>
        <li><nuxt-link to="/a">京东国际</nuxt-link> </li>
        <li><nuxt-link to="/a">京东金融</nuxt-link> </li>
      </ul>
    </Col>
    <Col class="right">
      <img src="https://img30.360buyimg.com/babel/jfs/t1/88985/40/9424/32924/5e0d5f0aEd794c6d4/b67f7cae082882e3.png.webp" alt="">
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: ['串串','烧烤'],
      searchList: ['烧烤']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    handelFocus() {
      this.isFocus = true
    },
    handelBlur() {
      setTimeout(() => {
        this.isFocus = false
      },200)
    },
    handelChange() {
      console.log('搜索数据')
    }
  }
};
</script>
