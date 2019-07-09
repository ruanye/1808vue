<template>
  <div class="container"
       ref="scele"
       @scroll="scmore">
   <div v-for="item in list"
         :key="item.id">
      <van-card :price="item.price"
                :desc="item.info"
                :title="item.name"
                :thumb="item.img" />
    </div>
    <div class="btn-box">
      <van-button type="primary"
                  @click="loadmore">{{hasMore?"点击加载更多":"没有数据了"}}</van-button>

    </div>
  </div>
</template>
<script>
import { getPage } from "../api";
export default {
  data() {
    return {
      list: [],
      page: 1, //默认拿第一页的数据
      hasMore: true //默认有下一页数据
    };
  },
  created() {
    this.getpagelist();
  },
  mounted() {},
  methods: {
    scmore() {
      clearTimeout(this.timer);
      //节流和防抖 节流(性能优化)
      this.timer = setTimeout(() => {
        console.log(2);
        let scele = this.$refs.scele;
        let { scrollTop, scrollHeight, clientHeight } = scele;
        //判断到底部加载更多
        if (clientHeight + scrollTop + 10 > scrollHeight) {
          this.loadmore();
        }
      }, 13);
    },
    async getpagelist() {
      //前端或获取第一页的数据
      let { list, hasMore } = await getPage(this.page);
      //把新请求回来的数据和原来的this.list的数据合并就可以保留所有数据
      // this.list = this.list.concat(list);
      //es6 写法
      this.hasMore = hasMore;
      this.list = [...this.list, ...list];
    },
    //点击加载下一页
    loadmore() {
      //如果没有更多数据了 就不在发送请求了
      if (this.hasMore == false) return;

      //页数加1
      this.page = this.page + 1;
      //发送请求拿到下一页的数据
      this.getpagelist();
    }
  }
};
</script>
<style>
.btn-box {
  text-align: center;
}
</style>
