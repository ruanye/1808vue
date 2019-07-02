## npm的使用
- 包管理工具  yarn和npm一样 
命令
1. npm init -y  一键初始化 
2. npm intall  下载  npm install jquery@2.0   npm i  ->npm install的简写
 - g  global的缩写 全局    
3. npm uninstall  卸载 
- https://registry.npmjs.org/
4. 切换淘宝源 npm set registry https://registry.npm.taobao.org/
5. npm cache clear --force  强制除缓存
6. npm config set loglevel=http 显示进度条
## nrm 管理npm用的 (可选项) 
- 下载nrm npm install nrm -g 
- nrm ls npm 仓库列表  
- 测试仓库速度 nrm test 
- 使用哪个仓库 nrm use taobao/nrm use cnpm 等价于 npm set registry https://registry.npm.taobao.org/  

- npm 和yarn 不要混用(在一个项目里面) 
```
yarn = npm install  
yarn add jquery = npm install jquey 
```

