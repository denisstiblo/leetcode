/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

 Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Make a copy of the first m elements of nums1.
    let nums1Copy = [];
    for (var i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }

    // Read pointers for nums1Copy and nums2 respectively.
    let p1 = 0;
    let p2 = 0;

    // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for (let p = 0; p < m + n; p++) {
        // We also need to ensure that p1 and p2 aren't over the boundaries
        // of their respective arrays.
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[p] = nums1Copy[p1++];
        } else {
            nums1[p] = nums2[p2++];
        }
    }
};
