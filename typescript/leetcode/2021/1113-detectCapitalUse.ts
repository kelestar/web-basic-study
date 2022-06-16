/**
 * 解决方案一
 */
/** 
function detectCapitalUse(word: string): boolean { 

  let rightWord = true
  function isLowercaseLetter(letter: string): boolean { 
    return letter >= 'a' && letter <= 'z'
  }
  function isCapitalLetter(letter: string) :boolean { 
    return letter >= 'A' && letter <= 'Z'
  }
  if(isLowercaseLetter(word[0])) { 
    for(let index = 1; index < word.length; index++) { 
      if(isCapitalLetter(word[index])) { 
        rightWord = false
        break;
      }
    }
  }
  else if(isCapitalLetter(word[0]) && isCapitalLetter(word[1])) { 
    for(let index = 2; index < word.length; index++) { 
      if(isLowercaseLetter(word[index])) { 
        rightWord = false
        break;
      }
    }
  } else if(isCapitalLetter(word[0])) { 
    for(let index = 1; index < word.length; index++) { 
      if(isCapitalLetter(word[index])) { 
        rightWord = false
        break;
      }
    }
  }

  return rightWord
}

*/

function detectCapitalUse(word: string): boolean {
  function isLowercaseLetter(letter: string): boolean {
    return letter >= 'a' && letter <= 'z'
  }
  function isCapitalLetter(letter: string): boolean {
    return letter >= 'A' && letter <= 'Z'
  }
  let wordType = ""
  if (isLowercaseLetter(word[0])) wordType = "abc";
  else if (isCapitalLetter(word[0]) && isLowercaseLetter(word[1])) wordType = "Abc";
  else if (isCapitalLetter(word[0])) wordType = "ABC"

  for (let index = 1; index < word.length; index++) {
    if (wordType == "abc" && isCapitalLetter(word[index])) return false;
    else if (wordType == "Abc" && isCapitalLetter(word[index])) return false
    else if (wordType == "ABC" && isLowercaseLetter(word[index])) return false
  }

  return true;

}


  let consoleIndex = 1
  console.log(detectCapitalUse("A"), consoleIndex++)
  console.log(detectCapitalUse("ABAAAKKSGGKKU"), consoleIndex++)
  console.log(detectCapitalUse("Aaasdsa"), consoleIndex++)
  console.log(detectCapitalUse("asdkj"), consoleIndex++)
  console.log(detectCapitalUse("AAmmjs"), consoleIndex++)
  console.log(detectCapitalUse("AasAkk"), consoleIndex++)

/** 
 * 方法1. 顺序遍历，如上两种方法
 * 方法2. 统一大写字母的顺序
 * 方法3. 3.1 无论第一个字母是否大小写，其他的字母必须与第二个字母大小写相同
 *        3.2 若第一个字母是小写，则需判断第二个字母是否小写  
 
 */

