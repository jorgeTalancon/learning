function solution(year) {
	if (year%100 != 0) {
		return Math.floor(year/100)+1;
	}	else {
		return year/100
	}
}

console.log(solution(2000))