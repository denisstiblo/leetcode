/**
 * Given a string s, return the longest palindromic substring in s.



 Example 1:

 Input: s = "babad"
 Output: "bab"
 Note: "aba" is also a valid answer.
 Example 2:

 Input: s = "cbbd"
 Output: "bb"
 Example 3:

 Input: s = "a"
 Output: "a"
 Example 4:

 Input: s = "ac"
 Output: "a"


 Constraints:

 1 <= s.length <= 1000
 s consist of only digits and English letters.
 Accepted
 1,589,922
 Submissions
 5,041,110
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
//   let reversedString = s.split("").reverse().join("");
//   const stringLength = s.length;
//   let longestPalindrom = '';
//   let currentString = '';

//   for (var i = 0; i < stringLength; i++) {
//       currentString = '';
//       for (var j = i; j < stringLength; j++) {
//           currentString += s[j];
//           let indexOfSubstring = reversedString.indexOf(currentString);
//           if ( indexOfSubstring !== -1 && indexOfSubstring == (stringLength - j - 1) )
//           {
//                 if (currentString.length >  longestPalindrom.length)
//                     {
//                         longestPalindrom = currentString;
//                         continue;
//                     }
//           }

//       }
//   }

//   return longestPalindrom;

    let max=0, count, a=0, b=0;

    for(let i=0 ; i < s.length-1;i++) {

        if(i > 0 && s[i-1]==s[i+1]){
            count = 0;
            for(let j=i-1,k=i+1;j>=0&&k<s.length;j--,k++){
                if(s[j]==s[k]) count++;
                else break;
            }
            if(2*count+1>max) { a=i-count; b=i+count; max=2*count+1;}
        }

        if(s[i]==s[i+1]){
            count=0;
            for(let j=i,k=i+1;j>=0&&k<s.length;j--,k++){
                if(s[j]==s[k]) count++;
                else break;
            }
            if(2*count>max) {  a=i-count+1; b=i+count; max=2*count;}
        }
    }
    return s.substring(a,b+1);

};
