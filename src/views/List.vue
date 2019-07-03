<template>
  <div class="container">
    <div v-for="item in list"
         :key="item.id">
      <van-card :price="item.price"
                :desc="item.info"
                :title="item.name"
                :thumb="item.img" />
    </div>
    <div class="btn-box">
      <van-button type="primary">点击加载下一页</van-button>
    </div>
  </div>
</template>
<script>
import { getPage } from "../api";
export default {
  data() {
    return {
      list: [],
      page: 1 //默认拿第一页的数据
    };
  },
  created() {
    this.getpagelist();
  },
  methods: {
    async getpagelist() {
      //前端或获取第一页的数据
      let { list } = await getPage(this.page);
      this.list = list;
    }
  }
};
</script>
<style>
.btn-box {
  text-align: center;
}
</style>
