/*******************************************************************************
 * @Description: 最大子序和
 * @fileName: 0412-maxSubArray.ts
 * @Author: hc_zheng
 * @Date: 2021/04/12 23:34:22
 * @LastEditors: hc_zheng
*******************************************************************************/
function maxSubArray(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  let sum: number = 0;
  let s: number = 0;
  let e: number = 0;
  while (e < nums.length) {
    let temp: number = sum + nums[e];
    if (sum < temp) {
      sum = temp;
    }
    e++;
    if (e == nums.length) {
      s++;
      e = s;
    }
  }

  return sum;
};

let sum = maxSubArray([5, 4, -1, 7, 8]);

console.log(sum);
