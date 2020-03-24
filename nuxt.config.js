const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS https://dev.iviewui.com/articles/1024499044308881408
   */
  css: ["iview/dist/styles/iview.css", "@/assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/iview"],

  /*
   ** Nuxt.js modules  添加配置 axios 全局配置 + 代理 npm i @nuxtjs/axios @nuxtjs/proxy -D
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  /*
   ** Build configuration https://zh.nuxtjs.org/api/configuration-build#extend
   */
  build: {
    vendor: ["axios"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // 当前版本没有写
      // if( ctx.isDev && ctx.isClient){
      //   config.module.rules.push({
      //     enfore:'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
};
