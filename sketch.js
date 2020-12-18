hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGRRES);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function map() {
  scAngle = map(sc, 0, 60, 0, 360);
}

function line() {
  // drawing seconds hand
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,100,0,0);
  pop();
}