<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides"
                  :key="slide.imgid">
      <img :src="slide.imgurl" />
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "carrousel",
  props: {
    swiperSlides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style scoped>
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  height: auto;
}
</style>
