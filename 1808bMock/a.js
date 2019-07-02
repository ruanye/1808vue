let p = new Promise((resolve,reject)=>{
  resolve(1)
})
p.then(data=>{
	console.log(data)
	return data
}).then(data=>{
	console.log(data)
}).then(data=>{
	console.log(data)
})