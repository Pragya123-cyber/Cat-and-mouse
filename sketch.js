var  bgImg;
var catImg1 , catImg2;
var mouseImg1 , mouseImg2;
var cat1 , cat2;
var mouse1 , mouse2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    
   catImg1=loadAnimation("images/cat1.png");
  mouseImg1=loadAnimation("images/mouse1.png");
  ///  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  //  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg=createSprite(500,400,500,400);
bg.addImage("bg",bgImg);
bg.scale=1.7;

cat1=createSprite(700,600,100,10);
cat1.addAnimation("cat1",catImg1);
cat1.scale=0.1;

mouse1=createSprite(100,600);
mouse1.addAnimation("mouse1",mouseImg1);
mouse1.scale=0.1;
}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
if
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW)
{
  cat1.addAnimation("catRunning",mouseImg2);
  cat1.changeAnimation("catRunning");
  cat1.velocityX=2;
}

}
