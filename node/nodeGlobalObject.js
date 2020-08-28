console.log(__filename);
console.log(__dirname);

//全局对象global
setTimeout(() => {
  console.log("三秒后say Hello World!")
}, 3000);

console.log(global)