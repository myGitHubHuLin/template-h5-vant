<template>
  <div class="page">查看控制台可看信息</div>
</template>

<script >
import WxJsSdk from "@/utils/WxJsSdk";
export default {
  data() {
    return { text: "", wxJsSdk: null };
  },
  mounted() {
    this.wxJsSdk = new WxJsSdk();
    console.log(this.wxJsSdk);
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 10px;
}
</style>
