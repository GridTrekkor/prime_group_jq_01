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

function ChangePrice(CurrentPrice) {
	// 0 = price down, 1 = price up

	if (randomNumber(0, 1) == 1) {
		CurrentPrice += randomFloat();
		if (CurrentPrice > HighestPrice) {
			CurrentPrice = HighestPrice;
		}
	} else {
		CurrentPrice -= randomFloat();
		if (CurrentPrice < LowestPrice) {
			CurrentPrice = LowestPrice;
		}
	}

	return CurrentPrice;

}

function DoPriceChange() {
	$("#ApplesPrice").text(ChangePrice(ApplesPrice).toFixed(2));
	$("#OrangesPrice").text(ChangePrice(OrangesPrice).toFixed(2));
	$("#BananasPrice").text(ChangePrice(BananasPrice).toFixed(2));
	$("#PearsPrice").text(ChangePrice(PearsPrice).toFixed(2));
}

// changes prices every half second
setInterval(function(){	DoPriceChange(); }, 500);

// disable buttons when application ends
setTimeout(function() { 
	$("Button").attr('disabled','true');
	var Cash = (parseFloat($("#Cash").text()) - 100);
	alert("Game over\n" + (Cash > 0 ? "You earned" : "You Lost") + ": $" + Cash.toFixed(2));
}, 3000);

var ApplesPurchased = 0;
var ApplesTotalPrice = 0;

var OrangesPurchased = 0;
var OrangesTotalPrice = 0;

var BananasPurchased = 0;
var BananasTotalPrice = 0;

var PearsPurchased = 0;
var PearsTotalPrice = 0;

$("Button").on("click", function () {
	var Fruit = $(this).parent().attr("class");
	
	// purchase
	if ($(this).attr("class") == "PurchaseButton") {
	
		// make purchase only if enough cash
		if (parseFloat($("#" + Fruit + "Price").text()) < $("#Cash").text()) {

			switch(Fruit) {
			    case "Apples":
			    	// increment number of specific fruit purchased
			        ApplesPurchased++;
			        // update purchased number
			        $("#ApplesPurchased").text(ApplesPurchased);
			        // add to total price of fruit purchased
			        ApplesTotalPrice += parseFloat($("#ApplesPrice").text());
			        // calculate average and update screen
			        $("#ApplesAverage").text((ApplesTotalPrice.toFixed(2) / ApplesPurchased).toFixed(2));
			        var NewCash = $("#Cash").text() - ($("#ApplesPrice").text())
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	    
			    case "Oranges":
			        OrangesPurchased++;
			        $("#OrangesPurchased").text(OrangesPurchased);
			        OrangesTotalPrice += parseFloat($("#OrangesPrice").text());
			        $("#OrangesAverage").text((OrangesTotalPrice.toFixed(2) / OrangesPurchased).toFixed(2));
			        var NewCash = $("#Cash").text() - ($("#OrangesPrice").text())
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	    
			    case "Bananas":
			        BananasPurchased++;
			        $("#BananasPurchased").text(BananasPurchased);
			        BananasTotalPrice += parseFloat($("#BananasPrice").text());
			        $("#BananasAverage").text((BananasTotalPrice.toFixed(2) / BananasPurchased).toFixed(2));
			       	var NewCash = $("#Cash").text() - ($("#BananasPrice").text())
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	   
			    case "Pears":
			        PearsPurchased++;
			        $("#PearsPurchased").text(PearsPurchased);
			        PearsTotalPrice += parseFloat($("#PearsPrice").text());
			        $("#PearsAverage").text((PearsTotalPrice.toFixed(2) / PearsPurchased).toFixed(2));
			        var NewCash = $("#Cash").text() - ($("#PearsPrice").text())
			        $("#Cash").text(NewCash.toFixed(2));
			        break;
			 }

		} else {
			alert("Not enough money for that purchase");
		}
	}

	// sell
	if ($(this).attr("class") == "SellButton") {
		// make purchase only if enough cash
		if (parseFloat($("#" + Fruit + "Purchased").text()) > 0) {

			switch(Fruit) {
			    case "Apples":
			    	// decrement number of specific fruit purchased
			        ApplesPurchased--;
			        // update purchased number
			        $("#ApplesPurchased").text(ApplesPurchased);
			        // update cash
			        var NewCash = parseFloat($("#Cash").text()) + parseFloat($("#ApplesPrice").text());
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	    
			    case "Oranges":
			        OrangesPurchased--;
			        $("#OrangesPurchased").text(OrangesPurchased);
			        var NewCash = parseFloat($("#Cash").text()) + parseFloat($("#OrangesPrice").text());
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	    
			    case "Bananas":
			        BananasPurchased--;
			        $("#BananasPurchased").text(BananasPurchased);
			        var NewCash = parseFloat($("#Cash").text()) + parseFloat($("#BananasPrice").text());
			        $("#Cash").text(NewCash.toFixed(2));
			        break;	   
			    case "Pears":
			        PearsPurchased--;
			        $("#PearsPurchased").text(PearsPurchased);
			        var NewCash = parseFloat($("#Cash").text()) + parseFloat($("#PearsPrice").text());
			        $("#Cash").text(NewCash.toFixed(2));
			        break;
			 }

		} else {
			alert("No " + Fruit + " to sell");
		}
	}

});

});