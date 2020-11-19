## 项目命名

全部采用小写方式， 以横线分隔。

例：my-project-name

***
## 目录命名

参照项目命名规则

有复数结构时，要采用复数命名法。

例：scripts, styles, images, data-models(页面路由文件夹除外)

***
## JS文件命名

小驼峰命名法(三方SDK文件保留原名称 例:jweixin-1.6.0.js)

例：demoModel.js 

***
## CSS, SCSS文件命名

下划线命名法

例：retina_sprites.scss

***
## HTML文件命名

下换线命名法

例：error_report.html

***

## 图片命名

下换线命名法

例：img_1.png

***
## 功能组件命名

大驼峰命名法

* 注意：基础公共组件无需加特异性前缀，其他公共组件必须加特异性前缀方便定位人员 例 MCard.vue WangCard.vue

例: DemoComponent.vue

***
## 页面路由组件命名

小驼峰命名法

例: demo.vue 或 demoComponent.vue

注意：尽量采用模块细分的方式来组织页面路由组件↓

```
article  // 页面模块目录
        components  // 模块业务组件
        index.vue   // 主入口
        add.vue
        list.vue
personCenter // 页面模块目录
        components  // 模块业务组件
        index.vue // 主入口
```
***
## 路由注册规范

例
```
// 登录
import login from '@/views/login/index'


// 文章
import articleIndex from '@/views/article/index'
import articleList from '@/views/article/list'
import articleAdd from '@/views/article/add'

// 个人中心(如果是单路由组件名称就无需加Index)
import personCenter from '@/views/personCenter/index'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: "/article",
        name: "article",
        redirect: '/article/index',
        children: [
            {
                path: 'index',
                name: 'articleIndex',
                component: articleIndex
            },
            {
                path: 'list',
                name: 'articleList',
                component: articleList
            },
            {
                path: 'add',
                name: 'articleAdd',
                component: articleAdd
            }
        ]
    },
    {
        path: '/personCenter',
        name: 'personCenter',
        component: personCenter
    },
]
```

***
## vue 组件/实例顺序
```
{
  name: "", // 组件名称必须定义而且大驼峰命名的形式，后期keep-alive会需要用到
  components: {},
  directives: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},
}
```
***
## html标签中元素特性/属性顺序
```
<div
class=""
is=""
v-for="(item, index) in list"
v-if/v-else-if/v-else=""
v-show=""
v-cloak=""
v-pre
v-once
id=""
ref=""
:key=""
slot=""
v-model=""
v-on:click/submit=""
v-html=""
v-text=""
>
</div>
```