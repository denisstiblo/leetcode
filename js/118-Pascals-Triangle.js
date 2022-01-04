/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]


Constraints:

1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let pascalTriangle = [];
    let leftNeighbour;
    let rightNeighbour;

    for (var i = 0; i < numRows; i++) {
        pascalTriangle[i] = [];
    }

    pascalTriangle[0][0] = 1;

    for (var i = 1; i < numRows; i++) {
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

    return pascalTriangle;
};
