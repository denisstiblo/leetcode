/*

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]


Constraints:

0 <= rowIndex <= 33


Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pascalTriangle = [];
    let leftNeighbour;
    let rightNeighbour;

    for (var i = 0; i <= rowIndex; i++) {
        pascalTriangle[i] = [];
    }

    pascalTriangle[0][0] = 1;

    for (var i = 1; i <= rowIndex; i++) {
        for (let j = 0; j <= i; j++) {
            leftNeighbour = 1;
            rightNeighbour = 1;

            if (pascalTriangle[i-1] !== undefined) {
                if (pascalTriangle[i-1][j-1] !== undefined) {
                    leftNeighbour = pascalTriangle[i-1][j-1];
                }
                else {
                    leftNeighbour = 0;
                }
            } else
            {
                leftNeighbour = 0;
            }

            if (pascalTriangle[i-1] !== undefined) {
                if (pascalTriangle[i-1][j] !== undefined) {
                    rightNeighbour = pascalTriangle[i-1][j];
                }
                else {
                    rightNeighbour = 0;
                }
            } else
            {
                rightNeighbour = 0;
            }

            pascalTriangle[i][j] = leftNeighbour + rightNeighbour;
        }
    }

    return pascalTriangle[rowIndex];
};
