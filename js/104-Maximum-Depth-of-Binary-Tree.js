/**
iven the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2


Constraints:

    The number of nodes in the tree is in the range [0, 104].
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
 * @return {number}
 */
var maxDepth = function(root) {

    if (root === null) return 0;

    let depth = 0;
    let maxDepth = 0;

    const getDepth = function (node, depth) {
        if (node === null) return depth;
        depth++;
        if (depth > maxDepth) maxDepth = depth;
        return Math.max(getDepth(node.right, depth), getDepth(node.left, depth));
    }

    return getDepth(root, depth);
};

