# 1808vue

## 一 、知识点

### 一）package.json的作用(了解)
- node_moudules 文件夹 -->放着我们项目的依赖 

- dependencies(依赖)  devDependencies(开发依赖) 写代码的时候需要用，打包的时候不需要 npm install 其实就是走的依赖 
- scripts 脚本 npm run serve 
- name 项目名称, version:版本号
### 二）路由懒加载（掌握2，3）
1. /* webpackChunkName: "about" */   可以给懒加载模块起名 
2. import() 表示懒加载，es6的语法 
3. 路由懒加载的写法(跳转到当前路由才去加载组件) 
```js
() => import('./views/Home.vue')
```
4. 路由重定向 使用redirect 
### 三) 局部组件引入流程
1. 用import 标签导入
2. 在components里面注册
3. 用标签的形式使用 
### 四） 路由激活样式  
router-link-exact-active router-link-active
router- link   exact 属性 确切严格的匹配  
### 五）es6的module  import export 
- import 导入
- export 表示导出  export 导出的是一个接口,不能是具体值 
```js
 let a =1 
 let b =2 
 //错误示范 
 export 1 
 export {
	a:1,b:2
 }
 //正确写法
 export{a,b}
```
- import {getBanner} from '../api'等价于 
import {getBanner} from '../api/index.js '  
 api->自动查找index.js 作为默认入口 


## 二、流程
### 一） 项目的目录结构
- mock  如果自己写模拟数据创建mock文件夹
- src
 - view         页面级组件
 - libs         工具类 util.isArray 
 - componments  基础组件/公共组件 
 - api          放ajax请求 
    - index.js
### 二) 搭建项目的页面 首页 列表 购物车  个人中心 详情页  配置导航路由

1）app.vue 配置router-link 配置导航  
2）views 里面建页面组件 List.vue  Car.vue Profile.vue  Detail.vue
3) 配置路由 和 导航  router-link 等于 a标签  a href 
### 三）首页
1) 抽离导航变成独立组件  components(放基础/公共组件) 新建 Nav.vue
2） 引入本地css assets 文件夹里面 
3）轮播图   components建Banner.vue 
4) props 传值 子组件定义props 接收数据的是子组件  传递数据的是父组件 
5) 使用轮轮播图组件 vue-awesome-swiper
 - npm install vue-awesome-swiper --save
 - main.js 
 ```js 
 import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
```
### 四) axios 的使用 src/api/index.js 
- npm install axios --save 
- index.js
```js
```
### 四、mock接口
 1) 和src同级建立mock（独立）文件夹(放在其他处也可以) mock(放mock数据) mock里面 建app.js(服务器)  banner.js（轮播图图片）  list.json（商品列表）
 2) express 使用 
 - npm install express 下载express (vue-cli创建项目里面不用下，因为vue-cli是基于webpack的，webpack自带了express)
 - app.js 
 ```js
    //创建express 服务器 
   let  express = require("express")
   let app = express()//会自动创建一个服务器
   app.listen(3000) 
 ```
 - 跨域解决方式 cors 跨域 跨域资源共享 
 - npm install cors 跨域的包 
 ```js
 const cors = require("cors")
 app.use(cors())
 ```
 

 
       





