<template>
  <div class="home">
    <p style="text-align: center;">v-vant-base</p>
    <p style="margin:10px;text-align: center;">vue移动端H5快速开发架构</p>
    <van-row type="flex"
             justify="center">
      <van-image round
                 width="2rem"
                 height="2rem"
                 src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-row>
    <van-row type="flex"
             justify="center">
      <p style="margin:10px">欢迎您,{{ $store.state.user.user.name }}</p>
    </van-row>
    <van-row type="flex"
             justify="center">
      <van-button type="info"
                  @click="handleLogOut"
                  style="margin:10px">退出登录</van-button>
    </van-row>
    <van-row type="flex"
             justify="center">
      svg:
      <svg-icon iconClass="404"></svg-icon>
    </van-row>
    <div class="theme">scss全局变量颜色</div>
    <!-- <router-link to="/other">跳转其他页面</router-link> -->
    <van-count-down :time="time" />
    <div>
      <router-link :to="{name:'WxTest'}">测试jssdk</router-link>
    </div>
    <div>
      <router-link :to="{name:'ListDemo'}">列表 demo</router-link>
    </div>
    <div>
      <router-link :to="{name:'MapDemo'}">高德地图 demo</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Button, Image } from "vant";
import { CountDown, Image } from "vant";
export default {
  name: "home",
  components: {
    // [Button.name]: Button,
    [Image.name]: Image,
    [CountDown.name]: CountDown
  },
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
      value: 50,
    };
  },
  methods: {
    handleLogOut () {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  line-height: 80px;
  text-align: center;
  padding: 5px 10px;
}
.logo {
  width: 200px;
  height: 200px;
}
.theme {
  text-align: center;
  color: $theme;
  margin: 10px 0px;
}
</style>
