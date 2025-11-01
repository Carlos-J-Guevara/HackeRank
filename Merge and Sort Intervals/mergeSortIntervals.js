// Merge and Sort Intervals
// Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.

// Example
// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

// Output
// [[1, 6], [8, 10], [15, 18]]

// I assume it was already sorted somehow

// const intervals = [
// [1, 3], rows
// [2, 6], rows
// [8, 10],rows
// [15, 18]rows

// cl1 cl2
// ];


const intervals = [
[1, 3], 
[2, 6], 
[8, 10],
[15, 18]
];

function mergeHighDefinitionIntervals(intervals) {
    let intervalsReturn = intervals; 
    let row = [];
    let rowFirstElement = 0;
    let rowSecondElement = 0;
    let comparing = [];  

    for (const index in intervalsReturn){
        
        intervalsReturn[index][index]
    }

    return
}