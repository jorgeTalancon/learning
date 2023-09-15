
var scoreOfJohn = 58;
var scoreOfNick = 60;

function grades(scoreOfJohn, scoreOfNick) {
	let minGrade = 51;
	if (scoreOfJohn < minGrade && scoreOfNick < minGrade) {
		return 'reprobaron';
	} else if (scoreOfJohn < minGrade) {
		return 'jon no paso. Obtuvo ' + scoreOfJohn;
	} else if (scoreOfNick < minGrade) {
		return 'nick no paso. Obtuvo ' + scoreOfNick;
	} else {
		return 'felicidades. Pasaron ambos.'
	}
}


console.log(grades(scoreOfJohn,scoreOfNick))