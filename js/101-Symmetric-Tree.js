/**
 * 101. Symmetric Tree
 Easy

 8162

 201

 Add to List

 Share
 Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



 Example 1:


 Input: root = [1,2,2,3,4,4,3]
 Output: true
 Example 2:


 Input: root = [1,2,2,null,3,null,3]
 Output: false


 Constraints:

 The number of nodes in the tree is in the range [1, 1000].
 -100 <= Node.val <= 100

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    const isMirror = function (t1, t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;
        return (t1.val == t2.val)
            && isMirror(t1.right, t2.left)
            && isMirror(t1.left, t2.right);
    }

    return isMirror(root, root);
};
