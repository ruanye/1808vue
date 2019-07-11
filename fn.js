// api/index.js的执行逻辑 axios.get
// 如果函数执行 里面return 一个函数执行  函数执行的时候 return的函数也会执行
function b() {
  console.log('b执行');
}
function a() {
  return b();
}
a();
function sleep(numberMillis) {
  let now = new Date();
  const exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime) return;
  }
}
sleep(5000);
console.log(1);
