//when mouse moves to the left - rotate counterclockwise 
//when mouse moves to the right - rotate clockwise

let gap = 10;
let cirNum = 75;
let cirSize = 20;
let angle= 0;
let ptNum = 50;
let rectSize = 1020;
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(degrees);
  
}

function draw() {
  background("#376204");
  //customized shape for mouse
  noCursor();
  noStroke();
  fill("#1C3103")
  circle(mouseX,mouseY,10);
  
  //main graph
push();
translate(width/2,height/2);
rotate(angle);
angle = angle+map(mouseX,0,width,-0.1,0.1);
noFill();
stroke("white")
strokeWeight(1)
for (let i = 0; i < cirNum; i++){
  arc(0, 0, cirSize + gap * i,cirSize + gap * i,angle*i,360-angle/2);
}
  pop();
  
  
  //title
  push();
  translate(width/2,height-90);
  noStroke();
  textFont('Arial');
  textSize(30);
  textAlign(CENTER,CENTER);
  text('RADAR',0,0);
  noStroke();
  textSize(15)
  text('Final by:Shania Van Spyk',0,30);
  pop();
  
  //border
  push();
  translate(width/2,height/2);
  noFill();
  stroke('white');
  strokeWeight(2);
  rectMode(CENTER);
  rect(0,0,rectSize,rectSize);
  
   //background noise
  push();
  stroke("white");
  strokeWeight(1.5);
  for(let i=0; i<ptNum; i++){
    point(random(-rectSize/2,rectSize/2),random(-rectSize/2,rectSize/2));
  }
  pop();
}
