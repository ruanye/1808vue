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
### 四） 路由激活样式(掌握exact的使用) 
router-link-exact-active router-link-active
router- link   exact 属性 确切严格的匹配  
### 五）es6的module  import export（掌握） 
- import 导入
- export 表示导出  export 导出的是一个接口,不能是具体值 
- import 导入的变量 在顶级作用域，不能被更改 
- export defautl 默认导出 后面跟具体的值   
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
```js
//a.js 
export {a,b}   
//b.js 
//第一种写法(解构赋值)
import {a} form  'a.js' //直接使用a
// 第二种写法（全挂载到一个对象上面）
import * as type from 'a.js' //使用type.a 
```
```js
//a.js
export default 1
//b.js
import xxx from 'a.js'
```
### 六） async await 异步的终极解决方案(掌握) 
 - async 后面必须跟函数 表示函数路面有异步操作 
 - await 后面通常跟promise(也可以跟普通值) 跟promise  表示promise的执行结果 
###  七)  组件化的好处（了解）
 1. 可复用 
 2. 便于维护
 3. 可组合
### 八） axios （掌握）
 - axios.defaults.baseURL  抽离公共的请求路径 
 - axios.interceptors.response.use  响应拦截器  interceptors 拦截器 
 - axios.interceptors.request.use 请求拦截器  
 ### 九) try catch 异常捕获 不会影响后面的代码执行   
```js
try{
   要执行的代码 
}catch(err){
   console.log(err) 捕获到的异常 
}
```
### 十) style 标签加scoped 表示样式只对当前组件生效  
### 十一） Pomise.all => axios.all  
- 用法：所有的promise成功之后才会走all里面的成功  
- 好处：多个请求完成之后把数据集合到一起 
 


## 二、流程
### 一） 项目的目录结构
- mock  如果自己写模拟数据创建mock文件夹(可有可无)
- src
 - view         页面级组件
 - libs         工具类 util.isArray 
 - componments  基础组件/公共组件 
 - api          放ajax请求(自己建)
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
### 四) axios 的使用流程 src/api/index.js 
- npm install axios --save 
- index.js
1）api/index.js 导出请求的方法  
```js
const getBanner = () => axios.get('/banner');
export { getBanner };
```
2）哪个组件需要数据就在哪个组件引入 
```js
import { getBanner} from "../api";
```
3) 在引入的组件里面进行调用 
```js
 getBanner()  //执行才会发送请求 
```
- 请求的写法 和async和await 效果一致
```js
  getBanner().then(data=>{
      let {banner} = data;
      this.slider =banner
  },err=>{})
```



## 三、mock接口
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
 
##前端 服务端
服务端 --> 返回数据->前端  
前端   -->  请求数据 ->服务端  
axios.get('http://localhost:3000/banner')
axios.get('www.baidu.com/banner')





​       





