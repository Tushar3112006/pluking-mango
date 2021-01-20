
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1;






function preload()
{
	
}

function setup() {
	createCanvas(1000,300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree1 = new tree();

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("black");
  
  tree1.display();
 
}



