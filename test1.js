/**
 * Test 1
 * This is the first coding challenge. Below are two arrays. 
 * The second array is identical to the first except for one number.
 * Find the missing number and log it in the console
 *
 * You may use any development tools or package manager you like. 
 * Lodash is included as a bower.json dependency in case you would like to use it.
 */

var arr = [1,2,5,7,4,8,12,15,17,37];
var secondArr = [1,17,5,12,4,7,15,2,37];

function missingNumber(arr, secondArr){
var result = [];
for (var i = 0; i < arr.length; i++) {
    var count = 0; 
    for (var j = 0; j < secondArr.length; j++) {
        if (arr[i] == secondArr[j]) { // Checks an element of arr with every element of secondArr
            count = 1; // if element is found, counter is set to true 
            break; // loop terminates
        } 
    }
    if (count==0) {
        result.push(arr[i]); // when element is not found the number is pushed into result
    }
}
 return result;
}

console.log("The missing number is: " +missingNumber(arr,secondArr));
