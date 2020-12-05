
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  blk = new Block(410,350)
  blk2 = new Block(380,350)
  blk3 = new Block(440,350)
  blk4 = new Block(350,350)
  blk5 = new Block(425,310)
  blk6 = new Block(395,310)
  blk7 = new Block(365,310)
  blk8 = new Block(380,270)
  blk9 = new Block(410,270)
  blk10 = new Block(395,230)
  blk11 = new Block(680,120)
  blk12 = new Block(665,160)
  blk13 = new Block(695,160)
  blk14 = new Block(710,210)
  blk15 = new Block(650,210)
  blk16 = new Block(680,210)


  stone = new Stones(100,100,50);
  
  rubber = new Rubber(stone.body,{x: 120,y: 300});

  ground = new Ground(400,575,800,20)
  ground2 = new Ground(400,400,200,20)
  ground3 = new Ground(675,250,200,20)

  

   
}


function draw() {
  background(255);
  Engine.update(engine);


  blk.display();
  blk2.display();
  blk3.display();
  blk4.display();
  blk5.display();
  blk6.display();
  blk7.display();
  blk8.display();
  blk9.display();
  blk10.display();
  blk11.display();
  blk12.display();
  blk13.display();
  blk14.display();
  blk15.display();
  blk16.display();

  stone.display();
  rubber.display();
  ground.display();
  ground2.display();
  ground3.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  rubber.fly();
}

function keyPressed(){
  if(keyCode === 32){
     rubber.attach(stone.body);
  }
}
