const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine,ground,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option={isStatic:true}
  ground=Bodies.rectangle(200,390,400,10,option);
  World.add(world,ground);

  var option={restitution:0.5}
  ball=Bodies.circle(100,100,50,option);
  World.add(world,ball);

}

function draw() {
  Engine.update(engine);
  background("skyblue");  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50)




  drawSprites();
}