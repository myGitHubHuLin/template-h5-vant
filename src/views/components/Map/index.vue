<template>
  <div class="amap-page-container">
    <el-amap ref="map"
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
import { AMapManager } from 'vue-amap';

export default {
  data () {
    return {
      amapManager: null,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
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
  height: calc(100vh - 92px);
}
</style>