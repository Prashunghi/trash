const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	
var ground;	
var ball;	
var bin1,bin2,bin3;	

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	bin1=createSprite(600,750,300,30);
	bin1.shapeColor=color("white");

	bin2=createSprite(450,650,30,200);
	bin2.shapeColor=color("white");

	bin3=createSprite(750,650,30,200);
	bin3.shapeColor=color("white");
	
	


	Engine.run(engine);


	ground = new Ground(400,780,800,30);


	ball = new Ball(50,600);

	bin1=Bodies.rectangle(600,750,200,30,{isStatic:true});
	World.add(world, bin1);
	

	bin2=Bodies.rectangle(450,650,30,200,{isStatic:true});
	World.add(world, bin2);

	bin3=Bodies.rectangle(750,650,30,200,{isStatic:true});
	World.add(world, bin3);
	

   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}
