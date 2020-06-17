<template>
  <div class="amap-page-container">
    <el-amap :ref="mId"
             vid="amapDemo"
             :amap-manager="amapManager"
             :center="center"
             :zoom="zoom"
             :plugin="plugin"
             :events="events"
             class="amap-demo">
    </el-amap>

    <!-- <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div> -->
  </div>
</template>



  <script>
// NPM 方式
import VueAMap, { AMapManager } from 'vue-amap';
VueAMap.initAMapApiLoader({
  key: '599dfe6bbe92b35d34d4e3d3f40aac6b',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.15'
});
export default {
  props: {
    mId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      amapManager: null,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs[this.mId].$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          alert('map clicked', e);
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init (o) {
            console.log(o);
          }
        }
      }]
    };
  },
  mounted () {
    this.amapManager = new AMapManager();
  },
  methods: {
    getMap () {
      // amap vue component
      console.log(this.amapManager._componentMap);
      // gaode map instance
      console.log(this.amapManager._map);
    }
  }
};
</script>
<style lang="scss" scoped>
.amap-demo {
  height: 100%;
}
</style>