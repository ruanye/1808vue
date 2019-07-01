<template>
  <div>
    这是首页
    <Banner :swiperSlides="slider" />
  </div>
</template>
<script>
import Banner from "../components/Banner";
//export { getBanner, getlist };
import { getBanner } from "../api";
export default {
  name: "home",
  created() {
    // ajax 异步 越早发送越好 一般放 created
    this.getSlider();
  },
  data() {
    return {
      slider: []
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
    }
  }
};
</script>
