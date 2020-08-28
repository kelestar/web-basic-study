let allName:string = "zhenghouchu";

let age:number = 22;

let address:string = "Yulin";

let desc:string = `My name is ${allName}, I'm ${age} years old and from ${address} Guangxi provice of China!`

console.log(desc)

//数组
let arrNumberList:number[] = [1, 2, 3];
console.log(arrNumberList);

//类型数组
let arrStringList:Array<string> = ["zheng", "hou", "chu"];
console.log(arrStringList)

//元组 

//枚举
enum Color {red, green, blue}
let redColor:Color = Color.red
console.log(Color[redColor])
