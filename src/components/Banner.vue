<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides"
                  :key="index">I'm Slide {{ slide }}</swiper-slide>
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
      default: () => [5, 6, 7]
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