<template>
  <div id="app">
    <!-- 3用标签的形式使用 -->
    <Nav />
    <router-view />
  </div>
</template>
<script>
//1 引入组件
import Nav from "./components/Nav";
export default {
  //2注册
  components: {
    Nav
  }
};
</script>
<style>
ul,
li {
  list-style: none;
}
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
