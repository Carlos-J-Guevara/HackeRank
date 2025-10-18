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

// Expected output: "undeterminated case, 0 division"
const arrayFour = [0, 0, 0, 0, 0];

// Expected output: 2
const arrayFive = [-1, -2, -3, -4, -5];

// Expected output: "type of data no supported for this function: data type was Infinite in the array, or NaN, or it was not an array"
const arraySix = ["a", "b", "c", "D", "F"];

function countResponseTimeRegressions(responseTimes) {
    let responseTimesVarInternal = responseTimes;
    let averageArray = 0;
    let numbersGreater = 0;
    
    // Determining is exactly an array executable
    if(Array.isArray(responseTimesVarInternal) && responseTimesVarInternal.every(num => typeof num === "number" && Number.isFinite(num))){
        // average of the array.
        for (const index in responseTimesVarInternal) {
            averageArray += responseTimesVarInternal[index];
        }

        // cero case 
        if(averageArray === 0){
            return "undeterminated case, 0 division"
        }

        // case major 0 or less than
        else if(averageArray > 0 || averageArray < 0){
            averageArray = averageArray / responseTimesVarInternal.length;

            // calculus of the numbers greater than the average. 
            for (const index in responseTimesVarInternal) {
                if (responseTimesVarInternal[index] > averageArray){
                    numbersGreater = numbersGreater + 1;
                }

            }

            // successful case
            return numbersGreater;
        }
    }

    // whatever else type of data passed to 
    else{
        return "type of data no supported for this function: data type was Infinite in the array, or NaN, or it was not an array"
    }
}

console.log(countResponseTimeRegressions(responseTimes))
console.log(countResponseTimeRegressions(arrayOne))
console.log(countResponseTimeRegressions(arrayTwo))
console.log(countResponseTimeRegressions(arrayThree))
console.log(countResponseTimeRegressions(arrayFour))
console.log(countResponseTimeRegressions(arrayFive))
console.log(countResponseTimeRegressions(arraySix))
