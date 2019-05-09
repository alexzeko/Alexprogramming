function setup() {
createCanvas (500,500);
}

function draw() {
background("#99ffcc") ;
ellipse(mouseX,mouseY,100,100,100);
textSize(20);
textFont("Georgia");
textAlign(CENTER);
text("Alex is amazing",250,250);
    stroke(0, 255, 0);
}