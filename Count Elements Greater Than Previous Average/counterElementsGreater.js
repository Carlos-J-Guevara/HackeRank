/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */
let responseTimes = [100, 200, 150,300];

function countResponseTimeRegressions(responseTimes) {
    let responseTimesVarInternal = responseTimes;
    let averageArray = 0;
    let numbersGreater = 0;
    
    // average of the array
    for (const index in responseTimesVarInternal) {
        averageArray += responseTimesVarInternal[index];
    }
    averageArray = averageArray / responseTimesVarInternal.length;

    // calculus of the numbers greater than the average. 
    for (const index in responseTimesVarInternal) {
        if (index > averageArray){
            numbersGreater = numbersGreater + 1;
        }
    }
    return numbersGreater;
}

console.log(countResponseTimeRegressions(responseTimes))


