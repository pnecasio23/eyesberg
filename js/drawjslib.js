/**GLOBALS**/
	
		//Canvas dimensions
		var WIDTH = $("canvas").width;
		var HEIGHT = $("canvas").height;
	
		//Math Constants
		var PI = Math.PI;
		
		/**TRANSFORMATION FUNCTIONS**/
		
		//Saves current state of the context
		function pushMatrix(){
			ctx.save();
		}
		
		//Restores previous context state
		function popMatrix(){
			ctx.restore();
		}
		
		//Translates canvas content; repositions origin
		function translate(x, y){
			ctx.translate(x, y);
		}
		
		//Rotates canvas content via current origin
		function rotate(theta){
			theta = theta / 180 * PI;
		
			ctx.rotate(theta);
		}
		
		//Scales with respect to current origin
		function scale(xF, yF){
			if(!yF && yF != 0){
				ctx.scale(xF, xF);
			} else {
				ctx.scale(xF, yF);
			}
		}
		
		/**COLOR-SETTING FUNCTIONS**/
	
		//Creates a background throughout entire canvas
		function background(r, g, b, a){
			pushMatrix();
				if(arguments.length == 1){
					ctx.fillStyle = "rgb(" + r + ", " + r + ", " + r + ")";
					$("canvas").style.backgroundColor = 
						"rgb(" + r + ", " + r + ", " + r + ")";
				} else if(arguments.length == 2){
					g /=  255;
					ctx.fillStyle = "rgba(" + r + ", " + r + ", " + r + ", " + g + ")";
					$("canvas").style.backgroundColor = 
						"rgb(" + r + ", " + r + ", " + r + ", " + g + ")";
				} else if(arguments.length == 3){
					ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
					$("canvas").style.backgroundColor = 
						"rgb(" + r + ", " + g + ", " + b + ")";
				} else if (arguments.length == 4){
					a /= 255;
					ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
					$("canvas").style.backgroundColor = 
						"rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
				}
				
				ctx.fillRect(0, 0, WIDTH, HEIGHT);
				this.bg = get(0, 0, WIDTH, HEIGHT);
				image(this.bg, 0, 0);
			popMatrix();
		}
	
		//Sets fillStyle of context (for coloring shapes)
		function fill(r, g, b, a){		
			if(arguments.length == 1){
				ctx.fillStyle = "rgb(" + r + ", " + r + ", " + r + ")";
			} else if(arguments.length == 2){
				g /= 255;
				ctx.fillStyle = "rgba(" + r + ", " + r + ", " + r + ", " + g + ")";
			} else if (arguments.length == 3){
				ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
			} else if (arguments.length == 4){
				a /= 255;
				ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
			}
		};
		
		//Sets strokeStyle of context (for outlining shapes)
		function stroke(r, g, b, a){
			if(arguments.length == 1){
				ctx.strokeStyle = "rgb(" + r + ", " + r + ", " + r + ")";
			} else if(arguments.length == 2){
				g /= 255;
				ctx.strokeStyle = "rgba(" + r + ", " + r + ", " + r + ", " + g + ")";
			} else if (arguments.length == 3){
				ctx.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")";
			} else if (arguments.length == 4){
				a /= 255;
				ctx.strokeStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
			}
		};
		
		//Sets weight of outline
		function strokeWeight(n){
			ctx.lineWidth = n;
		}
		
		//Option to remove stroke
		function noStroke(){
			ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		};
		
		//Option to remove color
		function noFill(){
			ctx.fillStyle = "rgba(0, 0, 0, 0)";
		};
		
		/**SHAPE-DRAWING FUNCTIONS**/
		
		//Draws a line
		function line(x1, y1, x2, y2){
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.closePath();
			
			ctx.stroke();
		}
		
		//Draws a rectangle or rounded rectangle
		function rect(x, y, w, h){
			if(arguments.length == 4){
				ctx.fillRect(x, y, w, h);
				ctx.strokeRect(x, y, w, h);
			}
		};
		
		//Draws ellipses
		function ellipse(x, y, w, h){
			ctx.beginPath();
			ctx.arc(x, y, max(w, h), 0, 2 * PI);
			
			ctx.stroke();
			ctx.fill();
		};
			
		//Draws a polygon, given any number of point coordinates
		function poly(){
			if(arguments.length % 2 == 0){
				ctx.beginPath();
				for(var i = 0; i < arguments.length; i += 2){
					if(i == 0){
						ctx.moveTo(arguments[i], arguments[i + 1]);
					} else {
						ctx.lineTo(arguments[i], arguments[i + 1]);
					}
				}
				ctx.closePath();
				
				ctx.stroke();
				ctx.fill();
			} else {
				console.log("Missing argument!");
			}
		}
		
		/**IMAGE FUNCTIONS**/
		
		//Gets state of canvas
		function get(x, y, w, h){
			if(w && h){
				return ctx.getImageData(x, y, w, h);
			} else {
				let pixel = ctx.getImageData(x, y, 1, 1);
				let data = pixel.data;
				
				return pixel.data;
			}
		}
		
		//Displays a saved state of the canvas
		function image(data, x, y){
			ctx.putImageData(data, x, y);
		}
		
		/**TEXT FUNCTIONS**/
		
		//Changes font settings
		function font(font, size){
			ctx.font = size + "px " + font;
		}
		
		//Changes text alignment
		function align(alignmentX, alignmentY){
			ctx.textAlign = alignmentX;
			if(alignmentY){
				ctx.textBaseline = alignmentY;
			}
		}
		
		//Displays text on canvas
		function text(message, x, y){
			ctx.fillText(message, x, y);
		}
		