/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10.13;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE
// Hacer una condicional por cada valor (width, lenght, sleeve) y arrojar medida como resultado
// si las medidas no coinciden arrojar NA, si coinciden arrojar medidas

function checkWidth(shirtWidth) {
    if (shirtWidth < 20) {
         return 'S';
    }
    else if (shirtWidth >=20 && shirtWidth < 22) {
         return 'M'
    }
    else if (shirtWidth >=22 && shirtWidth < 24) {
         return 'L'
    }
    else if (shirtWidth >=24 && shirtWidth < 26) {
         return 'XL'
    }
    else if (shirtWidth >=26 && shirtWidth < 28) {
        return '2XL'
    }
    else {
        return '3XL'
    }
};


function checkLength(shirtLength) {
    if (shirtLength < 29) {
         return 'S';
    }
    else if (shirtLength >=29 && shirtLength < 30) {
         return 'M'
    }
    else if (shirtLength >=30 && shirtLength < 31) {
         return 'L'
    }
    else if (shirtLength >=31 && shirtLength < 33) {
         return 'XL'
    }
    else if (shirtLength >=33 && shirtLength < 34) {
        return '2XL'
    }
    else {
        return '3XL'
    }
};

function checkSleeve(shirtSleeve) {
    if (shirtSleeve < 8.38) {
         return 'S';
    }
    else if (shirtSleeve >=8.38 && shirtSleeve < 8.63) {
         return 'M'
    }
    else if (shirtSleeve >=8.63 && shirtSleeve < 8.88) {
         return 'L'
    }
    else if (shirtSleeve >=8.88 && shirtSleeve < 9.63) {
         return 'XL'
    }
    else if (shirtSleeve >=9.63 && shirtSleeve < 10.13) {
        return '2XL'
    }
    else {
        return '3XL'
    }
};

function checkShirt(shirtWidth, shirtLength, shirtSleeve) {
    if (checkWidth(shirtWidth) === checkLength(shirtLength) && checkLength(shirtLength) === checkSleeve(shirtSleeve)) {
        return checkWidth(shirtWidth);

    } else {
        return ('Sorry. We do not have your shirt size.')
    }
}


console.log(checkShirt(shirtWidth,shirtLength,shirtSleeve));