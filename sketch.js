var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ppl , person , maze , background,road,can,clean,angry,bubble,garbage1,garbage2,garbage3,trash1,invisibleGround,man1;

var person_img,maze_img,road_img,can_img,clean_img,angry_img,bubble_img,garbage1_img,garbage2_img,garbage3_img,man1_img;
var bg;

function preload(){

 // doodle_img = loadImage("doodle.png");
//  person_img= loadImage("littering.png");
// maze_img= loadImage("maze.jpg");
 backgroundImage = loadImage("rubbish.jpg");
 road_img = loadImage("rubbishRoad.jpg");
 can_img = loadImage("can.PNG");
 clean_img = loadImage("clean.png");
 angry_img = loadImage("angry.PNG");
 bubble_img = loadImage("bubble.PNG");
 garbage1_img = loadImage("garbage1.PNG");
 garbage2_img = loadImage("garbage2.PNG");
 garbage3_img = loadImage("garbage3.PNG");
 trash1 = loadSound("canDrop.ogg");
person_img = loadAnimation ("man1.PNG","man2.PNG","man3.PNG");
}

function setup(){
  canvas = createCanvas( displayWidth-20, 900);
 
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  background(backgroundImage);

  if(World.frameCount%260===0){
    angry.visible=true;
    bubble.visible=true;
   
}

if(World.frameCount%120===0){
  person.visible=true;
  can.visible=true;
 
}


  

if(World.frameCount%280===0){
  angry.velocityX=5;
  bubble.velocityX=5;

}
if(World.frameCount%300===0 || World.frameCount>300){
  fill("darkblue");
  textSize(30);
  textFont ("Kristen ITC");
  text ("Be A         Of The                , ",700,180);
  text("Not Part Of The            ",700,230);
  fill ("green");
  text("Part",780,180);
  text("Solution",970,180);
  text("Pollution",960,230);
}


if(frameCount % 120 === 0){
  trash1.play();
}

  if(playerCount === 4){
    game.update(1);
  }
  if(playerCount === 5){
    game.update(2);
  }
  if(gameState === 1){
   // clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
}
function keyPressed() {
if (keyCode === DOWN_ARROW) {
  person.velocityY=1;
   }
  }