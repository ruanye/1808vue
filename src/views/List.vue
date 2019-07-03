<template>
  <div class="container">
    <div v-for="item in list"
         :key="item.id">
      <van-card :price="item.price"
                :desc="item.info"
                :title="item.name"
                :thumb="item.img" />
    </div>
  </div>
</template>
<script>
import { getList } from "../api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getPage();
  },
  methods: {
    async getPage() {
      let { list } = await getList();
      this.list = list;
    }
  }
};
</script>
