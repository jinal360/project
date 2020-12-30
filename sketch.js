
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    Ground = new stand (800,300,10,30);
}

function draw (){

    backGround("black");

    stand.display()
}
