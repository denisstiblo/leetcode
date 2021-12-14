/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
Accepted
911,101
Submissions
2,328,104
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    function leftMostSearch() {
        let left = 0, right = nums.length - 1;

        while (left < right) {
            const mid = Math.trunc((left + right) / 2);
            if (target <= nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[right] === target ? right : -1;
    }

    function rightMostSearch() {
        let left = 0, right = nums.length - 1;

        while (left < right) {
            const mid = Math.ceil((left + right) / 2);
            if (target >= nums[mid]) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        return nums[left] === target ? left : -1;
    }

    return [leftMostSearch(), rightMostSearch()];
}
