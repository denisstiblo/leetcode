/**

 Given two binary strings a and b, return their sum as a binary string.



 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"


 Constraints:

 1 <= a.length, b.length <= 104
 a and b consist only of '0' or '1' characters.
 Each string does not contain leading zeros except for the zero itself.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    let resultString = '';
    let carry = 0;
    let zeroString = '';

    if (aLength > bLength) {
        let diff =  aLength - bLength;
        for (let j = 0; j < diff; j++ ){
            zeroString += 0;
        }
        b = zeroString + b;
    }


    if (bLength > aLength) {
        let diff =  bLength - aLength;
        for (let j = 0; j < diff; j++ ){
            zeroString += 0;
        }
        a = zeroString + a;
    }


    const maxLength = a.length;
    let currentSum = 0;
    for (let i = (maxLength -1); i >= 0; i-- ) {
        currentSum = (parseInt(a[i]) + parseInt(b[i]) + parseInt(carry));
        if(currentSum > 1) {
            if (currentSum % 2 === 0) {
                resultString = '0' + resultString;
            }
            if (currentSum % 2 === 1) {
                resultString = '1' + resultString;
            }
            carry = 1;
        } else {
            resultString = currentSum + resultString;
            carry = 0;
        }
    }

    if (carry > 0)
        resultString = '1' + resultString;

    return resultString;

};
