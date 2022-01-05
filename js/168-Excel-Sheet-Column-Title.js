/**

 Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

 For example:

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 ...


 Example 1:

 Input: columnNumber = 1
 Output: "A"
 Example 2:

 Input: columnNumber = 28
 Output: "AB"
 Example 3:

 Input: columnNumber = 701
 Output: "ZY"


 Constraints:

 1 <= columnNumber <= 231 - 1
 Accepted
 290,368
 Submissions
 873,739
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let columnTitle = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    while (true) {
        let currentIndex = columnNumber % 26;
        if (currentIndex == 0) currentIndex = 26;
        result = columnTitle[currentIndex-1] + result;
        if (columnNumber <= 26) {
            return result;
        }
        columnNumber = Math.floor((columnNumber-1) / 26);


    }

    return result;
};
