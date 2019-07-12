<template>
  <div class="container">
    <HNav>
      列表
      <!-- <template #ry>
        <h2>阮野的100块</h2>
      </template> -->
    </HNav>
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              :error.sync="error"
              error-text="请求失败，点击重新加载"
              :immediate-check="false"
              @load="onLoad">
      <div v-for="item in list"
           :key="item.id">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <van-card :price="item.price"
                    :desc="item.info"
                    :title="item.name"
                    :thumb="item.img" />
        </router-link>
      </div>
    </van-list>
  </div>
</template>
<script>
//@ 表示src的绝对路径
import HNav from "@/components/hNave";
import { getPage } from "../api";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      hasMore: true,
      error: false
    };
  },
  components: {
    HNav
  },
  created() {
    this.getL();
  },
  methods: {
    async getL() {
      try {
        let { list, hasMore } = await getPage(this.page);
        this.list = [...this.list, ...list];
        this.hasMore = hasMore;
        if (this.hasMore == false) {
          //数据加载完成
          this.finished = true;
          // 加载状态结束
          this.loading = false;
        }
      } catch (e) {
        this.error = true;
      }

      //console.log(this.hasMore);
    },
    loadmore() {
      this.page = this.page + 1;
      this.getL();
    },
    onLoad() {
      this.loadmore();
    }
  }
};
</script>
