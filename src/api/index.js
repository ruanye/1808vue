import axios from 'axios';
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值
axios.defaults.baseURL = 'http://132.232.89.22:3000'; //服务器远程地址
// axios.defaults.baseURL = 'http://localhost:3000'; // 本地localhost地址（本机启动）
// 提取公共的请求地址
// 响应拦截  interceptors 拦截器(过滤器)
// Pomise.all => axios.all
axios.interceptors.response.use(
  res => res.data,
  (err) => {
    Promise.reject(err);
  },
);
// 轮播图请求
const getBanner = () => axios.get('/banner');
// 首页列表的请求
const getList = () => axios.get('/listapi');
//数据分页请求 
const getPage =(page)=>{
  return  axios.get(`/listapi?page=${page}`)
}
// getHomeAll合并了轮播图和首页列表的请求 执行拿到结果 [bannner:[],list:[]]
const getHomeAll = () => axios.all([getBanner(), getList()]);
export { getHomeAll, getList,getPage };
// 1. 导出 getBanner...方法
