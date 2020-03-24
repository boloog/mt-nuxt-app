<template>
  <div class="nav-wrap">
    <ul class="nav">
      <li>
        <nuxt-link to="/my">我的订单</nuxt-link>
      </li>

      <li class="list db">
        <nuxt-link to="/my"
          >我的京东 <Icon custom="ivu-icon ivu-icon-ios-arrow-down" />
        </nuxt-link>
        <dl>
          <dd><nuxt-link to="/my">待处理消息</nuxt-link></dd>
          <dd><nuxt-link to="/my">消息</nuxt-link></dd>
          <dd><nuxt-link to="/my">返修退换货</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/my">京东会员</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/my">企业采购</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/my">客服服务</nuxt-link>
      </li>
      <li class="list site">
        <nuxt-link to="/my">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="">
            <dd>特色</dd>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
          </dl>
          <dl class="">
            <dd>行业</dd>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
          </dl>
          <dl class="">
            <dd>生活</dd>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
          </dl>
          <dl class="">
            <dd>更多</dd>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
            <dt>111</dt>
          </dl>
        </div>
      </li>
      <li>
        <nuxt-link to="/my">手机京东</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
