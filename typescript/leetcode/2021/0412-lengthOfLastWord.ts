/*******************************************************************************
 * @Description: 最后一个单词的长度 
 * @fileName: 0412-lengthOfLastWord.ts
 * @Author: hc_zheng
 * @Date: 2021/04/12 23:33:05
 * @LastEditors: hc_zheng
*******************************************************************************/

function lengthOfLastWord(s: string): number {
  let index: number = s.length - 1;
  //先决条件是index>=0的区别
  while (index >= 0 && s[index--] == ' ');
  ++index;
  let len: number = 0;
  while (index >= 0 && s[index--] != ' ') len++;

  return len;
};

let len = lengthOfLastWord("a");
console.log(len);