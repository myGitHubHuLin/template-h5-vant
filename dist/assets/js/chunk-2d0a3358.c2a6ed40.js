(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3358"],{"00ce":function(e,t,n){"use strict";n.r(t);var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header-bar",{attrs:{title:e.$route.meta.title},scopedSlots:e._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])}),n("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:e.searchSubmit},model:{value:e.search.text,callback:function(t){e.$set(e.search,"text",t)},expression:"search.text"}}),n("van-pull-refresh",{on:{refresh:e._onRefresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e._onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(e){return n("van-cell",{key:e.id,attrs:{title:e.title}})})),1)],1)],1)},i=[],s=(n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),c=n("ade3"),o=n("ed08"),u={data:function(){return{loading:!1,refreshing:!1,finished:!1,page:0,size:10,total:0,list:[],search:{},tempSearch:{}}},methods:{create:function(){this.tempSearch=Object(o["a"])(this.search)},_resetSearch:function(){this.search=Object(o["a"])(this.tempSearch)},_initPageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this.refreshing=!1,this.loading=!1,this.finished=!1,this.page=0,this.total=0,this.size=e,this.list=[]},_searchData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e._initPageData(),t.next=3,e._getListFactory();case 3:case"end":return t.stop()}}),t)})))()},_getListFactory:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.finished){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.page++,t.next=6,e._getList();case 6:e.loading=!1,e.list.length==e.total&&(e.finished=!0);case 8:case"end":return t.stop()}}),t)})))()},_onLoad:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("上拉加载"),e._getListFactory();case 2:case"end":return t.stop()}}),t)})))()},_onRefresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("下拉刷新"),e._initPageData(),e._resetSearch(),e.refreshing=!0,t.next=6,e._getListFactory();case 6:e.refreshing=!1;case 7:case"end":return t.stop()}}),t)})))()},_getList:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}},h=n("2bdd"),l=n("7744"),f=n("58e6"),d=n("d961"),g={mixins:[u],data:function(){return{list:[],search:{text:""}}},components:(r={},Object(c["a"])(r,h["a"].name,h["a"]),Object(c["a"])(r,l["a"].name,l["a"]),Object(c["a"])(r,f["a"].name,f["a"]),Object(c["a"])(r,d["a"].name,d["a"]),r),mounted:function(){console.log(this.$route.query)},methods:{searchSubmit:function(){this._searchData()},getData:function(e){return new Promise((function(t,n){var r=e;r||(r={page:1,size:10,search:{}}),console.log(r),setTimeout((function(){for(var e=[],n=(r.page-1)*r.size;n<r.page*r.size;n++)e.push({id:n,title:"【新增"+n+"】 标题",content:"搜索对象为"+JSON.stringify(r.search)});t({code:200,data:{page:r.page,size:r.size,list:e,total:50}})}),500)}))},_getList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({page:e.page,size:e.size,search:e.search});case 2:n=t.sent,e.total=n.data.total,n.data.list.map((function(t){e.list.push(t)}));case 5:case"end":return t.stop()}}),t)})))()}}},p=g,m=n("2877"),v=Object(m["a"])(p,a,i,!1,null,"f3d1d584",null);t["default"]=v.exports}}]);