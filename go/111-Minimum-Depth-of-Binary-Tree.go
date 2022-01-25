/**
 * Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 Note: A leaf is a node with no children.



 Example 1:


 Input: root = [3,9,20,null,null,15,7]
 Output: 2
 Example 2:

 Input: root = [2,null,3,null,4,null,5,null,6]
 Output: 5
 */

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func minDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }

    if root.Left == nil && root.Right == nil {
        return 1
    }

    if root.Left == nil {
        return minDepth(root.Right) + 1
    }

    if root.Right == nil {
        return minDepth(root.Left) + 1
    }

    leftSide := minDepth(root.Left)
    rightSide := minDepth(root.Right)

    if leftSide < rightSide {
        return leftSide + 1
    }
    return rightSide + 1
}
