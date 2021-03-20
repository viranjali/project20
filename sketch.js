var cat,catImage1,catImage2,catImage3,catImage4;
var gardenImage,garden;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;
function preload() {
    //load the images here

    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");
    gardenImage=loadImage("images/garden.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("cat",catImage1);
    cat.scale=0.1;

     mouse=createSprite(200,600);
     mouse.addAnimation("mouse",mouseImage1);
     mouse.scale=0.1;
    

}

function draw() {
    background(gardenImage);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastImage",catImage3);
        cat.changeAnimation("catlastImage");
        cat.x=300;

        mouse.addAnimation("mouselastImage",mouseImage3);
        mouse.changeAnimation("mouselastImage");
    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

     if(keyCode === LEFT_ARROW){
         cat.velocityX = -5;
         cat.addAnimation("catRunning", catImage2);
         cat.changeAnimation("catRunning");

         mouse.addAnimation("mouseseondImage", mouseImage2);
         mouse.changeAnimation("mouseseondImage");
     }

}
