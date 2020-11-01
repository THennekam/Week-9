function addition (number1, number2) {
	return number1 + number2;
}
function subtraction (number1, number2) {
	return number1 - number2;
}
function muliplication (number1, number2) {
	return number1 * number2;
}
function division (number1, number2) {
	return number1 / number2;
}
function increment (number) {
	return number + 1;
}
function decrement (number) {
	return number - 1;
}

document.write ('10 + 12 = '+ addition(10, 12) + '<br/>');
document.write ('58 - 34 = '+ subtraction(58, 34) + '<br/>');
document.write ('6 x 7 = '+ muliplication(6, 7) + '<br/>');
document.write ('144 : 12 = '+ division(144, 12) + '<br/>');
document.write ('12 + 1 = '+ increment(12, 1) + '<br/>');
document.write ('34 - 1 = '+ decrement(34, 1) + '<br/>');