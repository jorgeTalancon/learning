// Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
// 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
// 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
// ...
// 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
// 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

x = 99;
while (x >= 1) {
	if (x != 1) {
		console.log(x + ' bottles of juice on the wall! ' 
					+ x + ' bottles of juice! Take one down, pass it around... ' 
					+ (x - 1) + ' bottles of juice on the wall!');
	}
	else {
		console.log(x + ' bottle of juice on the wall! ' 
					+ x + ' bottle of juice! Take one down, pass it around... ' 
					+ (x - 1) + ' bottles of juice on the wall!');
	}
	x-=1;
}

// while (x >= 0) {
// 	console.log(x);
// 	x-=1;
// }