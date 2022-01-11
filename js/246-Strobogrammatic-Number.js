/**
 Given a string num which represents an integer, return true if num is a strobogrammatic number.

 A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).



 Example 1:

 Input: num = "69"
 Output: true
 Example 2:

 Input: num = "88"
 Output: true
 Example 3:

 Input: num = "962"
 Output: false


 Constraints:

 1 <= num.length <= 50
 num consists of only digits.
 num does not contain any leading zeros except for zero itself.
 */


/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {

    // if (num.length == 1) return true;

    const nonStrobogrammaticNumber = [2,3,4,5,7];
//     const numString = num.toString();

//     for (i in nonStrobogrammaticNumber) {
//         if (numString.indexOf(nonStrobogrammaticNumber[i]) !== -1) {
//             return false;
//         }
//     }

//     return true;
    const strobogrammaticMap = {
        "1" :  "1",
        "6" : "9",
        "9" : "6",
        "0" : "0",
        "8" : "8"
    }


    const numString = num.toString();

    for (i in nonStrobogrammaticNumber) {
        if (numString.indexOf(nonStrobogrammaticNumber[i]) !== -1) {
            return false;
        }
    }

    let reversedString = "";

    for (let i = (numString.length -1); i >=0;i--) {
        reversedString = reversedString + strobogrammaticMap[numString[i]];
    }


    return  (reversedString === numString)

};
