//head movement
var headX = 250;
var headY = 120;
var headDirection = 1;

let dia = 0;
let growAmount = 1;
let grow = true;

//rightleg movement
var rightlegX =260;
var rightlegY=322;
var rightlegDirection = 4;

//leftleg movement
var leftlegX =260;
var leftlegY=322;
var leftlegDirection = 5;

//rightarm movement
var rightarmX = 262;
var rightarmY = 205;
var rightarmXSpeed;
var rightarmYSpeed;

//leftarm movement
var noseX =245
var noseY =125
var noseDirection = 3


// movement for text name
var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(44, 62, 80 );
      textSize(size);
  size+= sizeDirection;
    count++;
    if(count > 8)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Hi!", 70,70);

    // head
    fill(245, 203, 167 );
  circle(headX,headY,dia);
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
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
   
    // eyes
    strokeWeight(12);
    fill(135, 54, 0);
    point(210,110);
    point(280,110);
  
   // nose
    point(noseX,noseY);
   noseX+=noseDirection;
    if(noseX >= 418 || noseX <= 82)
    {
        noseDirection *= -1;
    }

    
    // mouth
    fill(123, 36, 28)
    ellipse(248, 165, 15, 10)

    // hair
    line(130,165,185,90);
    line(320,110,360,175);

  
    
    // decoration
    fill(123, 36, 28 );
    triangle(200,320,250,200,300,320)
    // right arm
    fill(245, 203, 167 );
   rect(rightarmX, rightarmY,50,20);
    
  rightarmXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    rightarmYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    // move the shape
   rightarmX += rightarmXSpeed;
   rightarmY += rightarmYSpeed;
    // check to see if the shape has gone out of bounds
    if(rightarmX > width)
    {
        rightarmX = 0;
    }
    if(rightarmX < 0)
    {
        rightarmX = width;
    }
    if(rightarmY > height)
    {
       rightarmY = 0;
    }
    if(rightarmY < 0)
    {
        rightarmY = height;
    }
  
    // left arm
    rect(186,205,50,20);
    // left leg
    rect(220,leftlegY,20,50);
   leftlegY += leftlegDirection;
    if(leftlegY <= 0 || leftlegY >= 550 )
    {
        leftlegDirection *= -1;
    }
    // right leg
  rect(260,rightlegY,20,50);
    rightlegY += rightlegDirection;
    if(rightlegY <= 0 || rightlegY >= 550 )
    {
        rightlegDirection *= -1;
    }
  
  
    fill(120);
    textSize(30);
    text("Shania Van Spyk",200,500 );


}