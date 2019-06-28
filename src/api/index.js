import axios from 'axios';
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值
const getBanner = () => axios.get('http://localhost:3000/banner');
export { getBanner};
