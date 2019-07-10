<template>
  <div>
    这是奥特曼主体
    <Naodai></Naodai>
    <!-- 组装奥特曼的脑袋 -->
    <br />
    <div>奥特慢刷<span class="red">{{color}}漆</span></div>
    <!-- 把面包拿出来一个一个吃 -->
    <div v-for="(item,index) in mianbao"
         :key="index">
      <img :src="item"
           alt="">
    </div>
  </div>
</template>
<script>
//1 买个奥特曼的脑袋
import Naodai from "../components/Naodai.vue";
import colorObj from "./demo.json"; //商店里面买回的的油漆颜色（后台给的数据）
//如何去店里买面包的方法
import { mockbanner } from "../api";
export default {
  created() {
    // 初始化数据 ajax ajax异步的 越早发送越好
    mockbanner().then(data => {
      console.log(data, "买回来的面包");
      this.mianbao = data.list; //把面包放盘子里面
    }); //方法调用是给面包店付钱 面包店给你面包 .then(data) data就是面包
    //给奥特曼刷商店里面漆的颜色
    this.color = colorObj.color;
    //this.color = "红色";
  },
  data() {
    return {
      color: "",
      mianbao: [] //放面包的盘子
    };
  },
  components: {
    Naodai //注册脑袋 不注册的话,可能不是奥特曼的脑袋可能是猪八戒的
  }
};
</script>
<style scoped>
.red {
  color: #ff0000;
}
img {
  width: 200px;
  height: auto;
}
</style>

