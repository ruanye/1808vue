<template>
  <div>
    这是首页
    <Banner :swiperSlides="slider" />
    <div>
      <ul>
        <li v-for="item in homelist"
            :key="item.id">
          <img :src="item.img"
               alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
// import * as obj from "../api";
// console.log(obj.getBanner.toString())
import { getBanner, getList } from "../api";
export default {
  name: "home",
  created() {
    // ajax 异步 越早发送越好 一般放 created
    this.getSlider();
    this.getL();
  },
  data() {
    return {
      slider: [],
      homelist: []
    };
  },
  components: {
    Banner
  },
  methods: {
    //轮播图请求
    async getSlider() {
      let { banner } = await getBanner();
      this.slider = banner;
    },
    async getL() {
      //发送ajax请求
      let { list } = await getList();
      //把ajax拿回来的数据挂到this上
      this.homelist = list;
    }
  }
};
</script>
