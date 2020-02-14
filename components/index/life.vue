<template>
  <div class="m-life">
    <Row>
      <Col span="6"><div class="user_inner"></div></Col>
      <Col span="18">
        <div class="user_show">
          <a href="" class="user_tip">Hi~欢迎逛京东！</a>
          <p class="user-button">
            <nuxt-link to="/login">登录</nuxt-link> |
            <nuxt-link to="/register">注册</nuxt-link>
          </p>
        </div>
      </Col>
    </Row>
    <div class="user_profit botton_line">
      <Row type="flex">
        <Col span="12"
          ><Button type="primary" size="small" shape="circle"
            >新人福利</Button
          ></Col
        >
        <Col span="12"
          ><Button type="primary" size="small" shape="circle">PLUS会员</Button>
        </Col>
      </Row>
    </div>
    <div class="hot-news botton_line">
      <div class="news_hd">
        <h5 class="news_tit">京东快报</h5>
        <a href="">更多<Icon type="ios-arrow-forward"/></a>
      </div>
      <ul class="news_list" v-for="item in newsList" :key="item.url">
        <li class="news_item">
          <nuxt-link :to="item.url"
            ><span class="news_tag">{{ item.tag }}</span
            >{{ item.content }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="service_entry">
      <Tabs size="small">
        <TabPane label="话费">话费</TabPane>
        <TabPane label="机票">机票</TabPane>
        <TabPane label="酒店">酒店</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "life",
  data() {
    return {
      newsList: [
        {
          tag: "最新",
          content: "N95口罩今年你备了么？没有买到的N95口罩的这里看看",
          url: "1"
        },
        {
          tag: "最新",
          content: "一家独霸中国口罩市场，美国3M口罩为何能总能被畅销？",
          url: "2"
        },
        {
          tag: "最新",
          content: "小米10配置出炉！5G+6400像素+超级快充",
          url: "3"
        },
        {
          tag: "热门",
          content: "2020年先别着急换机，这四款旗舰机型或许值得一看",
          url: "4"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
