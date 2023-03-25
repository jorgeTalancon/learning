var palindromeString = "abba";
var notPalindromeString = "kkjhasttrqw";

function solution(string) {
	let reverseString = string.split("").reverse().join('');
	return (reverseString == string ? true : false);
};

function solution2(string) {
	return string == string.split("").reverse().join('');
};

console.log(solution2(palindromeString));