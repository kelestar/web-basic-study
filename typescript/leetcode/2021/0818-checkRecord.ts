/*******************************************************************************
 * @Description: 551. 学生出勤记录 I
 * @fileName: 0818-checkRecord.ts
 * @Author: hc_zheng
 * @Date: 2021/08/18 10:26:09
 * @LastEditors: hc_zheng
*******************************************************************************/
/*
* 方案一 不如下一种方案
function checkRecord(s: string): boolean {
  let A_num: number = 0;
  let L_net: boolean = false;
  for (let i: number = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'A':
        A_num++;
        break;
      case 'L':
        if (i<s.length-2 && s[i+1]=='L' && s[i+2]=='L') L_net = true;
        break;
    }
  }

  if (A_num < 2 && !L_net) return true;
  return false
};
*/
function checkRecord(s: string): boolean {
  let A_num: number = 0;
  let L_temp_num: number = 0;
  let L_net: boolean = false;
  for (let i: number = 0; i < s.length; i++) {
      switch (s[i]) {
          case 'A':
              L_temp_num = 0;
              A_num++;
              break;
          case 'P':
              L_temp_num = 0;
              break;
          case 'L':
              L_temp_num++
              if (L_temp_num >= 3) L_net = true;
              break;
      }
  }

  if (A_num < 2 && !L_net) return true;
  return false
};
const b: boolean = checkRecord("LLL")

console.log(b);

