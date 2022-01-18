/**
 415. Add Strings
 Easy

 2786

 498

 Add to List

 Share
 Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

 You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.



 Example 1:

 Input: num1 = "11", num2 = "123"
 Output: "134"
 Example 2:

 Input: num1 = "456", num2 = "77"
 Output: "533"
 Example 3:

 Input: num1 = "0", num2 = "0"
 Output: "0"


 Constraints:

 1 <= num1.length, num2.length <= 104
 num1 and num2 consist of only digits.
 num1 and num2 don't have any leading zeros except for the zero itself.
 Accepted
 423,992
 Submissions
 824,154
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const num1Length = num1.length;
    const num2Length = num2.length;

    const addZeroToString = function (num, numberOfZero) {
        for (let i = 0; i < numberOfZero; i++) {
            num = '0' + num;
        }

        return num;
    }

    if (num1Length > num2Length) {
        let zeroNumber = num1Length - num2Length;
        num2 = addZeroToString(num2, zeroNumber);
    }


    if (num2Length > num1Length) {
        let zeroNumber = num2Length - num1Length;
        num1 = addZeroToString(num1, zeroNumber);
    }

    let sum = '';
    let carry = 0;

    for (let i = (num1.length - 1); i >= 0; i--) {
        let sumCurrentDigit = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        if (sumCurrentDigit > 9) {
            carry = 1;
            if (i !== 0) sumCurrentDigit = sumCurrentDigit - 10;
            else sumCurrentDigit = sumCurrentDigit;
        }
        else {carry = 0;}
        sum =  sumCurrentDigit + sum;
    }

    return sum;

};
