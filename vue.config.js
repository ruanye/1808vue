const fs = require('fs').promises; // 文件操作
const path = require('path');
const banner = require('./1808bMock/banner');
// 路径
function readList(filename) {
  filename = path.resolve(__dirname, filename); // 取到文件的绝对路径
  return fs.readFile(filename, 'utf-8').then(data => JSON.parse(data));
}
module.exports = {
  devServer: {
    before(app) {
      // localhost:8080/banner
      app.get('/banner', (req, res) => {
        res.json({
          code: 200,
          banner,
        });
      });
      // 列表接口 localhost:3000/list
      app.get('/list', (req, res) => {
        readList('./1808bMock/list.json').then((data) => {
          res.json({
            code: 200,
            list: data,
          });
        });
      });
      // --------
    },
  },
};
