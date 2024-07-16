var filter;
var animals = document.getElementById("animals");
var world = document.getElementById("world")
var forests = document.getElementById("forests");
var technology = document.getElementById("technology");

var sort = function(filter) {
		if (filter == 0) {
			animals.style.display = "block";
			world.style.display = "block";
			forests.style.display = "block";
			technology.getElementById("technology").style.display = "block";
		}
		
		if (filter == 1) {
			animals.style.display = "block";
			world.style.display = "none";
			forests.style.display = "none";
			technology.style.display = "none";
		}
		
		if (filter == 2) {
			animals.style.display = "none";
			world.style.display = "none";
			forests.style.display = "none";
			technology.style.display = "block";
		}
		
		if (filter == 3) {
			animals.style.display = "none";
			world.style.display = "block";
			forests.style.display = "none";
			technology.style.display = "none";
		}
		
		if (filter == 4) {
			animals.style.display = "none";
			world.style.display = "none";
			forests.style.display = "block";
			technology.style.display = "none";
		}
	}