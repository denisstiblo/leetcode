/**
 53. Maximum Subarray
 Easy

 16753

 784

 Add to List

 Share
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 A subarray is a contiguous part of an array.



 Example 1:

 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 Example 2:

 Input: nums = [1]
 Output: 1
 Example 3:

 Input: nums = [5,4,-1,7,8]
 Output: 23


 Constraints:

 1 <= nums.length <= 105
 -104 <= nums[i] <= 104


 Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
//     const numsLength  = nums.length;
//     let maxSum;

//     for (var i = 0; i < numsLength; i++) {
//         let sum = 0;
//         for (var j = i; j < numsLength; j++)
//         {
//             sum += nums[j];
//             if (maxSum == undefined) {
//                 maxSum = sum;
//             }

//             if (sum > maxSum) {
//                 maxSum = sum;
//             }
//         }
//     }

//     return maxSum;

    let currentSum = nums[0];
    let maxSum = nums[0];
    const numsLength  = nums.length;

    for (var i = 1; i < numsLength; i++) {
        if (currentSum >= 0) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;

};
