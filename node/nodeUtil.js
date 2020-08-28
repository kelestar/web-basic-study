
//node常用工具 util
//util.callbackify

const util = require("util");
var fs = require("fs");

async function fn() {
  console.log("Hello World!");
  return "From zhc"
}

const callbackFunc = util.callbackify(fn);

callbackFunc((err, value) => {
  if(err) throw err;
  console.log(value);
})

async function readfile() {
  let data = fs.readFileSync("../txt/nodeUtiltxt.txt").toString();
  // let data = "dhashdashdioh";
  return data;
}

const callbackRead = util.callbackify(readfile);

callbackRead((err, res) => {
  if(err) console.log(err);
  console.log(res);
})

console.log("文件正在读取!")