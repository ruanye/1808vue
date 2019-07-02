import axios from 'axios';
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值
// http://132.232.89.22:3000/banner
// http://132.232.89.22:3000
axios.defaults.baseURL = 'http://132.232.89.22:3000'; // 提取公共的请求地址
// 响应拦截  interceptors 拦截器(过滤器)
// Pomise.all => axios.all   
axios.interceptors.response.use(
  res => res.data,
  (err) => {
    Promise.reject(err);
  },
)
//轮播图请求
const getBanner = () => axios.get('/banner');
//首页列表的请求 
const getList = () => axios.get('/list');
//getHomeAll合并了轮播图和首页列表的请求 执行拿到结果 [bannner:[],list:[]]
const getHomeAll=()=>{
  return axios.all([getBanner(),getList()])
}
export { getHomeAll };
// 1. 导出 getBanner...方法
