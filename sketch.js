var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(width/2,640,200,20);
    box2 = new Box(305,600,20,100)
	box3 = new Box(495,600,20,100)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  rect(ground.position.x, ground.position.y, width, 10);

//   ground.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody,false);
// packageBody.restitution=0.8;
  
 }
}



