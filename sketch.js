// name spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var dworld,dengine;
var ground;

function setup() {
  createCanvas(400,400);
  dengine=Engine.create();
  dworld=dengine.world;

  var options={
 isStatic:true,
  }
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(dworld,ground);
  console.log(ground);
  console.log(ground.area)
}

function draw() {
  background("black"); 
  Engine.update(dengine);
  rectMode(CENTER) ;
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}