
/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

// your code goes here
function laugh(laughNumber) {
	let str = 'ha'
	for (let i = 0; i < laughNumber - 1; i ++ ) {
		str = str + 'ha'
	}
	return str
};

console.log(laugh(4))

