	var totalBill = 0.00;
	var audio = new Audio();
	audio.src = "../audio/buy.mp3";
	
	var addToCart = function(price) {
		totalBill += price;
		
		document.getElementById("addedprice").innerHTML = "+ " + price + " php";
		
		/*
		document.getElementById("addedprice").style.display = "block";
		document.getElementById("addedprice").style.transition = "transform .2s";
		document.getElementById("addedprice").style.transition = "none"; */
		
		document.getElementById("total").innerHTML = totalBill; 
	}
	
	var buy = function() {
		totalBill = 0.00;
		audio.play();
		
		document.getElementById("total").innerHTML = totalBill;
    }