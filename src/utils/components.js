import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon'

Vue.component(SvgIcon.name, SvgIcon)


import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '599dfe6bbe92b35d34d4e3d3f40aac6b',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.15'
});