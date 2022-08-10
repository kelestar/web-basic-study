function minStartValue(nums: number[]): number {
  let startValue: number = 0;
  let sum: number = 0
  nums.forEach(num => {
    sum = sum + num;
    if(sum < 1) {
      startValue = startValue + 1 - sum;
      sum = 1;
    }
  })
  return startValue || 1;
};


console.log(minStartValue([-3,2,-3,4,2]));
console.log(minStartValue([1,2]));
console.log(minStartValue([1,-2,-3]));
console.log(minStartValue([-2,-2,-3]));
console.log(minStartValue([0,-2,-3, 1, 4]));
