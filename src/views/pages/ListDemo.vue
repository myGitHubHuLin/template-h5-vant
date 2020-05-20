<template>
  <div>
    <van-pull-refresh v-model="refreshing"
                      @refresh="_onRefresh">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="_onLoad">
        <van-cell v-for="item in list"
                  :key="item"
                  :title="item" />
      </van-list>
    </van-pull-refresh>

  </div>

</template>

<script>
import { List, Cell, PullRefresh } from "vant";
import pageMixins from '@/utils/mixins/page'
export default {
  mixins: [pageMixins],
  props: {

  },
  data () {
    return {
      list: []
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
    async _onLoad () {
      // 异步更新数据
      console.log('页码：', this.page)
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      await new Promise((res, rej) => {
        try {
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
            for (let i = 0; i < 10; i++) {
              this.list.push(this.list.length + 1);
            }
            // 加载状态结束
            this.loading = false;

            // 页码+1
            this.page++;
            // 数据全部加载完成
            if (this.list.length >= 40) {
              this.finished = true;
            }
            res()
          }, 1000);
        } catch (error) {
          rej(error)
        }
      })
    },
    async _onRefresh () {
      // 清空列表数据
      this.resetPageData()
      // 重新加载数据
      this.refreshing = true;
      await this._onLoad();
      this.refreshing = false;
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh

  },
};
</script>

<style scoped lang="scss">
</style>
