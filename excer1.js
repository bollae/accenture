var odds = [];
var sum;
var avg;
function avarage(array) {
		for (var i = 0 ; i < array.length ; i++) {
		if (array[i] % 2 != 0) {
			odds.push(array[i]);
        console.log(odds)}
	}
  sum = odds.reduce(function(a,b) {
    return a + b;});
  avg = sum / odds.length
	return avg;}

avarage([-3, -2, -1, 0, 1, 2, 3, 5, 7]);
console.log(sum);
console.log(avg);
