<template>
  <div id="nav">
    <router-link to="/"
                 exact>
      <i class="iconfont icon-meiriyicai"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/car">
      <i class="iconfont icon-icon"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/profile">
      <i class="iconfont icon-add"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>
<style>
#nav {
  position: fixed;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 58px;
  border-top: 1px solid #e3e3e3;
}
#nav a {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}
#nav a i {
  font-size: 26px;
}
a.router-link-active {
  color: red;
}
</style>

