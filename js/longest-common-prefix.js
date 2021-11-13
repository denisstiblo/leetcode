/**
 * Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".



 Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.


 Constraints:

 1 <= strs.length <= 200
 0 <= strs[i].length <= 200
 strs[i] consists of only lower-case English letters.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let numberOfStrings = strs.length;
    let lengthOfFirstElement = strs[0].length;
    if (numberOfStrings === 1) return strs[0];
    if (lengthOfFirstElement === 0 ) return "";

    var prefix = '';
    letterIndex = 0;
    var isLetterInAllStrings = function (strs, letterIndex, letter){
        for(i = 1; i < numberOfStrings; i++){
            if (strs[i][letterIndex] !== letter) {
                return false;
            }
        }
        return true;
    }

    for (j = 0; j < lengthOfFirstElement; j++){
        if (isLetterInAllStrings(strs, letterIndex, strs[0][j])){
            prefix += strs[0][j];
            letterIndex++;
        } else
        {
            return prefix;
        }
    }
    return prefix;
};
