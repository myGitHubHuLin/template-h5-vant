## 基于 vue-cli4+vant 搭建 H5 通用架子(支持微信公众号)

* 已经上传vue3.0+ts分支
* 如果有优化建议和bug请提issue

### 功能介绍

* 支持 px 自动转 vw(rem暂时废弃) 并且忽略 node_modules 下三方包
* 常用目录别名设置
* 支持 scss 全局样式、变量、函数......
* 支持 gzip 压缩
* 支持本地 mock 模拟数据
* 支持网站标题动态设置
* axios 封装
* cdn 配置加载
* 支持多环境模式
* 内置微信公众号 sdk
* 支持 vant 组件库的按需加载
* 支持 svg 雪碧图
* 本项目已经实现vant-ui自带组件库的自适应, 正常开发直接写750px的设计稿像素

### 安装

```
git clone git@gitee.com:null_639_5368/vue-vant-base.git
```

或者

下载 zip

### 演示

http://null_639_5368.gitee.io/vue-vant-base

### 运行

```
npm install 或者 yarn

npm run dev:mock 模拟数据模式

npm run dev 默认开发模式

npm run build 生产模式
```

### 注意事项


```
// .env.development

// http统一api请求前缀（开发模式下做跨域处理,一般清楚下不用做特殊处理）
VUE_APP_API_PREFIX='/api'

```


```
// .env.production

// 这里修改为网站发布的目录如'./xxx',如果在根目录修改为'/' （如果这里配置不当会找不到路径导致白屏）
VUE_APP_PUBLIC_PATH='/vue-vant-base'

// http统一api请求前缀（生产模式下填后端api地址）
VUE_APP_API_PREFIX='http://wwww.xxx.com/api'
```

