var allName = "zhenghouchu";
var age = 22;
var address = "Yulin";
var desc = "My name is " + allName + ", I'm " + age + " years old and from " + address + " Guangxi provice of China!";
console.log(desc);
//数组
var arrNumberList = [1, 2, 3];
console.log(arrNumberList);
//类型数组
var arrStringList = ["zheng", "hou", "chu"];
console.log(arrStringList);
//元组 
//枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var redColor = Color.red;
console.log(Color[redColor]);
