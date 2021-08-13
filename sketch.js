
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var g;
var left;
var right;
var top3;
var ball ;
var middle1;
var middle2;
var middle2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	g =new Ground(400,690,800,10);
	right = new Ground(790,350,10,800);
	left = new Ground(10,340,10,690);
	top3 = new Ground(400,10,805,10);
	middle1 = new Ground(370,652,10,60);
	middle2 = new Ground(370,625,50,10);
	middle3 = new Ground(650,652,10,60);

	
	


	//Create the Bodies Here
	let ballOption ={
		isStatic : false,
		restitution:0.3,
		frictionAir : 0,
		density:1.2,
	};	
	
	
	ball= Bodies.circle(200,100,20,ballOption);
 World.add(world,ball);
	
	rectMode(CENTER);
  ellipseMode(RADIUS);

   

  
  
}


function draw() {

  background(0);
  


  g.show();
  right.show();
  left.show();
  top3.show();
  middle1.show();
  middle2.show();
  middle3.show();
  Engine.update(engine);
  
 
  
  if (keyCode === UP_ARROW){
	keyPressed();
}
  

  

  

  ellipse(ball.position.x,ball.position.y,10);

 drawSprites();
 
}




function keyPressed(){



	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.50});
	

}