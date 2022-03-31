/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
const str1 = "   hello world     ";
function trim(str) {
    var new_str = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            new_str.push(i)
        }
        else{

        }
        console.log(i);
    }
}
trim(str1)


function updateInventory(newInv, currInv) {
    for(let newItem of newInv){
      let found = false;
      for(let currItem of currInv){
        if(newItem.name == currItem.name){
          currItem.quantity += newItem.quantity;
          found = true;
          break;
        }
      }
      if(!found){
        currInv.push(newItem)
      }
    }
    return currInv
  }

  function rotateStr(str, amnt) {
  