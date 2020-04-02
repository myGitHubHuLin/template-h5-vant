<template>
  <div>jssdk测试</div>
</template>

<script>
import wx from "@/utils/jssdkUtils";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    wx.ready(function() {
      wx.checkJsApi({
        jsApiList: ["checkJsApi", "openLocation"],
        success: function(res) {
          console.log(res);
        }
      });
    });
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss"></style>
