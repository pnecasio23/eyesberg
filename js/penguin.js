	

function program(){
	requestAnimationFrame(program);
			
	draw();
};
		
requestAnimationFrame(program);	
		
		/**LOADS FONTS**/
		
		WebFontConfig = {
			google : {
				families : [
					"VT323"
				] 
			},
		};
		(function(){
		    var wf = document.createElement("script");
		    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
		    wf.async = 'true';
		    document.head.appendChild(wf);
		})();
		
		/**BODY RETRIEVAL**/
		var body = document.getElementById("body");
		
		/**SETS CANVAS**/
	
		//Retrieves canvas with context
		var cvs = document.getElementById("canvas");
		var ctx = cvs.getContext("2d");
		
		//Configures canvas container
		document.getElementById("container").style.width = cvs.width + "px";
		document.getElementById("container").style.height = cvs.height + "px";
		
		//Centers canvas
		document.getElementById("container").style.left = (window.innerWidth - cvs.width) / 2 + "px";
		document.getElementById("container").style.top = (window.innerHeight - cvs.height) / 2 + "px";