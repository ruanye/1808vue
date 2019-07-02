<template>
  <div>
    <div class="container">
      <Banner :swiperSlides="slider" />
      <ul class="homelist">
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
      //promise异常处理
      try {
        let { banner } = await getBanner();
        this.slider = banner;
      } catch (err) {
        console.log(err);
      }
    },
    async getL() {
      //发送ajax请求
      try {
        let { list } = await getList();
        //把ajax拿回来的数据挂到this上
        this.homelist = list;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
.homelist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.homelist li {
  width: 50%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homelist li img {
  width: 90%;
  border-radius: 5px;
}
</style>
