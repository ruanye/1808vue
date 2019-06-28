// express  框架 node 的框架  js ->jq
const express = require('express');
const cors = require("cors") 
const app = express(); // 会自动创建一个服务器
app.listen(3000); // 服务器端口号
app.use(cors()) 
// 轮播图接口 访问地址:localhost:3000/banner
const banner = require('./banner');
app.get('/banner', (req, res) => {
  res.json({ code: 200, banner });
});

// app. 后面跟着的get post 表示前端发送过来的请求方式
// 参数  1 请求路径 必须加 /
