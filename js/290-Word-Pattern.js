/**
 * 290. Word Pattern
 Easy

 2525

 282

 Add to List

 Share
 Given a pattern and a string s, find if s follows the same pattern.

 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



 Example 1:

 Input: pattern = "abba", s = "dog cat cat dog"
 Output: true
 Example 2:

 Input: pattern = "abba", s = "dog cat cat fish"
 Output: false
 Example 3:

 Input: pattern = "aaaa", s = "dog cat cat dog"
 Output: false


 Constraints:

 1 <= pattern.length <= 300
 pattern contains only lower-case English letters.
 1 <= s.length <= 3000
 s contains only lowercase English letters and spaces ' '.
 s does not contain any leading or trailing spaces.
 All the words in s are separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const numberChars = pattern.length;
    const wordList = s.split(" ");
    const numberWords = wordList.length;
    let mapChartToWord = {};
    let mapWordToChar = {};

    if (numberChars != numberWords) return false;

    for (let i in pattern) {
        if (mapChartToWord[pattern[i]] !== undefined) {
            if(mapChartToWord[pattern[i]] !== wordList[i]) return false;
        } else {
            mapChartToWord[pattern[i]] = wordList[i];
        }
    }

    for (let i = 0; i < numberWords; i++) {
        if (mapWordToChar[wordList[i]] !== undefined) {
            if(mapWordToChar[wordList[i]] !== pattern[i]) return false;
        } else {
            mapWordToChar[wordList[i]] = pattern[i];
        }
    }

    return true;

};
