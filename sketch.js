const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1,pillar2,pillar3,pillar4,pillar5,pillar6,pillar7,pillar8,pillar9,pillar10,pillar11,pillar12;





function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

fill("brown");
  pillar1 = new Pillar(70,100,10,300);
  pillar2 = new Pillar(83,200,35,200);
  pillar3 = new Pillar(118,260,35,200);
  pillar4 = new Pillar(153,300,80,100);
  pillar5 = new Pillar(232,260,35,200);
  pillar6 = new Pillar(267,200,35,200);
  pillar7 = new Pillar(305,100,10,300);
  pillar8 = new Pillar(40,70,70,40);
  pillar9 = new Pillar(275,70,70,40);
  pillar10 = new Pillar(183,150,20,150);
  pillar11 = new Pillar(188,50,10,100);
  pillar12 = new Pillar(160,30,70,20);

  
}

function draw() {
  background("lightblue");
  Engine.update(engine); 
  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  pillar8.display();
  pillar9.display();
  pillar10.display();
  pillar11.display();
  pillar12.display();

 
  
}