function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(133, 146, 158 );
    textSize(32)
    text("Hi!", 70,70);

    // head
    fill(245, 203, 167 );
    circle(250,120,140);
   
    // eyes
    strokeWeight(12);
    fill(135, 54, 0);
    point(210,110);
    point(280,110);
  
   // nose
    point(245,125);

    
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
    rect(262,205,50,20);
    // left arm
    rect(186,205,50,20);
    // left leg
    rect(220,322,20,50);
    // right leg
    rect(260,322,20,50);
    
    fill(46, 64, 83);
    textSize(25);
    text("Shania Van Spyk",270,500 );


}