$(document).ready(function() {

// Setup
// Change canvas size
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

// Objects
function Ship(playerController, x, y) {
    this.playerControl = playerController;
    this.x = x;
    this.y = y;

    this.img = document.createElement("img/ourship.png");

    this.update = function() {

    };

    this.draw = function() {

    };

}

// Initialize
var player = Ship(true, 50, 50);

// Game Loop

});