
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var stand,chain1,cahin2,chain3,chain4,chain5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,800,800,15)

	//Create the Bodies Here.
	ball1 = new Metal(320,500)
	ball2 = new Metal(380,500)
	ball3 = new Metal(440,500)
	ball4 = new Metal(500,500)
	ball5 = new Metal(560,500)
	
	stand = new Roof

	chain1 = new Bob(ball1.ball,stand.roof,-120,0);
	chain2 = new Bob(ball2.ball,stand.roof,-60,0);
	chain3 = new Bob(ball3.ball,stand.roof,0,0);
	chain4 = new Bob(ball4.ball,stand.roof,60,0);
	chain5 = new Bob(ball5.ball,stand.roof,120,0);    

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  stand.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:-1080,y:-1050});
	}
}

