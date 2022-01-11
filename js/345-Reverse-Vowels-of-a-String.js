/**

 Given a string s, reverse only all the vowels in the string and return it.

 The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.



 Example 1:

 Input: s = "hello"
 Output: "holle"
 Example 2:

 Input: s = "leetcode"
 Output: "leotcede"


 Constraints:

 1 <= s.length <= 3 * 105
 s consist of printable ASCII characters.
 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    const vowelList = ["a","e","i","o","u","A","E","I","O","U"];
    let directList = [];
    let indexesList = [];

    for (let i in s ) {
        if (vowelList.indexOf(s[i]) !== -1) {
            directList.push(s[i]);
            indexesList.push(i);
        }
    }

    let reversedList = [];
    for (let i = (directList.length - 1); i >= 0 ; i-- ) {
        reversedList.push(directList[i]);
    }

    let vowelIndex = 0;
    strList = s.split('');
    for (let i = 0; i < indexesList.length; i++ ) {
        strList[indexesList[i]] = reversedList[i];
    }
    s = strList.join('');

    return s;

};
