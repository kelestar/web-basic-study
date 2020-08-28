function myName(name) {
  console.log(name);
}
//函数作为另一个函数的参数
function say(func, name) {
  func(name);
}

say(myName, "zhc");