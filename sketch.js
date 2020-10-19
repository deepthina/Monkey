var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  createCanvas(400, 400);

  monkey = createSprite(100, 320, 10, 10);
  monkey.addAnimation("monkey running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(0, 320, 800, 10);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("pink");

   if (keyDown("space") && monkey.y >160) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  ground.velocityX = -5;
  ground.x = ground.width / 2;

  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();

  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
}

function spawnFood(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,100,10,10);
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y= Math.round(random(120,200));
    banana.lifetime = 400/3;
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 80 === 0){
    obstacle = createSprite(400,100,10,10);
    obstacle.velocityX=-5;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.y= Math.round(random(120,200));
    obstacle.lifetime = 400/3;
    obstacleGroup.add(obstacle);
  }
}