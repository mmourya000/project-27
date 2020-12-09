var roof, bob1,bob2, bob3, bob4, bob5, rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,600,80);
	bob1= new Bob(250,400,4);
	bob2= new Bob(300,400,4);
	bob3= new Bob(350,400,4);
	bob4= new Bob(400,400,4);
	bob5= new Bob(450,400,4);

rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0);
rope2= new Rope(bob2.body,roof.body,-bobDiameter*2,0);
rope3= new Rope(bob3.body,roof.body,-bobDiameter*2,0);
rope4= new Rope(bob4.body,roof.body,-bobDiameter*2,0);
rope5= new Rope(bob5.body,roof.body,-bobDiameter*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



