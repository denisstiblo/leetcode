/*

252. Meeting Rooms
Easy

1233

61

Add to List

Share
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true


Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti < endi <= 106

 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    // time limit exception
//     let minuteList = [];


//     for (let i = 0; i < intervals.length; i++) {

//         for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
//             if (minuteList.indexOf(j) !== -1) return false;
//             minuteList.push(j);

//         }
//     }

//     return true;

    for (let i = 0; i < intervals.length; i++) {
        for (let j = i+1; j <  intervals.length; j++) {
            if (intervals[i][0] >= intervals[j][0] && intervals[i][0] < intervals[j][1]) { return false;
            }
            if (intervals[i][1] > intervals[j][0] && intervals[i][0] < intervals[j][1]) { return false;
            }



        }
    }

    return true;
};
