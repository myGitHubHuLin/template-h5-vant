<template>
  <div class="home">
    <block-loading :loading="blockLoading">
      <h2 class="title">🔥vue-vant-base🔥</h2>
      <p style="text-align: center">vue+vant 移动端快速开发架构(Vue2.0)</p>
      <div>
        <img src="@/assets/logo.png" width="150" height="150" alt />
      </div>
      <m-panel title="块级加载组件">
        <van-row type="flex" justify="center">
          <van-button @click="blockloadingTest">点击测试</van-button>
        </van-row>
      </m-panel>
      <m-panel title="图标">
        <van-row type="flex" justify="center" :gutter="2">
          <van-col>
            <van-icon size="30" name="chat-o" />
          </van-col>
          <van-col>
            <van-icon
              size="30"
              name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            />
          </van-col>
        </van-row>
      </m-panel>
      <m-panel title="拖拽">
        <draggable
          tag="van-grid"
          :list="myArray"
          @end="onEndCallback"
          :disabled="false"
          :component-data="{
            props: { 'column-num': 3 },
          }"
        >
          <van-grid-item
            v-for="item in myArray"
            :key="item.id"
            icon="photo-o"
            :text="item.name"
          ></van-grid-item>
        </draggable>
      </m-panel>
      <m-panel title="主题颜色">
        <van-row type="flex" justify="center">
          <van-button style="margin: 10px">默认样式</van-button>
        </van-row>
      </m-panel>
      <m-panel title="svg">
        <van-row type="flex" justify="center" style="font-size: 30px">
          svg:
          <svg-icon iconClass="404"></svg-icon>
        </van-row>
      </m-panel>
      <m-panel title="scss全局变量颜色">
        <div class="theme">scss全局变量颜色</div>
      </m-panel>
      <m-panel title="图片上传">
        <van-row type="flex" justify="center" align="center">
          <van-uploader v-model="fileList" multiple></van-uploader>
          <van-button @click="uploadImage">上传</van-button>
        </van-row>
      </m-panel>
      <m-panel title="其他测试">
        <div style="text-align: center; line-height: 1.5em">
          <div>
            <!-- <router-link :to="{ name: 'WxTest' }">测试jssdk</router-link> -->
          </div>
          <div>
            <router-link
              :to="{ path: '/article/list', query: { plan: 'private' } }"
              >列表 demo</router-link
            >
          </div>
          <div>
            <router-link :to="{ name: 'map-demo' }">高德地图 demo</router-link>
          </div>
          <div>
            <router-link :to="{ name: 'test-jssdk' }">jssdk demo</router-link>
          </div>
        </div>
      </m-panel>
    </block-loading>
  </div>
</template>

<script >
// @ is an alias to /src
import VueDraggable from "vuedraggable";
import { formatArrToFormData } from "@/utils";
import $store from "@/store/index";
import $router from "@/router/index";
import $api from "@/api/index";

export default {
  name: "home",
  components: {
    draggable: VueDraggable,
  },
  data() {
    return {
      fileList: [],
      value: 50,
      time: 30 * 60 * 60 * 1000,
      myArray: [
        { name: "1号彩笔", id: 1 },
        { name: "2号彩笔", id: 2 },
        { name: "3号彩笔", id: 3 },
        { name: "4号彩笔", id: 4 },
        { name: "5号彩笔", id: 5 },
        { name: "6号彩笔", id: 6 },
      ],
      blockLoading: false,
    };
  },
  methods: {
    onEndCallback(evt) {
      console.log(evt);
      console.log(this.myArray);
    },
    handleLogOut() {
      $store.dispatch("user/logout");
      $router.replace("/login");
    },
    async uploadImage() {
      const formData = new FormData();
      formData.append("id", "8888");
      const fileArr = this.fileList.map((item) => item.file);
      // 此方法会改变原数组,console.log(formData)是看不到效果的必须在请求体里面才能看到
      formatArrToFormData(formData, "images", fileArr);
      const result = await $api.test.uploadImage(formData);
      console.log(result);
    },
    blockloadingTest() {
      this.blockLoading = true;
      setTimeout(() => {
        this.blockLoading = false;
      }, 3000);
    },
  },
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
  color: $common-color;
  margin: 10px 0px;
}
.title {
  font-size: 50px;
  text-align: center;
}
</style>
