
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
  trexImage = loadImage("trex1.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 
  trex=createSprite(50,160,10,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  edges=createEdgeSprites()

}

function draw(){
  background("black")
  drawSprites()
 
  if(keyDown("space")){
     trex.velocityY=-10
  }

  trex.velocityY=trex.velocityY+1

  trex.collide(edges[3])
}


