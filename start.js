function reverseStr(str, i = 0) {//starts from beginning
    if (i === str.length - 1){
      return str[i]
    }
    return reverseStr(str, i + 1) + str[i]
  }
  console.log(reverseStr("hello world"))
  
  function reverseStr2(str, left = 0, right = str.length - 1){//starts from beginning and end and works towards middle
    if (left > right){
      return ""
    } 
    else if (left === right){
      return str[left]
    }
    return str[right] + reverseStr2(str, left + 1, right - 1) + str[left]
  }
  console.log(reverseStr2("hello world"))
  
  function reverseStr3(str, i = str.length - 1){//starts from end
    if (str.length == 0) {
      return ""
    }
    if (i === 0){
      return str[0]
    }
    return str[i] + reverseStr3(str, i - 1)
  }
  console.log(reverseStr3("hello world"))