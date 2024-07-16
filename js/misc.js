/**MISCELLANEOUS FUNCTIONS**/
		
		//Gets HTML elements via ID
		function $(id){
			return document.getElementById(id);
		};
		
		/**MATH FUNCTIONS**/
		
		//Random function
		function random(min, max){
			if(!min && min != 0){
				return Math.random();
			} else {
				if(!max && max != 0){
					return Math.random() * min;
				} else {
					return min + Math.random() * (max - min);
				}
			}
		}
		
		//Returns maxima
		function max(a, b){
			if(a > b){
				return a;
			} else {
				return b;
			}
		}
		
		//Returns minima
		function min(a, b){
			if(a < b){
				return a;
			} else {
				return b;
			}
		}
		
		//Trig functions (all in degrees)
		function cos(x){
			x *= PI / 180;
			
			return Math.cos(x);
		}
		
		function sin(x){
			x *= PI / 180;
			
			return Math.sin(x);
		}
		
		function tan(x){
			x *= PI / 180;
		
			return Math.tan(x);
		}
		
		//Floors values
		function floor(value){
			return Math.floor(value);
		}
		
		//Ceils values
		function ceil(value){
			return Math.ceil(value);
		}
		
		//Rounds values
		function round(value){
			return Math.round(value);
		}
		
		//Maps value
		function map(value, min1, max1, min2, max2){
			let range1 = max1 - min1,
				range2 = max2 - min2;
				
			return min2 + (value - min1) / range1 * range2;
		}
		
		//Constrains value
		function constrain(value, min, max){
			if(value < min){
				return min;
			} else {
				if(value > max){
					return max;
				} else {
					return value;
				}
			}
		}
		
		//Absolute value
		function abs(value){
			if(value < 0){
				return -value;
			} else {
				return value;
			}
		}