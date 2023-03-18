/*
 * Programming Quiz: String Manipulation Quiz 1
 *
 * Using string methods, convert "audacity" to "Udacity"
 */

var text = "audacity";

var udacityizer = function(string) {
  string = string.replace(string, "Udacity")
  // Right now, the variable string === "audacity"
  // Manipulate string to make it equal to "Udacity"
  // Your code goes here!

  return string;
};

/* Metodo 2 */ 
var udacityizer2 = function(string) {
  string = "U" + string.slice(2);

  return string
};

// Did your code work? The line below will tell you!
console.log(udacityizer2(text));