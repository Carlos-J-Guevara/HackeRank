'use strict';
/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

// Test cases 

// Expected output: 2
let responseTimes = [100, 200, 150,300];

// Expected output: 3
const arrayOne = [1, 5, 2, 8, 3, 10];

// Expected output: 2
const arrayTwo = [10, 5, 1, 0];

// Expected output: 2
const arrayThree = [1, 2, 3, 4, 5];

function countResponseTimeRegressions(responseTimes) {
    let responseTimesVarInternal = responseTimes;
    let averageArray = 0;
    let numbersGreater = 0;
    
    // average of the array.
    for (const index in responseTimesVarInternal) {
        averageArray += responseTimesVarInternal[index];
    }
    averageArray = averageArray / responseTimesVarInternal.length;

    // calculus of the numbers greater than the average. 
    for (const index in responseTimesVarInternal) {
        if (responseTimesVarInternal[index] > averageArray){
            numbersGreater = numbersGreater + 1;
        }
    }
    return numbersGreater;
}

console.log(countResponseTimeRegressions(responseTimes))
console.log(countResponseTimeRegressions(arrayOne))
console.log(countResponseTimeRegressions(arrayTwo))
console.log(countResponseTimeRegressions(arrayThree))

