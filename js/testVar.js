var b = 3;
(function() {
  b = 5;
  console.log(b);
  var b = 2;
  console.log(b);
})();

console.log(b)

function MyObject(name) {
  this.name = name
}
let myName = new MyObject("zhc")
console.log(myName.name)