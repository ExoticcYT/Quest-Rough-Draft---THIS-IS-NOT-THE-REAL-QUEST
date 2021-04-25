var dude, gif, backgroundImg, transparenter, tree, tree1, tree2, tree3, tree4;
var treeImage1, treeImage2, treeImage3,treeImage4;
var trees = [tree, tree1, tree2, tree3, tree4];
var invsGround;
function preload(){
  gif = loadGif('images/animation.gif');
  groundImage = loadImage("images/betterGround.jpg");
  backgroundImg = loadImage("images/backgroundImg.png");
  //transparenter = loadImage("images/png.png");
  treeImage1 = loadImage("images/tree.png");
  treeImage2 = loadImage("images/tree (1).png");
  treeImage3 = loadImage("images/tree (2).png");
  treeImage4 = loadImage("images/palm-tree.png");
}

function setup() {
  createCanvas(1490, 900);
  dude = createSprite(70,height - 200,100,100);
  dude.visible = false;

  invsGround = createSprite(400, height - 100, width,2);
  //dude.setAlpha = 255;
  //dude.shapeColor = "black";
  ground = createSprite(1400,height - 45,width,2);
  ground.addImage("ground",groundImage);
  ground.scale = 3;
  ground.x = 875
  ground.velocityX = -7;
  //ground.velocityX = -(6 + 3*score/100);
  //dude.addImage(gif)
}

function draw(){
  background(backgroundImg);
  dude.debug = true;
  dude.setCollider("rectangle", +25, +25, 40, 100);
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown(32) &&  dude.y >= 700){
    dude.velocityY = -20;
  }
  dude.velocityY += 2;
  spawnTrees();
  dude.collide(invsGround);
  drawSprites();
  image(gif, dude.x-25, dude.y-25,dude.width,dude.height);
}

function spawnTrees(){
  if(frameCount % 99 === 0 || frameCount % 75 === 0 || frameCount % 63 === 0){
    tree = createSprite(1550, height - 260, 10, 80);

    tree.velocityX = -10;
    
    var rand = Math.round(random(1, 4));
    switch(rand) {
      case 1: tree.addImage(treeImage1);
              break;
      case 2: tree.addImage(treeImage2);
              break;
      case 3: tree.addImage(treeImage3);
              break;
      case 4: tree.addImage(treeImage4);
              break;
      default: break;
    }

    console.log(rand);
    tree.lifetime = 1560;
    tree.scale = 0.37;
  }
}