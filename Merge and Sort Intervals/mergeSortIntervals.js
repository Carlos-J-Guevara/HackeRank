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

const testArray = [1,8];

const turnNewArrays = (beforeArray) => {
    const startElement = beforeArray[0];
    const endElement = beforeArray[1];
    const differenceBetween = endElement - startElement; 
    const afterArray = [];

    // Assigning the first element into the array which is the returned array.  
    afterArray.push(startElement);

    // cycles by the difference 
    for(const i = 0; i < differenceBetween;){
        afterArray.push(afterArray.at(-1) + 1);
    }
    return afterArray
};

// function mergeHighDefinitionIntervals(intervals) {
//     let intervalsReturn = intervals; 
//     let row = [];
//     let rowFirstElement = 0;
//     let rowSecondElement = 0;
//     let comparing = [];  

//     for (const index in intervalsReturn){ws
//         intervalsReturn[index][index]
//     }

//     return
// };

console.log(turnNewArrays(testArray));