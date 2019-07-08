<template>
  <div>
    组件refs的基本用法
    <Mybutton ref="btn"></Mybutton>
  </div>
</template>
<script>
import Mybutton from "../components/Mybutton";
export default {
  components: {
    Mybutton
  },
  mounted() {
    let btn = this.$refs.btn;
    btn.msg = "按钮1"; // 改值很少使用
    console.log(btn);
    this.$refs.btn.ck();
  }
};
</script>

