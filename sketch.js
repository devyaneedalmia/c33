const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var b1, b2, b3, b4, b5, b6;
var c1, c2, c3, c4, c5;
var ground;
var chain;
var r1;
var flag = 0;

//var gameState = "onSling";
var bg;

//var score = 0;
function preload() {
   bg = loadImage("images/bg.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 380, 1200, 20);

    b1 = new Bogies(50, 170, 50, 50);
    b2 = new Bogies(150, 170, 50, 50);
    b3 = new Bogies(250, 170, 50, 50);
    b4 = new Bogies(350, 170, 50, 50);
    b5 = new Bogies(450, 170, 50, 50);
    b6 = new Bogies(550, 170, 50, 50);

    c1 = new Chain(b1.body, b2.body);
    c2 = new Chain(b2.body, b3.body);
    c3 = new Chain(b3.body, b4.body);
    c4 = new Chain(b4.body, b5.body);
    c5 = new Chain(b5.body, b6.body);

    r1 = new Rock(1100, 200, 100, 100);

}

function draw(){
    //if(backgroundImg)
        background(bg);
        Engine.update(engine);
    //strokeWeight(4);

    ground.show();

    b1.show();
    b2.show();
    b3.show();
    b4.show();
    b5.show();
    b6.show();

    c1.show();
    c2.show();
    c3.show();
    c4.show();
    c5.show();

    r1.show();

    var collision = Matter.SAT.collides(b6.body, r1.body);
    if(collision.collided)
    {
        flag = 1;
    }

    if(flag ===1 )
    {
        textSize(30);
        stroke(1);
        fill("blue");
        text("Crash!", 500, 200);
    }

}

function keyPressed()
{
    if(keyCode === 32 )
    {
       Matter.Body.applyForce(b6.body, {x:b6.body.position.x, y:b6.body.position.y}, {x:0.5, y:0} );
    }
}

/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32 ){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }



}


async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(8,10);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
*/