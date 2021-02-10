
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Roof;
var Bob1, Bob2, Bob3, Bob4, Bob5;
var Rope1, Rope2, Rope3, Rope4, Rope5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new ROOF(400, 150, 500, 50);

	Bob1 = new BOB(200, 400, 50);
	Bob2 = new BOB(300, 400, 50);
	Bob3 = new BOB(400, 400, 50);
	Bob4 = new BOB(500, 400, 50);
	Bob5 = new BOB(600, 400, 50);

	Rope1 = new ROPE(Bob1.body, Roof.body, -200);
	Rope2 = new ROPE(Bob2.body, Roof.body, -100);
	Rope3 = new ROPE(Bob3.body, Roof.body, 0);
	Rope4 = new ROPE(Bob4.body, Roof.body, 100);
	Rope5 = new ROPE(Bob5.body, Roof.body, 200);
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  Roof.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  
  drawSprites();

} 

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(Bob1.body, Bob1.body.position, {x:-100, y:-100});
	}
}
