## 基于 vue-cli4+vant 搭建 H5 通用架子(支持微信公众号)

### 功能介绍

1. 支持 px 自动转 rem 并且忽略 node_modules 下三方包
2. 常用目录别名设置
3. 支持 scss 全局样式、变量、函数......
4. 支持 gzip 压缩
5. 支持本地 mock 模拟数据
6. 支持网站标题动态设置
7. axios 封装
8. cdn 配置加载
9. 内置微信公众号 sdk

### 安装

git clone git@gitee.com:null_639_5368/vue-vant-base.git

或者

下载 zip

### 目录结构

- config 站点配置目录（cdn、网站标题）
- mock 模拟数据
- public 静态资源文件夹
- src 源代码
  - api 接口目录
  - assets 资源目录
    - css 全局样式
    - font 字体
    - js 全局 js
    - images 图片
  - components 全局组件
  - icons
    - svg svg 图片文件夹
  - router 路由配置
  - store vuex 配置
  - utils 工具库
  - views 页面
  - App.vue
  - main.js
- .browserslistrc
- .eslintrc.js
- .gitignore
- babel.config.js
- package.json
- jest.config.js
- vue.config.js vuecli 打包配置
- package.json


