/*
----- Coding Tutorial by Patt Vira ----- 
Name: Interactive Floating Typography
Video Tutorial: https://youtu.be/-6v_AYyn49k

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


let fonts = [];
let letters = [];

function preload() {
  fonts[0] = loadFont("fonts/Roboto-Regular.ttf");
  fonts[1] = loadFont("fonts/Kanit-Black.ttf");
  fonts[2] = loadFont("fonts/BebasNeue-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background("#FF0F8D");
  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 1);
    }
  }
  
}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}