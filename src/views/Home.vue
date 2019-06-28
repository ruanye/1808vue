<template>
  <div>
    这是首页
    <Banner :sliders="slider" />
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
    getBanner().then(data => {
      console.log(data);
    });
  },
  data() {
    return {
      slider: [1, 2, 3, 4]
    };
  },
  components: {
    Banner
  }
};
</script>
