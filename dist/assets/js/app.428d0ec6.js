(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"assets/js/"+({login:"login"}[e]||e)+"."+{"chunk-030cb576":"e03ee556","chunk-2d0ac989":"886524af","chunk-2d0e95df":"0edc7d9e","chunk-b0e06472":"e00af195","chunk-ef86f848":"444e7a74","chunk-f81a43aa":"fabd7990",login:"953270d8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-030cb576":1,"chunk-ef86f848":1,"chunk-f81a43aa":1,login:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="assets/css/"+({login:"login"}[e]||e)+"."+{"chunk-030cb576":"7d154481","chunk-2d0ac989":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-b0e06472":"31d6cfe0","chunk-ef86f848":"187c8197","chunk-f81a43aa":"714ce7a6",login:"6e3ccc82"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-vant-base/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"090f":function(e,t,n){"use strict";n.r(t),t["default"]=[{url:"/user/login",type:"post",response:{code:200,msg:"success",data:{token:"ASFJSOHFSJHAJJGJASJJKG556456ASGSADGSGDKGJKSJAKG"}}},{url:"/user/info",type:"get",response:{code:200,msg:"success",data:{id:154,name:"张三",age:22}}}]},"097e":function(e,t){function n(){(function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1;function o(){t.body?t.body.style.fontSize=12*r+"px":t.addEventListener("DOMContentLoaded",o)}function a(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(o(),a(),e.addEventListener("resize",a),e.addEventListener("pageshow",(function(e){e.persisted&&a()})),r>=2){var c=t.createElement("body"),i=t.createElement("div");i.style.border=".5px solid transparent",c.appendChild(i),n.appendChild(c),1===i.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}})(window,document)}setTimeout((function(){n()}),1)},"0f9a":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("ac1f"),n("5319"),n("96cf");var r,o=n("1da1"),a=n("ade3"),c=n("a18c"),i=n("5f87"),u=n("b775");function s(e){return Object(u["a"])({url:"/user/info",method:"get",params:e})}function f(e){return Object(u["a"])({url:"/user/login",method:"post",data:e})}var l="SET_TOKEN",d="SET_USER_INFO",p="LOGOUT";t["default"]={namespaced:!0,state:{token:Object(i["a"])()||"",user:Object(i["b"])()||{}},mutations:(r={},Object(a["a"])(r,l,(function(e,t){e.token=t,Object(i["e"])(t)})),Object(a["a"])(r,d,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.user=t,Object(i["f"])(t)})),Object(a["a"])(r,p,(function(e){e.user={},e.token=null,Object(i["c"])(),Object(i["d"])(),c["a"].replace("/login")})),r),actions:{login:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.abrupt("return",new Promise(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,o){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return a=e.sent,e.next=6,s();case 6:c=e.sent,r(l,a.token),r(d,c),n(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),o(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t(p)}},getters:{token:function(e){return e.token},user:function(e){return e.user}}}},"108b":function(e,t,n){"use strict";n.r(t),t["default"]=[{url:"/wxTest/getSdkConfig",type:"get",response:{code:200,msg:"success",data:{appId:"wx57341c32f416998d",nonceStr:"1sermue640h",signature:"3091ce52b29ae0f82c9bd87d13e3c3682c6adc2e",timestamp:"1588051275"}}}]},"176d":function(e,t,n){var r={"./user.js":"090f","./wx.js":"108b"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="176d"},"2a85":function(e,t,n){},"4b0f":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("ddb0");var r=n("96eb"),o=n.n(r),a=n("176d");a.keys().forEach((function(e){var t=a(e).default||a(e);t.forEach((function(e){o.a.mock("http://www.xxxx.com/api"+e.url,e.type,e.response)}))}))},"4ee2":function(e,t,n){},"51ff":function(e,t,n){var r={"./404.svg":"a14a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="51ff"},"56d7":function(e,t,n){"use strict";n.r(t);n("c625");var r=n("b650"),o=(n("4bc8"),n("d1e1")),a=(n("47d1"),n("9ffb")),c=(n("433b"),n("d399")),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),u=n.n(i),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},f=[],l={created:function(){},mounted:function(){}},d=l,p=(n("5c0b"),n("2877")),m=Object(p["a"])(d,s,f,!1,null,null,null),h=m.exports,v=n("a18c"),b=(n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("5880")),g=n.n(b),w=n("0e44"),O=n("b054"),x=n.n(O);u.a.use(g.a);var y=n("d307"),k={};y.keys().forEach((function(e){k[e.replace(/(\.\/|\.js)/g,"")]=y(e).default||y(e)}));var E=!1,j=Object(w["a"])({storage:window.sessionStorage}),_=new g.a.Store({state:{},mutations:{},actions:{},modules:k,plugins:E?[x()(),j]:[j]}),S=(n("4ee2"),n("097e"),n("96cf"),n("1da1")),C=n("5f87");v["a"].beforeEach(function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t,r,o){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:document.title=t.meta.title||n("ace7").title,a=Object(C["a"])(),a?"/login"===t.path?o({path:"/"}):o():t.meta.isOpen?o():o("/login?redirect=".concat(t.path));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());n("d81d");var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal?n("div",e._g({staticClass:"svg-external-icon svg-icon",style:e.styleExternalIcon},e.$listeners)):n("svg",e._g({class:e.svgClass,attrs:{"aria-hidden":"true"}},e.$listeners),[n("use",{attrs:{"xlink:href":e.iconName}})])},A=[];n("c975"),n("25f0"),n("498a");function N(e){return/^(https?:|mailto:|tel:)/.test(e)}var L={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{isExternal:function(){return N(this.iconClass)},iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"},styleExternalIcon:function(){return{mask:"url(".concat(this.iconClass,") no-repeat 50% 50%"),"-webkit-mask":"url(".concat(this.iconClass,") no-repeat 50% 50%")}}}},M=L,T=(n("6292"),Object(p["a"])(M,P,A,!1,null,"3f535f94",null)),D=T.exports;u.a.component("svg-icon",D);var I=n("51ff"),R=function(e){return e.keys().map(e)};R(I);n("b0c0");var U=n("5aeb"),V=n.n(U);u.a.component(D.name,D),u.a.use(V.a),V.a.initAMapApiLoader({key:"599dfe6bbe92b35d34d4e3d3f40aac6b",plugin:["AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType"],v:"1.4.15"}),u.a.use(r["a"]).use(o["a"]).use(a["a"]).use(c["a"]),"production"!=Object({NODE_ENV:"production",VUE_APP_API_PREFIX:"http://www.xxxx.com/api",VUE_APP_MODE_NAME:"生产模式",BASE_URL:"/vue-vant-base/"})&&(n("4b0f"),console.log("本地mock数据已导入")),console.log("当前运行模式为:",Object({NODE_ENV:"production",VUE_APP_API_PREFIX:"http://www.xxxx.com/api",VUE_APP_MODE_NAME:"生产模式",BASE_URL:"/vue-vant-base/"})),u.a.config.productionTip=!1,new u.a({router:v["a"],store:_,render:function(e){return e(h)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5aeb":function(e,t){e.exports=VueAMap},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5cc1":function(e,t,n){},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return f}));var r="TOKEN_KEY",o="USER_INFO";function a(){return localStorage.getItem(r)}function c(e){return localStorage.setItem(r,e)}function i(){return localStorage.removeItem(r)}function u(){var e=localStorage.getItem(o);return e?JSON.parse(e):{}}function s(e){return localStorage.setItem(o,JSON.stringify(e))}function f(){return localStorage.removeItem(o)}},6292:function(e,t,n){"use strict";var r=n("5cc1"),o=n.n(r);o.a},6389:function(e,t){e.exports=VueRouter},"86f7":function(e,t,n){"use strict";var r=n("2a85"),o=n.n(r);o.a},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},a14a:function(e,t,n){"use strict";n.r(t);var r=n("e017"),o=n.n(r),a=n("21a1"),c=n.n(a),i=new o.a({id:"icon-404",use:"icon-404-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-404"><defs><style>@font-face{font-family:rbicon;src:url(chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/fonts/rbicon.woff2) format("woff2");font-weight:400;font-style:normal}</style></defs><path d="M931.6 585.6v79c28.6-60.2 44.8-127.4 44.8-198.4C976.4 211 769.4 4 514.2 4S52 211 52 466.2c0 3.2.2 6.4.2 9.6l166-206h96.4L171.8 485.6h46.4v-54.8l99.2-154.6V668h-99.2v-82.4H67.6c43 161 170.6 287.4 332.4 328.6-10.4 26.2-40.6 89.4-90.8 100.6-62.2 14 168.8 3.4 333.6-104.6C769.4 873.6 873.6 784.4 930.2 668h-97.6v-82.4H666.4V476l166.2-206.2h94L786.2 485.6h46.4v-59l99.2-154v313zM366.2 608c-4.8-11.2-7.2-23.2-7.2-36V357.6c0-12.8 2.4-24.8 7.2-36 4.8-11.2 11.4-21 19.6-29.2 8.2-8.2 18-14.8 29.2-19.6 11.2-4.8 23.2-7.2 36-7.2h81.6c12.8 0 24.8 2.4 36 7.2 11 4.8 20.6 11.2 28.8 19.2l-88.6 129.4v-23c0-4.8-1.6-8.8-4.8-12-3.2-3.2-7.2-4.8-12-4.8s-8.8 1.6-12 4.8c-3.2 3.2-4.8 7.2-4.8 12v72L372.6 620c-2.4-3.8-4.6-7.8-6.4-12zm258.2-36c0 12.8-2.4 24.8-7.2 36-4.8 11.2-11.4 21-19.6 29.2-8.2 8.2-18 14.8-29.2 19.6-11.2 4.8-23.2 7.2-36 7.2h-81.6c-12.8 0-24.8-2.4-36-7.2-11.2-4.8-21-11.4-29.2-19.6-3.6-3.6-7-7.8-10-12l99.2-144.6v50.6c0 4.8 1.6 8.8 4.8 12 3.2 3.2 7.2 4.8 12 4.8s8.8-1.6 12-4.8c3.2-3.2 4.8-7.2 4.8-12v-99.6L601 296.4c6.6 7.4 12 15.8 16 25.2 4.8 11.2 7.2 23.2 7.2 36V572z" /></symbol>'});c.a.add(i);t["default"]=i},a18c:function(e,t,n){"use strict";var r,o=n("8bbf"),a=n.n(o),c=n("6389"),i=n.n(c),u=(n("d3b7"),n("2909")),s=function(){return n.e("chunk-b0e06472").then(n.bind(null,"f6f7"))},f=function(){return n.e("chunk-030cb576").then(n.bind(null,"00ce"))},l=function(){return n.e("chunk-ef86f848").then(n.bind(null,"f5ad"))},d=[{path:"WxTest",name:"WxTest",meta:{title:"微信jssdk测试",isOpen:!0},component:s},{path:"ListDemo",name:"ListDemo",meta:{title:"列表 demo",isOpen:!0},component:f},{path:"MapDemo",name:"MapDemo",meta:{title:"地图demo",isOpen:!0},component:l}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-view-wrapper"},[n("router-view"),n("footer-bar")],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{attrs:{route:"","safe-area-inset-bottom":!0}},[n("van-tabbar-item",{attrs:{icon:"wap-home-o",replace:"",to:"/"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",to:"/PersonCenter"},scopedSlots:e._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.icon.active:e.icon.inactive}})}}])},[n("span",[e._v("个人中心")])])],1)},v=[],b=(n("b0c0"),n("ade3")),g=(n("4627"),n("2ed4")),w=(n("1318"),n("ac28")),O={name:"FooterTabbar",data:function(){return{icon:{active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"}}},components:(r={},Object(b["a"])(r,w["a"].name,w["a"]),Object(b["a"])(r,g["a"].name,g["a"]),r)},x=O,y=n("2877"),k=Object(y["a"])(x,h,v,!1,null,null,null),E=k.exports,j={props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{},components:{FooterBar:E}},_=j,S=(n("86f7"),Object(y["a"])(_,p,m,!1,null,"16ff6add",null)),C=S.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$route.meta.hideHeader?e._e():n("header-bar",{attrs:{title:e.$route.meta.title}}),n("router-view")],1)},A=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-header-bar"},[n("van-nav-bar",{attrs:{title:e.title,"left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}})],1)},L=[],M=(n("da02"),n("6b41")),T={props:{title:{type:String,default:"标题"}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$toast("按钮")}},components:Object(b["a"])({},M["a"].name,M["a"])},D=T,I=Object(y["a"])(D,N,L,!1,null,"95357c44",null),R=I.exports,U={props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{},components:{HeaderBar:R}},V=U,J=Object(y["a"])(V,P,A,!1,null,"8f638e52",null),$=J.exports,F=function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},B=function(){return n.e("chunk-f81a43aa").then(n.bind(null,"aec6"))},z=function(){return n.e("chunk-2d0ac989").then(n.bind(null,"19e0"))},G=[{path:"/",name:"main",redirect:"/home",component:C,children:[{path:"home",name:"home",meta:{title:"主页"},component:B},{path:"PersonCenter",name:"PersonCenter",meta:{title:"个人中心"},component:z}]},{path:"/login",name:"login",meta:{title:"登录",isOpen:!0},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"*",name:"page404",meta:{title:"页面未找到"},component:F},{path:"/",name:"page",redirect:"/home",component:$,children:Object(u["a"])(d)}],H=G;a.a.use(i.a);var K=new i.a({routes:H});t["a"]=K},ace7:function(e,t){e.exports={title:"maybe"}},b775:function(e,t,n){"use strict";n("d3b7"),n("433b");var r=n("d399"),o=n("bc3a"),a=n.n(o),c=n("5f87"),i=a.a.create({baseURL:"http://www.xxxx.com/api",timeout:5e3});console.log("http://www.xxxx.com/api"),i.interceptors.request.use((function(e){var t=Object(c["a"])();return t&&(e.headers.Authorization=t),e}),(function(e){return console.log(e,"err"),Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(u(t.code),Promise.reject(new Error(t.message||"Error"))):Promise.resolve(t.data)}),(function(e){return console.log("err "+e),r["a"].fail({message:e.message,duration:1500}),Promise.reject(e)}));var u=function(e){switch(e){case 401:break;default:break}};t["a"]=i},d307:function(e,t,n){var r={"./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="d307"}});