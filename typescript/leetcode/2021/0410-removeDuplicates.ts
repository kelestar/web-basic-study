
/*-------------------------------------------------------------------------------
 * @Description: 删除升序数组重复项，返回最终数组的长度
 * @fileName: 0410-removeDuplicates.ts
 * @Author: hc_zheng
 * @Date: 2021/04/10 21:23:37
 * @LastEditors: hc_zheng
--------------------------------------------------------------------------------*/

function removeDuplicates(nums: number[]): number {
  if (!nums || nums.length == 0) return 0;
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[p] !== nums[q]) {
      nums[++p] = nums[q];
    }
    q++;
  }
  return p + 1;
};
let arr = [10, 12, 12, 13, 13, 13, 15, 15, 19, 111];
let len = removeDuplicates(arr);
console.log(arr);
console.log(len);