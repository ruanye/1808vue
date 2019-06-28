<template>
  <div>
    这是首页
    <Banner :sliders="slider" />
  </div>
</template>
<script>
import Banner from "../components/Banner";
export default {
  name: "home",
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
