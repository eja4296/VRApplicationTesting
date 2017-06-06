// The myKeys object will be in the global scope - it makes this script 
// really easy to reuse between projects

"use strict";

var app = app || {};

// start IIFE
app.myKeys = function(){
    var myKeys = {};

myKeys.KEYBOARD = Object.freeze({
	"KEY_LEFT": 37, 
	"KEY_UP": 38, 
	"KEY_RIGHT": 39, 
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_SHIFT": 16,
    "KEY_w": 87,
    "KEY_a": 65,
    "KEY_s": 83,
    "KEY_d": 68
});

// myKeys.keydown array to keep track of which keys are down
// this is called a "key daemon"
// main.js will "poll" this array every frame
// this works because JS has "sparse arrays" - not every language does
myKeys.keydown = [];


// event listeners
window.addEventListener("keydown",function(e){
	myKeys.keydown[e.keyCode] = true;
    var char = String.fromCharCode(e.keyCode);
    
    
});
	
window.addEventListener("keyup",function(e){

	myKeys.keydown[e.keyCode] = false;
	
    var char = String.fromCharCode(e.keyCode);
	// pausing and resuming
	if (char == "p" || char == "P"){
		if (app.main.paused){
			app.main.resumeGame();
		} else {
			app.main.pauseGame();
		}
	}
    
    if (char == "r" || char == "R"){
		app.main.toggleDebug();
	}

});

    return myKeys;
}()// end IIFE

