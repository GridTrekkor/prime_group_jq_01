$(document).ready(function() {


var ApplesPrice = parseFloat($("#ApplesPrice").text());
var OrangesPrice = parseFloat($("#OrangesPrice").text());
var BananasPrice = parseFloat($("#BananasPrice").text());
var PearsPrice = parseFloat($("#PearsPrice").text());


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
function randomFloat() {
	return ((Math.random() * (.5 - .01) + .01).toFixed(2) * 1); 
}

var LowestPrice = 0.5;
var HighestPrice = 9.99;

function ChangePrice() {
	// 0 = price down, 1 = price up
	if (randomNumber(0, 1) == 1) {
		ApplesPrice += randomFloat();
		} else {
			ApplesPrice -= randomFloat();
			if (ApplesPrice < .50) {
				ApplesPrice = .50;
			}
		}
		$("#ApplesPrice").text(ApplesPrice);


		OrangesPrice -= randomFloat();
		BananasPrice -= randomFloat();
		PearsPrice -= randomFloat();
	// } else {
	// 	// Fruit.price += randomFloat();
	// 	// Fruit.price += randomFloat();
	// 	// Fruit.price += randomFloat();
	// 	// Fruit.price += randomFloat();
	// }
	//return Fruit.price;


}



setInterval(function(){	ChangePrice(); }, 500);








});