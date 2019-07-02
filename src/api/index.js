import axios from 'axios';
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值
// http://132.232.89.22:3000/banner
// http://132.232.89.22:3000
axios.defaults.baseURL = 'http://132.232.89.22:3000'; // 提取公共的请求地址
// 响应拦截  interceptors 拦截器(过滤器)
axios.interceptors.response.use(
  res => res.data,
  (err) => {
    Promise.reject(err);
  },
);
const getBanner = () => axios.get('/banner');
const getList = () => axios.get('/list');
export { getBanner, getList };
// 1. 导出 getBanner...方法
