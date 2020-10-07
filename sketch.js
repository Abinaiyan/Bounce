function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;
  fixedrect.velocityX = -3;
  fixedrect.velocityY = -2

   movingrect = createSprite(200,50,50,50);
  movingrect.shapeColor = "blue";
  movingrect.debug = true;
  movingrect.velocityX= 3;
  movingrect.velocityY= 2

}

function draw() {
  background("black");  
  


  if( movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2) {
    fixedrect.velocityX = fixedrect.velocityX *(-1);
    movingrect.velocityX = movingrect.velocityX *(-1);
  }
  if( fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2
    && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2){

movingrect.velocityY = movingrect.velocityY * (-1);
fixedrect.velocityY = fixedrect.velocityY * (-1);

  }


  drawSprites();
}