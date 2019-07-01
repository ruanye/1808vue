## es6 import 和 export 的使用

### moudle export 和 import

1. 导出

```js
//写法一 和写法二 完全一样
//a.js
export let a = {};
export let b = 2;
```

```js
// 写法二
//a.js
let a = 1;
let b = 2;
export { a, b };
```

2. 引用

```js
//b.js
import {a,b} from 'a.js'
//或者
import * as obj from "a.js"
//obj =>{a:1,b:2}  obj.a obj.b
```

### moudle export default 和 import

1. export default 后面可以跟具体的值，默认导出

```js
//a.js
let a=1
export default a
//后者
export default 1
export {}
function get (){}
export default get
```

2. 默认导出的引入

```js
import xxx from "a.js";
//xxx 自己命的名字
```

### 综合 export default 和 export 可以同时使用

```js
//a.js
export let a = 1;
export default 2;
```

```js
//b.js
 import {a} from 'a.js'
 import xx from 'a.js'
 //可以用逗号作为分割符写在一起
 import {a},xx from 'a.js'
```
