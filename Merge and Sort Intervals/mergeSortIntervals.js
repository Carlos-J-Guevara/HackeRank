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

// const testArray = [1,8]; this variable is here for testing the first par of the logic, the minimum array turned into a complete one 

// function to turn the elements into the principal array a new array one complete
const turnNewArrays = (beforeArray) => {
    const startElement = beforeArray[0];
    const endElement = beforeArray[1];
    const differenceBetween = endElement - startElement; 
    const afterArray = [];

    // Assigning the first element into the array which is the returned array.  
    afterArray.push(startElement);

    // cycles by the difference 
    for(let i = 0; i < differenceBetween; i++){
        afterArray.push(afterArray.at(-1) + 1);
    }
    return afterArray
};

// In order to simplify the complexity, I have chosen to make a function to turn a complete list into a new extended list
const turnANewlistOfLits = (entireList) => {
    const newEntireList = [];
    let eachElementInArray = [];

    for (const index in entireList){
        eachElementInArray = turnNewArrays(entireList[index]);
        newEntireList.push(eachElementInArray);
    }
    
    return newEntireList;
};

// function to determine if two elements of inside are overlapping
const areTheseTwoOverlappingEachOther = (element1, element2) => {
    const answerIfTheyAreOverlapping = false;

    // for (){

    // }
    return 
};

// COMENTED TO LATER TO DETERMINE THE LAST FUNCTION ABOVE ADD AS A NEW PART OF LOGIC TO KEEP FOLLOW THE PROBLEM

// the function to check if the new array which was produced coming from the second function, is in within, their elements are overlapping
// const mergeTheOverlappingElementsInandSortThem = (newEntireList) => {
//     const arrayOfNonOverlappingIntervals = [];
//     let checkingElementsInside = [];

//     for (const index in newEntireList) {
//         if (index === 0){

//         }

//         else{

//         }
//     }
//     return 
// };

// End function where all is going to be added just to invoke and use it
// function mergeHighDefinitionIntervals(intervals) {
//     let intervalsReturn = intervals; 
//     let compareArray1 = [];
//     let compareArray2 = [];
    
//      for (const index in intervalsReturn){
//        compareArray1 = turnNewArrays(intervalsReturn[index])
//      }

//      return
//  };

//###########################  TESTING AREA ################################
// console.log(turnANewlistOfLits(intervals));