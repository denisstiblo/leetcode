/*
Given the head of a singly linked list, return true if it is a palindrome.



    Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false


Constraints:

    The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9


Follow up: Could you do it in O(n) time and O(1) space?

    */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let pathValues = [];

    while(head != null){
        pathValues.push(head.val);
        head = head.next;
    }

    const pathValuesLength = pathValues.length;

    for (let i = 0; i < pathValuesLength/2; i++) {
        if (pathValues[i] !== pathValues[pathValuesLength - 1 - i]) {
            return false;
        }
    }

    return true;
};