
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	//yes
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(500,450,500,500);
  ground = new Ground(400,690,800,20);
  boy = new Boy(150,600,250,250);
  stone = new Stone(80,530,25,25);
  slingshot = new SlingShot(stone.body,{x:80, y:530});

  mango1 = new Mango(550,300,40,40);
 //mango2 = new Mango()
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
  Engine.update(engine);
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  slingshot.display();
 
 
}
function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
  }
}


