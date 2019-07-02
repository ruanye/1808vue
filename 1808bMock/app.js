// express  框架 node 的框架  js ->jq
const express = require('express');
const cors = require('cors');

const app = express(); // 会自动创建一个服务器
const fs = require('fs').promises; // 文件操作
const path = require('path');
// 路径
function readList(filename) {
  filename = path.resolve(__dirname, filename); // 取到文件的绝对路径
  return fs.readFile(filename, 'utf-8').then(data => {
     return JSON.parse(data)
    })
}
app.listen(3000); // 服务器端口号
app.use(cors());
// 轮播图接口 访问地址:localhost:3000/banner
const banner = require('./banner');

app.get('/banner', (req, res) => {
  res.json({ code: 200, banner });
});
// 列表接口 localhost:3000/list
app.get('/list', (req, res) => {
  readList('list.json').then((data) => {
    res.json({
      code: 200,
      list: data,
    });
  });
});

// app. 后面跟着的get post 表示前端发送过来的请求方式
// 参数  1 请求路径 必须加 /
