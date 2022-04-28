var wallet = 0;
var sunflowers = [];


function setup(){
  
  // Set the stage - the canvas.
  createCanvas(1350,600);

  sunflowerImage = loadImage("Pictures/sunflower.jpg")
  
  newthing = new SunFlower(10,10,100,100);
}

function draw(){

  // The background colour.
  background(0);

  textSize(20);
  text(wallet, 200, 100);

  for(let i = 0; i < (sunflowers.length); i++) {
    sunflowers[i].display();
    sunflowers[i].spawn();
  }

  // Draws the sprites after all the logic has taken place.
  drawSprites();
}

class SunFlower {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.x = mouseX;
    this.y = mouseY;
  }

  display(){
    fill(255);
    image(sunflowerImage, this.x, this.y);
  }

  spawn(){
    wallet += 1;
  }
}

function keyPressed() {
  if(keyCode == 32){
    console.log("yikes")
    newthing = new SunFlower(10,10,100,100);
    let justappend = append(sunflowers, newthing);
  }
}