$(document).ready(function() {

// Setup
// Change canvas size
canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext("2d");
background = new Image();
background.src = "img/space.png";

function drawBackground() {
	context.save();
	var img = background;
	var pattern = context.createPattern(img, "no-repeat");
	context.rect(0,0,canvas.width,canvas.height);
	context.fillStyle = pattern;
	context.fill();
	context.restore();
}

// Objects
function Ship(playerController, x, y, angle) {
	var that = this;

    this.playerControl = playerController;
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.img = new Image();
	this.img.src = "img/ourship.gif";

    this.dx = 1;
    this.dy = 0;

    this.ddx = 0;
    this.ddy = 0;

    this.a = 0;

    this.update = function() {
    	// Player
    	// if (this.playerControl) {
    	// 	var differenceX = clickX - this.x;
    	// 	var differenceY = clickY - this.y;
    	// 	//console.log(differenceX);
    	// 	var angle = Math.atan(differenceY/differenceX);
    	// 	this.ddx = this.a*Math.cos(angle);
    	// 	this.ddy = this.a*Math.sin(angle);
    	// }
    	// // AI
    	// else{}

    	this.x += this.dx;
    	this.y += this.dy;
    	this.dx += this.ddx;
    	this.dy += this.ddy;
    	if (Math.abs(this.dx) > Math.abs(this.dy)) {
    		if (this.dx > 0) {this.angle = Math.PI/2}
    		else {this.angle = -(Math.PI/2)}
    	}
    	else {
    		if (this.dy > 0) {this.angle = Math.PI}
    		else {this.angle = 0}
    	}
    };

    this.draw = function() {
    	context.save();
    	context.translate(this.x, this.y);
    	context.rotate(this.angle);
    	context.scale(.5, .5);
    	context.drawImage(this.img, 0, 0);
    	context.restore();
    };

}

// Initialize
drawBackground();
shipX = 200;
shipY = 100;
player = new Ship(true, shipX, shipY, 0);
clickX = shipX;
clickY = shipY;
canvas.onclick = function () {
	clickX = (event.clientX).toFixed(2);
	clickY = (event.clientY).toFixed(2);
}

// Game Loop
updateGame = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	drawBackground();
	player.update();
	player.draw();
}

setInterval(updateGame, 30);

});