// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray) {
	if(inputArray.length === 0) {
		return 0;
	} else if (inputArray.length === 1) {
		return [0]
	} else {
		pairsum = inputArray[0] * inputArray[1];
		for (i = 0; i < inputArray.length; i ++) {
			if (pairsum < inputArray[i] * inputArray[i + 1]) {
				pairsum = inputArray[i] * inputArray[i + 1]
			}
		} return pairsum
	}
}

console.log (solution(inputArray))

// function solution(arr) {
//   return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
// }


// function solution(inputArray) {
//     var prod = inputArray[0] * inputArray[1];
    
//     for (var i = 1; i<inputArray.length - 1;i++) {
//         prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
//     }
    
//     return prod
// }

