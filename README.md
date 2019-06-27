# 1808vue
### 一）package.json的作用(了解)
- node_moudules 文件夹 -->放着我们项目的依赖 
- dependencies(依赖)  devDependencies(开发依赖) 写代码的时候需要用，打包的时候不需要 npm install 其实就是走的依赖 
- scripts 脚本 npm run serve 
- name 项目名称, version:版本号
### 二）路由懒加载（掌握2，3）
1. /* webpackChunkName: "about" */   可以给懒加载模块起名 
2. import() 表示懒加载，es6的语法 
3. 路由懒加载的写法  
```js
() => import('./views/Home.vue')
``` 
## 流程
### 一） 项目的目录结构
- mock  如果自己写模拟数据创建mock文件夹
- src
 - view         页面级组件
 - libs         工具类 util.isArray 
 - componments  基础组件/公共组件 
 - api          放ajax请求 
    - index.js
### 二) 项目的页面 首页 列表 购物车  个人中心 详情页 
1）app.vue 配置router-link 配置导航  
2）views 里面建页面组件 List.vue  Car.vue Profile.vue  Detail.vue 	
        





