/**PRESETS**/
		
		var preset = (function(){
			//Drawing presets
			noStroke();
			
			//Text presets
			align("center", "middle");
		})();
	
		/**IO STREAM**/
		
		//Handles key inputs
		var keys = {};
		
		//Handles mouse inputs
		var mouse = {
			x : 0,
			y : 0,
			
			pressed : false,
		};
	
		/**GLOBALS**/
	
		//Current scene
		var scene = "logo";
		
		//Constants
		var RESOLUTION = 3;
		
		//Fonts
		var loadFont = "Cambria Math",
			gameFont = "VT323";
		
		//Sprites and palettes
		var penguin = {
			palette : {
				"-" : [0, 0, 0, 0],
				"0" : [20, 20, 20, 255],
				"1" : [50, 50, 50, 255],
				"2" : [80, 80, 80, 255],
				"3" : [200, 200, 200, 255],
				"4" : [255, 255, 255, 255],
				"5" : [255, 200, 50, 255],
			},
			
			sprites : [
				//Standing
				[
					"-------000----",
					"------02220---",
					"-----0111020--",
					"-----01451150-",
					"-----0144510--",
					"-----012230---",
					"-----012230---",
					"----01222430--",
					"----01222240--",
					"----012112440-",
					"----012212440-",
					"----012212440-",
					"---0122212440-",
					"---0122212430-",
					"---0122211430-",
					"---0122222430-",
					"--01222222430-",
					"--0122222230--",
					"-01222222430--",
					"0-011111330---",
					"---0000000----",
					"-----00-00----",
				],
				
				//Walk 1
				[
					"------000-----",
					"-----02220----",
					"----0111020---",
					"----01451150--",
					"----0144510---",
					"----012230----",
					"----012230----",
					"----0122340---",
					"----01222440--",
					"----012112440-",
					"----012212440-",
					"----012212440-",
					"---0122212440-",
					"---0122212430-",
					"---0122211430-",
					"---012222230--",
					"--0122222230--",
					"--0122222330--",
					"-0122221110---",
					"0-01111100----",
					"---00000------",
					"-----00-------",
				],
				
				//Walk 2
				[
					"-------000----",
					"------02220---",
					"-----0111020--",
					"-----01451150-",
					"-----0144510--",
					"-----012230---",
					"-----012230---",
					"----01222430--",
					"----01222240--",
					"----012112440-",
					"----012212440-",
					"----012212440-",
					"---0122212440-",
					"---0122212430-",
					"---0122211430-",
					"---0122222430-",
					"--01222222430-",
					"--0122222230--",
					"-01222222430--",
					"0-011111330---",
					"---0000000----",
					"-----00-00----",
				],
				
				//Walk 3
				[
					"-------000----",
					"------02220---",
					"-----0111020--",
					"-----01451150-",
					"-----0144510--",
					"-----012230---",
					"-----012230---",
					"----01222430--",
					"----01222240--",
					"----012112440-",
					"----012212440-",
					"---0122123440-",
					"---0122123440-",
					"---0121111430-",
					"---0122222430-",
					"---0122222430-",
					"0-01222222430-",
					"-00112222230--",
					"--0011222430-",
					"----0011330--",
					"------0000---",
					"--------00---",
				],
			],
		},
		
			ice = {
			palette : {
				"-" : [0, 0, 0, 0],
				"0" : [255, 255, 255, 255],
				"1" : [200, 220, 255, 255],
				"2" : [160, 200, 235, 255],
				"3" : [150, 180, 220, 255],
				"4" : [120, 150, 200, 255],
				"5" : [90, 120, 180, 255],
				"6" : [100, 50, 150, 255],
			},
			
			sprites :[
				//Top
				[
					"1000100100101101",
					"2010010000100122",
					"1111001001111122",
					"0111001001111112",
					"2110111110111111",
					"2101111111010011",
					"2201111110100122",
					"2201111111111122",
					"1220110111111223",
					"3112320111122233",
					"2313322112223332",
					"3133333113333232",
					"3154333341411334",
					"1334554445145554",
					"1333565222555524",
					"1131011344355544",
				],
				
				//Bottom
				[
					"1243143241234341",
					"1243123412543152",
					"2313443231423341",
					"2532352354235243",
					"2534253524342535",
					"5432543523235234",
					"5432542532543255",
					"5234523425354532",
					"2535235234235243",
					"2535234523543545",
					"5434233532543254",
					"3525345344535252",
					"4352345243523423",
					"3542352354234554",
					"3542453454235523",
					"2535423525345455",
				],
			],
		},
		
			rock = {
			palette : {
				"-" : [0, 0, 0, 0],
				"0" : [200, 220, 255, 255],
				"1" : [180, 200, 220, 255],
				"2" : [120, 150, 200, 255],
				"3" : [80, 120, 180, 255],
				"4" : [50, 100, 150, 255],
			},
			
			sprites : [
				[
					"-001-00100",
					"-100310010",
					"-444411001",
					"-414211004",
					"-011222244",
					"1102411244",
					"-12242224-",
					"--22422---",
				],
				[
					"---0022---",
					"--010222--",
					"-01102222-",
					"0111022222",
					"1110241222",
					"1102224122",
					"2222222412",
					"2222222243",
					"3222222243",
					"-32222223-",
				],
				[
					"-0000300000--",
					"-11104111000-",
					"4200441100110",
					"4224441001110",
					"4421024011110",
					"4411022411114",
					"4411022344444",
					"-400422444444",
					"-44224444444-",
					"---2244444---",
				],
			],
		};
		
		//8-bit sprite renderer
		var Bit8 = function(x, y, sprite, palette, resolution){
			background(0, 0);
			noStroke();
			
			for(var i = 0; i < sprite.length; i++){
				for(var j = 0; j < sprite[i].length; j++){
					fill(
						palette[sprite[i].charAt(j)][0],
						palette[sprite[i].charAt(j)][1],
						palette[sprite[i].charAt(j)][2],
						palette[sprite[i].charAt(j)][3]);
						
					rect(x + j * resolution, y + i * resolution,
						resolution, resolution);
				}
			}
		},
		
		//Rotated sprite
			Bit8Rot = function(x, y, sprite, palette, resolution){
			background(0, 0);
			noStroke();
			
			for(var i = 0; i < sprite.length; i++){
				for(var j = 0; j < sprite[i].length; j++){
					fill(
						palette[sprite[i].charAt(j)][0],
						palette[sprite[i].charAt(j)][1],
						palette[sprite[i].charAt(j)][2],
						palette[sprite[i].charAt(j)][3]);
						
					rect(x + (sprite.length - i) * resolution, y + j * resolution,
						resolution, resolution);
				}
			}
		};
		
		/**IMAGES**/
		
		var images = (function(){
			images = {
				//Total images to load
				total : null,
				
				//Index (current sprite) count (number of images thus rendered)
				index : 0, count : 0,
				
				//Whether all are loaded
				loaded : false,
				
				//Stores sprites
				sprites : [
					{
						name : "penguin",
						
						x : 0, y : 0,
						w : RESOLUTION * 13, h : RESOLUTION * 22,
						
						r : penguin.sprites.length, c : 0, n : 0, a : 1,
						
						load : function(n){
							Bit8(0, 0, penguin.sprites[n], penguin.palette, RESOLUTION);
						},
					},
					{
						name : "penguin-slide",
						
						x : 0, y : 0,
						w : RESOLUTION * 22, h : RESOLUTION * 13,
						
						r : 1, c : 0, n : 0, a : 0,
						
						load : function(n){
							Bit8Rot(0, 0, penguin.sprites[0], penguin.palette, RESOLUTION);
						},
					},
					{
						name : "ice",
						
						x : 0, y : 0,
						w : RESOLUTION * 16, h : RESOLUTION * 16,
						
						r : ice.sprites.length, c : 0, n : 0, a : 1,
						
						load : function(n){
							Bit8(0, 0, ice.sprites[n], ice.palette, RESOLUTION);
						},
					},
					{
						name : "rock0",
						
						x : 0, y : 0,
						w : RESOLUTION * 10, h : RESOLUTION * 8,
						
						r : 1, c : 0, n : 0, a : 0,
						
						load : function(n){
							Bit8(0, 0, rock.sprites[0], rock.palette, RESOLUTION);
						},
					},
					{
						name : "rock1",
						
						x : 0, y : 0,
						w : RESOLUTION * 10, h : RESOLUTION * 10,
						
						r : 1, c : 0, n : 0, a : 0,
						
						load : function(n){
							Bit8(0, 0, rock.sprites[1], rock.palette, RESOLUTION);
						},
					},
					{
						name : "rock2",
						
						x : 0, y : 0,
						w : RESOLUTION * 13, h : RESOLUTION * 10,
						
						r : 1, c : 0, n : 0, a : 0,
						
						load : function(n){
							Bit8(0, 0, rock.sprites[2], rock.palette, RESOLUTION);
						},
					},
				],
			};
			
			//Loads all images
			images.load = function(){
				//Renders images
				if(this.index < this.sprites.length){
					background(0, 0);
					noStroke(); noFill();
					
					//If sprite has only one frame
					if(this.sprites[this.index].r <= 1){
						//Renders then stores image
						this.sprites[this.index].load();
						
						images[this.sprites[this.index].name] = get(
							this.sprites[this.index].x, this.sprites[this.index].y,
							this.sprites[this.index].w, this.sprites[this.index].h);
						
						//Increments index (current image)
						this.index++;
					} 
					//If sprite has multiple frames
					else {
						//Keep rendering for the amount of times specified
						if(this.sprites[this.index].c < this.sprites[this.index].r){
							//Renders then stores image
							this.sprites[this.index].load(this.sprites[this.index].n);
							
							images[this.sprites[this.index].name + this.sprites[this.index].c] = get(
								this.sprites[this.index].x, this.sprites[this.index].y,
								this.sprites[this.index].w, this.sprites[this.index].h);
							
							//Increments sprite count (current frame)
							this.sprites[this.index].c++;
							
							//Increments input value
							this.sprites[this.index].n += this.sprites[this.index].a;
						} else {
							//Increments index (current image)
							this.index++;
							this.count--;
						}
					}
					
					//Once all images are rendered
					if((++this.count) / this.total >= 1){
						this.loaded = true;
					}
				}
				
				//Displays loading portion
				background(255, 255);
				
				fill(255, 200, 40);
				rect(0, 0, WIDTH * this.count / this.total, HEIGHT);
				
				//How many ellipses to display
				var e = floor(this.count / 5) % 4;
				
				//Displays text conveying percentages
				fill(0); font(loadFont, 70); align("center", "middle");
				text("LOADING" + (e === 0 ? "" : (e === 1 ? "." : (e === 2 ? ".." : "..."))),
					WIDTH / 2, HEIGHT / 2 - 20);
				fill(0); font(loadFont, 40); align("center", "middle");
				text(round(this.count / this.total * 1000) / 10 + "%",
					WIDTH / 2, HEIGHT / 2 + 40);
			};
			
			images.total = (function(){
				for(var i = 0, total = 0; i < images.sprites.length; i++){
					total += images.sprites[i].r;
				}
				
				return total;
			})();
			
			return images;
		})();
		
		/**UI OBJECT**/
		
		var UI = (function(){
			UI = {};
		
			UI.Button = function(x, y, w, h){
				this.x = x;
				this.y = y;
				
				this.w = w;
				this.h = h;
			};
			
			UI.Button.prototype = {
				display : function(mes, s){
					var Min = min(this.w, this.h);
					
					fill(240);
					rect(this.x, this.y, this.w, this.h / 2);
					fill(210);
					rect(this.x, this.y + this.h / 2,
						this.w, this.h / 2);
					
					fill(240);
					poly(this.x, this.y, this.x + Min, this.y,
						this.x, this.y + Min);
					fill(210);
					poly(this.x + this.w, this.y + this.h,
						this.x + this.w, this.y + this.h - Min,
						this.x + this.w - Min, this.y + this.h);
				
					fill(225);
					rect(this.x + 5, this.y + 5,
						this.w - 10, this.h - 10);
					
					fill(0);
					font(gameFont, s);
					align("center", "middle");
					text(mes,
						this.x + this.w / 2,
						this.y + this.h / 2);
						
					if(this.hover()){
						fill(0, 40);
						rect(this.x, this.y, this.w, this.h);
						
						if(this.press()){
							fill(0, 40);
							rect(this.x, this.y, this.w, this.h);
							
							return true;
						}
					}
					
					return false;
				},
				
				hover : function(){
					if(mouse.x > this.x && mouse.x < this.x + this.w &&
						mouse.y > this.y && mouse.y < this.y + this.h){
						return true;
					}
					
					return false;
				},
				
				press : function(){
					if(this.hover() && mouse.pressed){
						return true;
					}
					
					return false;
				},
			}
			
			UI.Message = function(message){
				//Location
				this.x = WIDTH + 150;
				this.y = HEIGHT / 4;
				
				//Message
				this.message = message;
				
				//Time
				this.time = 0;
			};
			
			UI.Message.prototype = {
				display : function(){
					if(this.time % 40 > 20){
						fill(0);
						font(gameFont, 150);
						align("right", "middle");
						text(this.message, this.x, this.y);
						align("center", "middle");
					}
				},
				
				update : function(){
					this.x -= player.vel.x;
					
					this.time++;
				},
			};
			
			//Back to menu button
			UI.return = new UI.Button(WIDTH / 2 - 180, 290, 360, 40);
		
			return UI;
		})();
		
		/**GAME OBJECTS**/
		
		//World Object
		var world = (function(){
			world = {
				//Location
				place : 0,
			
				//Lowest point possible
				floor : HEIGHT - 96,
				
				//Messages
				messages : [],
				
				//Time
				time : 1,
				
				//Next time to put obstacle
				next : floor(random(100)),
				
				//Retry button
				retry : new UI.Button(WIDTH / 2 - 180, 240, 360, 40),
			};
			
			world.ground = function(){
				let i = -48; do {
					i += 48;
				
					image(images.ice1, i + floor(this.place % 48), HEIGHT - 48);
					image(images.ice0, i + floor(this.place % 48), HEIGHT - 96);
				} while(i < WIDTH);
			};
			
			world.background = function(){
				for(var i = 0; i < 100; i++){
					fill(255 - i / 5);
					rect(0, 0, WIDTH, HEIGHT / 2 - i / 100 * HEIGHT / 2);
				}
				
				for(var i = 0; i < this.messages.length; i++){
					this.messages[i].display();
				}
			};
			
			world.reset = function(){
				this.place = 0;
				this.time = 0;
				
				this.next = floor(random(100));
				
				this.messages = [];
			};
			
			world.over = function(){
				fill(0);
				font(gameFont, 150);
				text("GAME OVER", WIDTH / 2, HEIGHT / 2 - 100);
				
				player.high = max(player.score, player.high);
				
				fill(0);
				font(gameFont, 30);
				align("center", "middle");
				
				text("HIGHSCORE : " + round(player.high),
					WIDTH / 2 + 150, 210);
				text("SCORE : " + round(player.score),
					WIDTH / 2 - 150, 210);
				
				if(UI.return.display("MENU", 40)){
					scene = "menu";
				}
				
				if(this.retry.display("RETRY", 40)){
					//Resets world
					obstacles = [];
					particles = [];
					this.reset();
					player.reset();
				}
			};
			
			return world;
		})();
		
		//Player Object
		var player = (function(){
			player = {
				//Location
				x : WIDTH / 5,
				y : HEIGHT - 96,
				
				//Dimensions
				w : 0,
				h : 0,
				
				//Velocity
				vel : {
					x : 4,
					y : 0,
				},
				
				//Diferent states
				jump : false,
				slid : false,
				
				//Game over
				stop : false,
				
				//Frame to use
				frame : 0,
				
				//Score
				score : 0,
				high : 0,
			};
			
			//Displays player
			player.display = function(){
				let frame = "penguin" + (floor(this.frame / 5) % 4);
				if(this.jump){
					frame = "penguin0";
				} else if(this.slid){
					frame = "penguin-slide";
				}
				
				//Displays penguin
				image(images[frame], this.x,
					this.y - images[frame].height);
					
				//Displays score counter
				if(!this.stop && scene === "play"){
					fill(0);
					font(gameFont, 30);
					align("right", "middle");
					text(round(this.score), WIDTH - 20, 30);
					align("center", "middle");
				}
			};
			
			//Updates player
			player.update = function(){
				//User controls
				this.control();
				
				//Updates position
				this.y += this.vel.y;
				this.score += this.vel.x / 40;
				this.vel.x += 0.005 / this.vel.x;
				
				let frame = "penguin" + (floor(this.frame / 5) % 4);
				if(this.slid){
					frame = "penguin-slide";
				}
				
				//Updates dimensions
				this.w = images[frame].width;
				this.h = images[frame].height;
				
				//Acceleration
				this.vel.y += 0.4;
				
				//Makes sure player doesnt fall forever
				if(this.y > world.floor){
					this.y = world.floor;
					
					this.vel.y = 0;
					
					this.jump = false;
				}
				
				this.frame++;
			};
			
			//User control of player
			player.control = function(){
				//User control
				if(keys.ARROWUP || keys.W){
					if(!this.jump && !this.slid){
						this.vel.y = -8;
					
						this.jump = true;
					}
				}
					
				if(keys.ARROWDOWN || keys.S){
					if(!this.slid){
						this.vel.y = 8;
						
						this.slid = true;
					}
				} else {
					this.slid = false;
				}
			};
			
			//Resets player
			player.reset = function(){
				this.x = WIDTH / 5;
				this.y = HEIGHT - 96;
				
				this.vel.x = 4;
				this.vel.y = 0;
				
				this.slid = false;
				this.jump = false;
				
				this.stop = false;
				this.score = 0;
			};
			
			return player;
		})();
		
		/**ASSET HOLDERS**/
		
		var obstacles = [];
		
		var particles = [];
		
		/**GAME CONSTRUCTORS**/
		
		var Obstacle = (function(){
			Obstacle = function(type, frame){
				let y = 0, r = random();
				if(r < 0.8){
					y = world.floor;
				} else if(r < 0.94){
					y = world.floor - 35;
				} else {
					y = world.floor - 70;
				}
			
				//Location
				this.x = WIDTH;
				this.y = world.floor - round(random(1.8)) * 48;
				
				//Type
				this.type = type;
				
				//Dimensions
				this.w = 0;
				this.h = 0;
				
				//Which frame to display
				this.frame = frame;
			};
			
			Obstacle.prototype.display = function(){
				//Displays obstacle
				image(images[this.type + this.frame],
					this.x, this.y - images[this.type + this.frame].height);
			};
			
			Obstacle.prototype.update = function(){
				//Updates location
				this.x -= player.vel.x;
				
				//Updates dimensions
				this.w = images[this.type + this.frame].width;
				this.h = images[this.type + this.frame].height;
				
				if(this.collide()){
					player.stop = true;
				}
			};
			
			Obstacle.prototype.collide = function(){
				//Does collisions
				if(player.x > this.x - player.w && 
					player.x < this.x + this.w - RESOLUTION * 4 &&
					player.y > this.y - this.h + RESOLUTION &&
					player.y < this.y + player.h - RESOLUTION * 2){
					return true;
				}
				
				return false;
			};
			
			return Obstacle;
		})();
		
		var Particle = (function(){
			Particle = function(){
				//Location
				this.x = player.x + player.w / 2;
				this.y = player.y;
				
				//Size
				this.s = random(5) + 3;
				
				//Color
				this.c = random(55) + 200;
				
				//Velocity
				this.vx = random(-player.vel.x * 1.5, -1);
				this.vy = random(-5);
				
				//Angle
				this.a = this.vx === 0 ? 0 : 
				 	Math.atan(this.vy / this.vx);
				
				//Life
				this.life = 150;
			};
			
			//Displays particle
			Particle.prototype.display = function(){
				pushMatrix();
					translate(this.x, this.y);
					rotate(this.a);
					
					fill(this.c * 0.6, this.c * 0.8, this.c, this.life);
					rect(-this.s / 2, -this.s / 2, this.s, this.s);
				popMatrix();
			};
			
			//Updates particle
			Particle.prototype.update = function(){
				//Increments location
				this.x += this.vx;
				this.y += this.vy;
				
				this.vx -= (this.vx + player.vel.x) / 40;
				this.vy += 0.25;
				
				if(this.y > world.floor){
					this.y = world.floor;
					this.vy *= -0.6;
				}
				
				//Sets angle
				this.a = this.vx === 0 ? 0 : 
					Math.atan(this.vy / this.vx) / PI * 180;
				
				//Updates life
				this.life--;
			};
			
			return Particle;
		})();
		
		/**GAME FUNCTIONS**/
		
		function displayWorld(){
			world.background();
			world.ground();
			
			player.display();
			
			for(var i = 0; i < obstacles.length; i++){
				obstacles[i].display();
			}
			
			for(var i = 0; i < particles.length; i++){
				particles[i].display();
			}
		};
		
		function updateWorld(){
			world.place -= player.vel.x;
			
			player.update();
			
			if(world.time % 100 === world.next){
				obstacles.push(new Obstacle("rock", floor(random(3))));
				
				world.next = (world.next + floor(random(50)) + 50) % 100;
			}
			
			if(!player.jump){
				particles.push(new Particle());
			}
			for(var i = 0; i < particles.length; i++){
				particles[i].update();
				if(particles[i].life < 0){
					particles.splice(i, 1);
				}
			}
			
			for(var i = 0; i < obstacles.length; i++){
				obstacles[i].update();
				if(obstacles[i].x < -100){
					obstacles.splice(i, 1);
				}
			}
			
			if(floor(player.score / 100) !== floor((player.score - player.vel.x / 40) / 100)){
				world.messages.push(new UI.Message(floor(player.score / 100) * 100));
			}
				
			for(var i = 0; i < world.messages.length; i++){
				world.messages[i].display();
				world.messages[i].update();
				
				if(world.messages[i].x < -WIDTH){
					world.messages.splice(i, 1);
				}
			}
			
			world.time++;
		};
		
		/**SCENES**/
		
		var logo = (function(){
			logo = {
				blob : [], z : 103, amount : 150,
				font : "Cambria Math", 
			};
			
			logo.set = function(){
				for(var i = 0; i < this.amount; i++){
					this.blob.push({
						x : random(-5, 5),
						y : random(-5, 5), 
						z : random(-100, 100), 
					});
				}
			};
			
			logo.run = function(){
				background(0);
			
				for(var i = 0; i < this.blob.length; i++){
					var dx = this.blob[i].x / (this.blob[i].z - this.z),
						dy = this.blob[i].y / (this.blob[i].z - this.z),
						dz = constrain(this.blob[i].z - this.z, 0,
							Math.POSITIVE_INFINITY);
						
					dx = map(dx, -1, 1, 0, WIDTH);
					dy = map(dy, -1, 1, 0, HEIGHT);
					
					var s = dz * 15;
					
					fill(255, 200, 55);
					ellipse(dx, dy, s, s);
				}
				
				fill(0, 300 - this.z * 8);
				font(this.font, 50);
				text("Arrowhead Co.", WIDTH / 2, HEIGHT / 2);
				
				this.z -= 0.4;
				
				if(300 - this.z * 8 >= 300){
					scene = "menu";
				}
			};
			
			logo.set();
			
			return logo;
		})();
		
		var menu = (function(){
			menu = {
				buttons : {
					play : new UI.Button(WIDTH / 2 - 180, 190, 360, 40),
					help : new UI.Button(WIDTH / 2 - 180, 240, 360, 40),
					credits : new UI.Button(WIDTH / 2 - 180, 290, 360, 40),
				},
			};
			
			menu.run = function(){
				//Resets world
				obstacles = [];
				particles = [];
				world.reset();
				player.reset();
				
				//Displays world
				displayWorld();
				
				//Buttons
				let buttons = Object.keys(this.buttons);
				for(var i = 0; i < buttons.length; i++){
					if(this.buttons[buttons[i]].display(
						buttons[i].toUpperCase(), 40)){
						scene = buttons[i];
					}
				}
				
				//Title
				fill(0);
				font(gameFont, 150);
				text("ICEBERGZ", WIDTH / 2, HEIGHT / 2 - 100);
				
				//Scores
				fill(0);
				font(gameFont, 30);
				align("center", "middle");
				
				text("HIGHSCORE : " + round(player.high),
					WIDTH / 2 + 150, 425);
				text("SCORE : " + round(player.score),
					WIDTH / 2 - 150, 425);
			};
			
			return menu;
		})();
		
		var help = (function(){
			help = {
				content : [
					"W or UP arrow key to jump.",
					"S or DOWN arrow key to slide.",
					"Avoid hitting anything.",
				],
			};
			
			help.run = function(){
				//Displays world
				displayWorld();
				
				//Title
				fill(0);
				font(gameFont, 150);
				text("ICEBERGZ", WIDTH / 2, HEIGHT / 2 - 100);
				
				//Content
				font(gameFont, 30);
				for(var i = 0; i < this.content.length; i++){
					text(this.content[i], WIDTH / 2, 205 + i * 30);
				}
				
				//Back home button
				if(UI.return.display("MENU", 40)){
					scene = "menu";
				}
			};
			
			return help;
		})();
		
		var game = (function(){
			game = {
			
			};
			
			game.run = function(){
				displayWorld();
				
				if(!player.stop){
					updateWorld();
				} else {
					world.over();
				}
			};
			
			return game;
		})();
		
		var cred = (function(){
			cred = {
				content : [
					"This game is by Arrowhead Co.",
					"Created as part of a requirement for CS2.",
					"<Enjoy!>",
				],
			};
			
			cred.run = function(){
				//Displays world
				displayWorld();
				
				//Title
				fill(0);
				font(gameFont, 150);
				text("ICEBERGZ", WIDTH / 2, HEIGHT / 2 - 100);
				
				//Content
				font(gameFont, 30);
				for(var i = 0; i < this.content.length; i++){
					text(this.content[i], WIDTH / 2, 205 + i * 30);
				}
				
				//Back home button
				if(UI.return.display("MENU", 40)){
					scene = "menu";
				}
			};
			
			return cred;
		})();
		
		/**DRAW FUNCTION**/
		
		function draw(){
			background(255);
			
			//Displays scenes
			if(!images.loaded){
				images.load();
			} else {
				switch(scene){
					case "logo":
						logo.run();
					break;
					case "menu":
						menu.run();
					break;
					case "help":
						help.run();
					break;
					case "play":
						game.run();
					break;
					case "credits":
						cred.run();
					break;
					default:
					break;
				}
			}
			
			//Resets mouse
			mouse.pressed = false;
		};
		
		/**INPUT ? OUTPUT FUNCTIONS**/
		
		function keyPressed(key){
			let keyCode = key.key.toUpperCase();
			
			keys[keyCode] = true;
		}
		
		function keyReleased(key){
			let keyCode = key.key.toUpperCase();
			
			keys[keyCode] = false;
		}
		
		function defMouse(m){
			mouse.x = m.layerX;
			mouse.y = m.layerY;
		}
		
		function mousePressed(m){
			mouse.pressed = true;
		}
		
		body.addEventListener("keydown", keyPressed);
		body.addEventListener("keyup", keyReleased);
		
		cvs.addEventListener("mousemove", defMouse);
		cvs.addEventListener("mousedown", mousePressed);