var fixedRect,movingRect,anotherRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  anotherRect = createSprite(400,200,50,80);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="blue";
  anotherRect.shapeColor="pink"
  movingRect.debug=true;
  fixedRect.debug=true;
  anotherRect.debug = true;
}

function draw() {
  background(0,0,0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;  
  console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if(isTouching(movingRect,anotherRect)){
    movingRect.shapeColor="red";
    anotherRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="white";
    anotherRect.shapeColor = "skyblue";
  }
  drawSprites();
}

