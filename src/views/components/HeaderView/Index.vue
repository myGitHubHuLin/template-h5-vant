<template>
  <div>
    <header-bar :title="$route.meta.title"
                v-if="!$route.meta.hideHeader">
    </header-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Layout/HeaderBar'
export default {
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {

  },
  mounted () { },
  watch: {},
  methods: {},
  components: {
    HeaderBar
  }
}
</script>

<style scoped lang="scss">
.content {
  min-height: calc(100vh - 92px);
}
</style>
