// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//     You must write an algorithm with O(log n) runtime complexity.
//
//
//
//     Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:
//
// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:
//
// Input: nums = [1], target = 0
// Output: 0
//
//
// Constraints:
//
//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let numsLength = nums.length;

    if (target > nums[numsLength-1]) {
        return numsLength;
    }

    if (target < nums[0]) {
        return 0;
    }


    const binarySearch = function(nums, target, left, right) {

        if (left === right) {
            if (target <= nums[left]) return left;
            else return left + 1;
        }

        let newIndex = Math.floor((right + left) / 2);
        if (nums[newIndex] === target) return newIndex;

        if (nums[newIndex+1] > target && nums[newIndex] <  target) {
            return newIndex+1;
        }
        if (nums[newIndex] < target) {
            return binarySearch(nums, target, newIndex+1, right);
        }
        if (nums[newIndex] > target) {
            return binarySearch(nums, target, left, newIndex);
        }
    }

    let neighbour = binarySearch(nums, target, 0, numsLength-1);

    return  neighbour;
};
