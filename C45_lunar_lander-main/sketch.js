let ground;
let lander;
var lander_img;
var bg_img;
var meteor_image;
var meteorsGroup; 

var vx = 0;
var g = 0.05;
var vy = 0;




gameState=0
function preload()
{
  meteor_image = loadImage("meteorImage.png")
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.debug=true
  lander.setCollider("circle",0,-10,350)
  lander.scale = 0.1;
  console.log(lander.y)

  ground=createSprite(200,650,windowWidth,10)
  ground.shapeColor=("blue")
ground.visible=false

  rectMode(CENTER);
  textSize(15);
  meteorsGroup=new Group()
}

function draw() 
{
  background(51);
  lander.collide(ground)
  
  image(bg_img,0,0);
  if(gameState==0){
    if(lander.position.y>550&&lander.velocityY>5){
      vy=0
  gameState=2
  
  }
}
  push()
  fill(255);
  text("Vertical Velocity: "+lander.velocityY,800,75);
  pop();
  lander.velocityY+=0.05
  
  
if(gameState==2){
  textSize(21)
  fill("#ff1970")
  text("You win!",300,300)
  vy=0
  meteorsGroup.setVelocityYEach(0)
  
}
if(meteorsGroup.isTouching(lander)){
  gameState=2
}

if(lander.collide(ground)&&vy<5){
  gameState=2
}
  //fall down
  //vy +=g;
  //lander.y+=3

  spawnMeteors()
  drawSprites();

  

}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    // lander.position.y=lander.position.y+1
  lander.velocityY=-3
  

     }
}

function spawnMeteors(){
  if(frameCount%105==0){
    meteor=createSprite(random(100,300),30)
    meteor.addImage(meteor_image)
    meteor.debug=true
    meteor.setCollider("circle",77,40,150)
    meteorsGroup.add(meteor)
    meteor.velocityY=5
    meteor.scale=0.3
    meteor.x=lander.x
  }
}

