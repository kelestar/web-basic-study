var obj = {};
obj.log = console.log;
obj.log.call(console, this)


var Product = {
  count: 1,
  getCount() {
    return this.count++;
  }
};

console.log(Product.getCount());;
var func = Product.getCount();
console.log(func)
