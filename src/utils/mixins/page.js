export default {
  data () {
    return {
      loading: false,    // 是否加载中
      refreshing: false, // 是否刷新中
      finished: false, // 是否加载完成
      page: 1,  // 页码
      size: 10, // 条数
      total: 0, // 总数
      list: []  // 数据源 
    }
  },
  methods: {
    /**
     * 重置分页
     * @param {number} size 自定义页码 默认 10
     */
    resetPageData (size = 10) {
      this.refreshing = false;
      this.loading = false;
      this.finished = false;
      this.page = 1;
      this.total = 0;
      this.size = size;
      this.list.length = 0;
    },
    /**
     * 上拉加载
     */
    async _onLoad () {
      // 请求列表数据
    },
    /**
     * 下拉刷新
     */
    async _onRefresh () {
      // 清空列表数据
      this.resetPageData()
      // 重新加载数据
      this.refreshing = true;
      await this._getList();
      this.refreshing = false;
    }
  }
}