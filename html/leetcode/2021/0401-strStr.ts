/*-------------------------------------------------------------------------------
 * @Description: indexOf() 字符串类型函数式实现
 * @fileName: 0401-strStr.ts
 * @Author: hc_zheng
 * @Date: 2021/04/10 21:16:21
 * @LastEditors: hc_zheng
--------------------------------------------------------------------------------*/


function strStr(haystack: string, needle: string): number {
  if (!haystack && !needle || !needle) return 0;
  let p = 0;
  let q = 0;
  while (q < haystack.length) {
    if (haystack[q] != needle[q - p]) {
      ++p;
      q = p;
    } else {
      ++q;
      if ((q - p) == needle.length) return p;
    }
  }
  return -1;
};

// let start = strStr("aaaaa", "bba");
let start = strStr("aa", "");

console.log(start);