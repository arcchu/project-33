var bg,bgImg
var snow5, snow5Animation
function preload(){
  bgImg = loadImage("snow1.jpg")
  snow5Animation = loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,800);
  bg = createSprite(400,400)
  bg.addImage(bgImg)
  bg.scale=2

}

function draw() {
  background(255,255,255); 
  snowFall()
  drawSprites();
}
function snowFall(){
  if(frameCount % 15 === 0 ){
    snow5 = createSprite(200,1,10,10)
    snow5.x = Math.round(random(10,780))
    snow5.addImage(snow5Animation)
    snow5.velocityY = 4
    snow5.velocityX = 1
    snow5.scale = .10
  }
}