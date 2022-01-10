/**

 Given head, the head of a linked list, determine if the linked list has a cycle in it.

 There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

 Return true if there is a cycle in the linked list. Otherwise, return false.



 Example 1:


 Input: head = [3,2,0,-4], pos = 1
 Output: true
 Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 Example 2:


 Input: head = [1,2], pos = 0
 Output: true
 Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 Example 3:


 Input: head = [1], pos = -1
 Output: false
 Explanation: There is no cycle in the linked list.


 Constraints:

 The number of the nodes in the list is in the range [0, 104].
 -105 <= Node.val <= 105
 pos is -1 or a valid index in the linked-list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

//     if(!head) return false;

//     const nodeSet = new Set();
//     let p1 = head;

//     while(p1){
//         if(nodeSet.has(p1)) return true;
//         else nodeSet.add(p1);
//         p1 = p1.next;
//     }
//     return false;
    if(!head) return false;

    let listOfPreviousNode = [];

    let p1 = head;

    while (p1 != null) {

        if (listOfPreviousNode.indexOf(p1.next.val) !== -1) {
            return true;
        }

        listOfPreviousNode.push(p1.val);
        p1 = p1.next;
    }

    return false;
};
