const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var background,backgroundImage;
var ground,hero1;
var fly1,block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var monster;


function preload() {
backgroundImage=loadImage("GamingBackground.png");
}

function setup() {
  var canvas=createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(200,400,1500,10);
  hero1=new Hero(120,100,100,100);
  block1=new Block(450,390,80,40);
  block2=new Block(450,385,80,40);
  block3=new Block(450,380,80,40);
  block4=new Block(450,375,80,40);
  block5=new Block(450,370,80,40);

  block6=new Block(530,390,80,40);
  block7=new Block(530,385,80,40);
  block8=new Block(530,380,80,40);
  block9=new Block(530,375,80,40);
  block10=new Block(530,370,80,40);

  monster=new Monster(600,380,90,90);
  
  fly1= new Fly(hero1.body,{x:100, y:100});
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  monster.display();
  fly1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  fly1.fly();
}