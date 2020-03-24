# mt-nuxt-app

> My neat Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 解决不支持 import 引入问题

- 使用 `babel-node` 在 `package.json` 里 `dev&start` 都添加 `--exec babel-node`
- 创建 `.babelrc` 文件 配置 `{ "presets": ["es2015"] }`
- 安装 `npm i babel-preset-es2015` `npm install -g babel-cli`

## 安装支持 scss

- `npm i sass-loader node-sass`

## 启动项目

- 启动 redis 服务 `redis-server`
- 启动 mongod `mongod --config /usr/local/etc/mongod.conf`
- 启动业务代码 `npm run dev`
