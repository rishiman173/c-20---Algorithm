var r;
var i;

function setup() {
  createCanvas(800,400);
  r=createSprite(400, 200, 50, 50);
  r.shapeColor="green";
  i=createSprite(300,100,30,30);
  i.shapeColor= "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  i.x=World.mouseX;
  i.y=World.mouseY;

  if(i.x-r.x<i.width/2+r.width/2 && r.x-i.x<r.width/2+i.width/2 && i.y-r.y<i.height/2+r.height/2 && r.y-i.y<r.height/2+i.height/2) {
  i.shapeColor="blue";
  r.shapeColor="blue";
  }
  else {
    i.shapeColor="green";
    r.shapeColor="green";

  }
}