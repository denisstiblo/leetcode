/**
 Given a string s, return true if a permutation of the string could form a palindrome.



 Example 1:

 Input: s = "code"
 Output: false
 Example 2:

 Input: s = "aab"
 Output: true
 Example 3:

 Input: s = "carerac"
 Output: true


 Constraints:

 1 <= s.length <= 5000
 s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {

    let charHashMap = {};

    for (let i in s) {
        if (charHashMap[s[i]] !== undefined) {
            charHashMap[s[i]] += 1;

        } else {
            charHashMap[s[i]] = 1;
        }
    }

    let notEvenCounter = 0;
    for (let i in charHashMap) {
        if (charHashMap[i] % 2 !== 0) {
            notEvenCounter++;
        }

        if (notEvenCounter > 1) return false;
    }

    return true;


};
