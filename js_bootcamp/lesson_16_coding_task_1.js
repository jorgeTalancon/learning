/*
Has un programa que verifique si Jonh y Nick pasaron el examen. Siendo el minimo puntaje 51. Evalua todos los casos.
*/

var examJonn = 100;
var examNick = 10;
var lowerLimit = 51;

if (examNick > lowerLimit && examJonn > lowerLimit) {
	console.log ('pasaron el examen');
} else if (examNick < lowerLimit && examJonn < lowerLimit) {
	console.log ('no pasaron. Nick obtuvo ' + examNick + ' y John Obtuvo ' + examJonn);
} else if (examNick < lowerLimit) {
	console.log ('Nick no paso el examen. Obtuvo ' + examNick)
} else if (examJonn < lowerLimit) {
	console.log ('John no paso el examen. Obtuvo ' + examJonn)
} 
