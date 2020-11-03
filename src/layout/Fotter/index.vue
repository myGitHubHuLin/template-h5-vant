<template>
  <div class="footer-wrapper">
    <div class="footer-view">
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script >
import FooterBar from "@/components/Layout/FooterBar.vue";
export default {
  props: {},
  components: {
    FooterBar,
  },
};
</script>

<style scoped lang="scss">
// .footer-view在postcss-px-to-viewport 中配置了不会转换px
.footer-view {
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>
