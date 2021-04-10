/*<!-------------------------------------------------------------------------------
 * @Description: 丑数判断
 * @fileName: 0410-isUgly.ts
 * @Author: hc_zheng
 * @Date: 2021/04/10 21:21:54
 * @LastEditors: hc_zheng
-------------------------------------------------------------------------------->*/

function isUgly(n: number): boolean {
  let val = n;
  while (val > 1) {
    if (val % 2 === 0) {
      val /= 2;
    } else if (val % 3 === 0) {
      val /= 3;
    } else if (val % 5 === 0) {
      val /= 5;
    }
    else return false;
  }

  return val === 1;
};

console.log(isUgly(22));