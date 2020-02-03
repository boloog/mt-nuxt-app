<template>
  <div class="m-menu">
    <ul  class="nav" @mouseleave="handleMouseLeave">
      <li v-for="(item,idx) in menu" :key="idx" @mouseenter="handleMouseEnter" :class="[ kind === item.type ? 'active' : '']">
        <i :class="item.type"></i>
        <nuxt-link to="/">{{ item.name }}</nuxt-link>
      </li>
    </ul>
    <div class="detail" v-if="kind" @mouseenter="detailOver" @mouseleave="detailOut">
      <template v-for="(item, idx) in curdetail.child">
        <h4 :key="idx">{{ item.name }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }} </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'diannao',
          name: '电脑/办工',
          child: [
            {
              name: '电脑主机',
              child: ['台式机', '一体机', '组装机']
            }
          ]
        },
        {
          type: 'jiadian',
          name: '家用电器',
          child: [
            {
              name: '家电馆',
              child: ['电视', '空调', '洗衣机']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    handleMouseLeave () {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 180)
    },
    handleMouseEnter (e) {
      this.kind = e.target.querySelector('i').className
    },
    detailOver() {
      clearTimeout(this._timer)
    },
    detailOut() {
      this.kind = ''
    }
  }
}
</script>
