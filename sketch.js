const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player, playerImage, NPC, NPCImage, backgroundImage;
var score;
var ground1,ground2,ground3,ground4;
var h1,h2,h3,h4,h5,h6,h7,h8,h9;
var H1,H1_Image;
var gameState="play"
var H1_Group
var rhino,rhinoImg,rhino2Img

function preload(){
  H1_Image=loadImage("Human2.png")
  rhinoImg=loadImage("rhino2.png")
  rhino2Img=loadImage("rhino3.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  H1_Group=new Group();

  ground1= new Ground(windowWidth/8,windowHeight-50,windowWidth/4, 100)
  ground2= new Ground(windowWidth/2.72,windowHeight-50,windowWidth/4, 100)
  ground3= new Ground(windowWidth/1.65,windowHeight-50,windowWidth/4, 100)
  ground4= new Ground(windowWidth/1.16,windowHeight-50,windowWidth/3.5, 100)
  //player= new Player(windowWidth/2,200,120,100)
  h1= new HumanBottom(100,windowHeight-150);
  h2= new HumanBottom(250,windowHeight-150)
  h3= new HumanBottom(400,windowHeight-150)
  h4= new HumanBottom(550,windowHeight-150)
  h5= new HumanBottom(700,windowHeight-150)
  h6= new HumanBottom(850,windowHeight-150)
  h7= new HumanBottom(1000,windowHeight-150)
  h8= new HumanBottom(1150,windowHeight-150)
  h9= new HumanBottom(1300,windowHeight-150)
  rhino=createSprite(windowWidth/2,windowHeight/2,100,100);
  rhino.addImage(rhinoImg);
  rhino.scale=0.3
}

function draw() {
  background(255,255,255);
  
  if(keyDown(UP_ARROW)){
    rhino.velocityY=-12
  }
  rhino.velocityY+=0.8
  if(gameState==="play"){
    Engine.update(engine);
    spawnHumans();
  }
     if(H1_Group.isTouching(rhino)) {
      gameState="end"
  }
 
   if(gameState==="end"){
   //rhino.visible=false;
   rhino.addImage(rhino2Img)
   rhino.scale=0.15
   textSize(50);
   stroke("gold")
   strokeWeight(5)
   fill("red")
   text("GAME OVER",rhino.x-100,rhino.y+100)
   rhino.velocityX=0
   rhino.velocityY=0
   H1_Group.setVelocityYEach(0);
 }

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  //player.display();
  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  h7.display();
  h8.display();
  h9.display();

  
  drawSprites();
}

function spawnHumans(){
  if(frameCount%5===0){
    H1=createSprite(100,20,20,20)
    H1.addImage(H1_Image)
    H1.x=Math.round(random(20,windowWidth-20))
    H1.velocityY=5
    H1.scale=0.1
    H1_Group.add(H1)
  }
}