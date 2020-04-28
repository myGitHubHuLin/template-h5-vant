<template>
  <div class="layout-header-bar">
    <van-nav-bar :title="title"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data () {
    return {

    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    onClickLeft () {
      // this.$toast('返回');
      this.$router.go(-1)
    },
    onClickRight () {
      this.$toast('按钮');
    },
  },
  components: {
    [NavBar.name]: NavBar
  },
};
</script>

<style scoped lang="scss">
</style>
