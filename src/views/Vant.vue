<template>
  <div>
    Vant.vue
    <van-button @touchstart="btnclik"
                type="default">默认按钮</van-button>
    <van-icon name="like-o" />
    <van-card num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" />

  </div>
</template>
<script>
export default {
  methods: {
    btnclik() {
      alert(1);
    }
  }
};
</script>

