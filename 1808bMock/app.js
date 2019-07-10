// express  框架 node 的框架  js ->jq
const express = require('express');
const cors = require('cors');

const app = express(); // 会自动创建一个服务器
const fs = require('fs').promises; // 文件操作
const path = require('path');
// 路径
function readList(filename) {
  filename = path.resolve(__dirname, filename); // 取到文件的绝对路径
  return fs.readFile(filename, 'utf-8').then(data => JSON.parse(data));
}
app.listen(3000); // 服务器端口号
app.use(cors());
// 轮播图接口 访问地址:localhost:3000/banner
const banner = require('./banner');

app.get('/banner', (req, res) => {
  res.json({ code: 200, banner });
});
// 列表接口 localhost:3000/list
app.get('/listapi', (req, res) => {
  let { page } = req.query; // 前端传过来的页数 page=1 里面的  1 2 3
  console.log(page);
  readList('list.json').then((data) => {
    const maxData = 5; // 每次拿几条数据
    page -= 1; // 1=>0  2=>1
    // data 是list.json里面拿到的数组
    const pagedata = data.slice(page * 5, (page + 1) * 5);
    // 2*5 +5 = (2+1)*5
    // 如果数据没有了 需要告诉前端
    // (page+1)*5   大于数组的length 表示没有更多数据了
    // 例如 我只有8条数据  2*5 =10 >8
    // 定义一个是否有更多数据的变量
    const hasMore = !((page + 1) * 5 >= data.length);
    if (!isNaN(Number(page))) {
      // 如果有page 证明是分页获取
      res.json({
        code: 200,
        list: pagedata,
        hasMore,
      });
    } else {
      // 没有page就返回全部数据
      res.json({
        code: 200,
        list: data,
      });
    }
  });
});
// 详情页面后端接口
app.get('/detail', (req, res) => {
  const { id } = req.query;
  console.log(id);
  readList('detail.json').then((data) => {
    // 通过find方法找到id相同的项目返回
    const detail = data.find(item => item.id == id);
    res.json({
      code: 200,
      data: detail,
    });
  });
});

// http://localhost:3000/listapi  全部的list数据
// http://localhost:3000/listapi?page=1
// app. 后面跟着的get post 表示前端发送过来的请求方式
// 参数  1 请求路径 必须加 /
