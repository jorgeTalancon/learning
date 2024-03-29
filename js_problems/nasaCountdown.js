/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

x = 60;

// while (x >= 0) {
//     console.log('T' + x + 'seconds');
//     if (x === 50) {
//         console.log('T' + x + ' Orbiter transfers from ground to internal power');
//     }
//     else if (x === 31) {
//         console.log('T' + x + ' Ground launch sequencer is go for auto sequence start');
//     }
//     else if (x === 16) {
//         console.log('T' + x + ' Activate launch pad sound suppression system');
//     }
//     else if (x === 10) {
//         console.log('T' + x + ' Activate main engine hydrogen burnoff system')
//     }
//     else if (x === 6) {
//         console.log('T' + x + ' Main engine start')
//     }
//     else if (x === 0) {
//         console.log('T' + x + ' Solid rocket booster ignition and liftoff!')
//     }
//     x-=1;
// }

// usando swicth
while (x >= 0) {
    switch(x) {
    case 50:
        console.log('T' + x + ' Orbiter transfers from ground to internal power');
        break;
    case 31:
         console.log('T' + x + ' Ground launch sequencer is go for auto sequence start');
         break;
     case 16:
        console.log('T' + x + ' Activate launch pad sound suppression system');
        break;
    case 10:
        console.log('T' + x + ' Activate main engine hydrogen burnoff system');
        break;
    case 6:
        console.log('T' + x + ' Main engine start');
        break;
    case 0:
        console.log('T' + x + ' Solid rocket booster ignition and liftoff!');
        break;
    default:
        console.log('T' + x + ' seconds');
    }
    x-=1;
}