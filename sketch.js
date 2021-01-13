var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,600);

    //create 4 different surfaces
    surface1 = createSprite(50,495,100,20);
    surface1.shapeColor = "red";    
    
    surface2 = createSprite(150,495,100,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(250,495,100,20);
    surface3.shapeColor = "orange";

    surface4 = createSprite(350,495,100,20)
    surface4.shapeColor = "green";

    box = createSprite(375,475,20,20);
    box.shapeColor = "white";
   



    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprites


    box.velocityX = 0;

    if(keyDown(LEFT_ARROW)){
        box.velocityX = -3;
    }
    if(keyDown(RIGHT_ARROW)){
        box.velocityX = 3;
    }

    if(isTouching(surface1,box)){
        surface1.shapeColor = "red";
        box.shapeColor = "red";
    }
    else{
        surface1.shapeColor = "red";
        box.shapeColor = white
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(surface1,box){
    if(surface1.x-box.x<box.width/2 + surface1.width/2 &&
        box.x - surface1.x<box.width/2+surface1.width/2 && 
      surface1.y-box.y<box.height/2 + surface1.height/2 && 
      box.y - surface1.y<box.height/2 +surface1.height/2){
       
        return true;
      }
      else{
        return false;
      }
    
    }
    
