/*******************************************************************************
 * @Description: 搜索插入位置
 * @fileName: 0410-searchInsert.ts
 * @Author: hc_zheng
 * @Date: 2021/04/10 21:55:16
 * @LastEditors: hc_zheng
*******************************************************************************/
function searchInsert(nums: number[], target: number): number {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] < target) index++;
    else break;
  }
  return index;
};

// let index = searchInsert([1,3,5,6], 2);
let index = searchInsert([1, 3, 5, 6], 1);

console.log(index);