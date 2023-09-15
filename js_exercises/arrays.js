// metodo array literal (recomendado. mas rapido y facil)
var arr = ['jong', 
			'bob', 
			'mary', 
			[1,2,3],
			function(name) {
				return 'helo ' + name; 
			}];

console.log(arr);
console.log(arr[1]);
console.log(arr[3][0]);
console.log(arr[4](arr[0]));

// array constructor
var arr = new Array('john', 1, false);
console.log(arr);

