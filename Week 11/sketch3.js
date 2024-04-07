var characterX = 150;
var characterY = 150;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//enemy movement
var enemyX = 250;
var enemyY = 120;
var enemyDirection = 1;

let dia = 0;
let growAmount = 1;
let grow = true;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(550, 650);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 2);
    createCharacter(100,150);
}

function draw()
{
    background(255, 204, 255 );
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(5);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-30)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    // enemy
    fill(0, 51, 204);
  circle(enemyX,enemyY,dia);
  if (dia > 200) {
    grow = false
  }
  if (dia < 0) {
    grow = true
  }
  
  if (grow == true) {
    dia += growAmount
  } else {
    dia -= growAmount
  }
  
  console.log("diameter", dia)
  console.log("grow", grow)
    enemyX+=enemyDirection;
    if(enemyX >= 418 || enemyX <= 82)
    {
        enemyDirection *= -1;
    }

    // potential enemy
    fill(204, 255, 255 );
    // draw the shape
    rect(shapeX, shapeY,10,20);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 2);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0, 204, 51 );
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
      
    }

    // create the shape based on the mouse click
    fill(255, 51, 255);
    circle(mouseShapeX, mouseShapeY, 80);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(153, 255, 20);
    rect(characterX,characterY,25,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-30);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}