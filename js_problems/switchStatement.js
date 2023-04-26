var option = 3;

switch(option) {
	case 1:
		console.log('You selected option 1');
		break;
	case 2:
		console.log('You selected option 2');
		break;
	case 3:
		console.log('You selected option 3');
		break;
	case 4:
		console.log('You selected option 4');
		break;
};

/* otra forma de usar el switch statement */

var month = 2;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");

/* aprovechando un switch sin breaks */ 
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);


