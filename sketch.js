
var ground1,dus1,paperball,dusimg,dust1,dust2; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
dusimg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dus1 = createSprite(800,510);
	dus1.addImage(dusimg);
	dus1.scale = 0.8;
	
	paperball= new paper(200,300,70);
	ground1 = new ground(width/2,650,width,20);
	dust1=new dustbin(10,100,720,590);
	dust2=new dustbin(10,100,880,590);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 dus1.display();

 paperball.display();
 ground1.display();
 dust1.display();
 dust2.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:12,y:-20});
	}
}

