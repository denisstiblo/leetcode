/**
 * A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

 The area of the rectangular web page you designed must equal to the given target area.
 The width W should not be larger than the length L, which means L >= W.
 The difference between length L and width W should be as small as possible.
 Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.



 Example 1:

 Input: area = 4
 Output: [2,2]
 Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
 But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
 Example 2:

 Input: area = 37
 Output: [37,1]
 Example 3:

 Input: area = 122122
 Output: [427,286]
 */

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
//     let sizeOfPage = [area, 1];
//     //let bestArea = area;
//     let n = 2;
//     let middleofArea = Math.floor(area/2);
//     while ( n <= middleofArea) {
//         if (area % n === 0) {
//             let divide = Math.ceil(area / n);
//             let reminder = area % n;
//             if ((sizeOfPage[0] - sizeOfPage[1]) > (divide - n) && divide >= n) {
//                 sizeOfPage[0] = divide;
//                 sizeOfPage[1] = n;
//             }
//         }
//         n++;
//     }

//     return sizeOfPage;


    let sizeOfPage = [];
    let height, weight = 0;
    for (let i=1 ; i*i <= area; i++) {
        if (area % i === 0) {
            width = i;
        }
    }

    height = area / width;

    return [height, width];
};
