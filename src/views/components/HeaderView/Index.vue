<template>
  <div>
    <header-bar :title="$route.meta.title"
                v-if="!$route.meta.hideHeader">
    </header-bar>
    <router-view></router-view>
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

<style scoped lang="scss"></style>
