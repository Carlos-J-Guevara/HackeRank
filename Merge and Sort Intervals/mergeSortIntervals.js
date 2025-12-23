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
const turnANewListOfLits = (entireList) => {
    const newEntireList = [];
    let eachElementInArray = [];

    for (const index in entireList){
        eachElementInArray = turnNewArrays(entireList[index]);
        newEntireList.push(eachElementInArray);
    }
    
    return newEntireList;
};

// this is for checking just at the moment of the conditional, which is being expected to determine if it is being overlapped
const areTheseTwoOverlapping = (array1, array2) => {
    const yesOrNo = false;
    const varArray1 = 0;
    const varArray2 = 0;
    const array1Length = 0;
    const array2Length = 0;
    const biggerLength = 0;

    array1Length = array1.length;
    array2Length = array2.length;

    if (array1Length > array2Length){
        biggerLength = array1Length;
    }

    else {
        biggerLength = array2Length;
    }

    for(let i = 0; i < biggerLength){
        
    };

};

// function to determine if two elements of inside are overlapping (I will assume always we will need to sort some from)
// this is the function with the original name of, to bring all of them like that to hackerRank
const mergeHighDefinitionIntervals = (newEntireList) => {
    const newTestedArrayNonOverlapping = [];

    for (const index in newEntireList){
        if(){

        }
    }
    
    return newTestedArrayNonOverlapping
};

