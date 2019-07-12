<template>
  <div id="app">
    <!-- 3用标签的形式使用 -->
    <Nav />

    <!-- 需要缓存的路由 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <!-- 不需要缓存的路由 -->
    <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>
<script>
//1 引入组件
import Nav from "./components/Nav";
export default {
  created() {
    console.log(this.$route.name);
  },
  //2注册
  components: {
    Nav
  }
};
</script>
<style>
.container {
  position: fixed;
  top: 0;
  width: 100%;
  overflow-y: scroll;
  bottom: 58px;
}
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
