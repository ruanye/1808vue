let p = new Promise((resolve,reject)=>{
  resolve({banner:['1']})
})
let p2 = new Promise((resolve,reject)=>{
  resolve({list:[2]})
})
Promise.all([p,p2]).then(data=>{
	console.log(data)
})