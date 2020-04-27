## 基于 vue-cli4+vant 搭建 H5 通用架子(支持微信公众号)

### 注意

目前架构还在测试、开发阶段。

### 功能介绍

1. 支持 px 自动转 rem 并且忽略 node_modules 下三方包
2. 常用目录别名设置
3. 支持 scss 全局样式、变量、函数......
4. 支持 gzip 压缩
5. 支持本地 mock 模拟数据
6. 支持网站标题动态设置
7. axios 封装
8. cdn 配置加载
9. 支持多环境模式
10. 内置微信公众号 sdk
11. 支持vant组件库的按需加载
12. 支持svg雪碧图

### 安装

git clone git@gitee.com:null_639_5368/vue-vant-base.git

或者

下载 zip

### 运行

yarn 或者 npm install

yarn run dev:mock  模拟数据模式

yarn run dev 默认开发模式

yarn run build 生产模式

### 目录结构

```
|-- vue-vant-base
    |-- .browserslistrc
    |-- .env.development
    |-- .env.mock
    |-- .env.production
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- babel.config.js
    |-- jest.config.js
    |-- LICENSE
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- yarn.lock
    |-- config
    |   |-- cdn.js
    |   |-- index.js
    |-- mock
    |   |-- index.js
    |   |-- modules
    |       |-- user.js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- api
    |   |   |-- user.js
    |   |-- assets
    |   |   |-- logo.png
    |   |   |-- css
    |   |   |   |-- common.scss
    |   |   |   |-- reset.css
    |   |   |-- font
    |   |   |-- js
    |   |       |-- rem.js
    |   |-- components
    |   |   |-- SvgIcon.vue
    |   |   |-- Layout
    |   |       |-- FooterBar.vue
    |   |-- icons
    |   |   |-- index.js
    |   |   |-- svg
    |   |       |-- 404.svg
    |   |-- router
    |   |   |-- index.js
    |   |   |-- routes.js
    |   |-- store
    |   |   |-- index.js
    |   |   |-- modules
    |   |       |-- user.js
    |   |-- utils
    |   |   |-- auth.js
    |   |   |-- components.js
    |   |   |-- index.js
    |   |   |-- jssdk.js
    |   |   |-- jssdkUtils.js
    |   |   |-- permission.js
    |   |   |-- request.js
    |   |   |-- validate.js
    |   |-- views
    |       |-- 404.vue
    |       |-- Login.vue
    |       |-- main
    |           |-- Home.vue
    |           |-- Main.vue
    |           |-- Other.vue
    |           |-- PersonCenter.vue
    |-- tests
        |-- unit
            |-- example.spec.js
```