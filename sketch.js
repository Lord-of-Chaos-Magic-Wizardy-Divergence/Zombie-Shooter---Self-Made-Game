var player, backgroundImg, dashEnabled = "false";
var rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, rock10, rockImg;
var bulletGroup;
var zombie1;

function preload(){
  backgroundImg = loadImage("backgroundImg.JPG");
  rockImg = loadImage("rock.png");
}

function setup() {
  createCanvas(displayWidth - 100,displayHeight - 130);

  player = createSprite(200, 200, 50, 50);
  player.shapeColor = "white";

  rock1 = createSprite(814,331,50,50);
  rock1.addImage("rock", rockImg);
  rock2 = createSprite(1768,70,50,50);
  rock2.addImage("rock", rockImg);
  rock3 = createSprite(702,73,50,50);
  rock3.addImage("rock", rockImg);
  rock4 = createSprite(1501,115,50,50);
  rock4.addImage("rock", rockImg);
  rock5 = createSprite(1423,139,50,50);
  rock5.addImage("rock", rockImg);
  rock6 = createSprite(1438,824,50,50);
  rock6.addImage("rock", rockImg);
  rock7 = createSprite(180,755,50,50);
  rock7.addImage("rock", rockImg);
  rock8 = createSprite(460,341,50,50);
  rock8.addImage("rock", rockImg);
  rock9 = createSprite(552,679,50,50);
  rock9.addImage("rock", rockImg);
  rock10 = createSprite(1032,555,50,50);
  rock10.addImage("rock", rockImg);

  bulletGroup = createGroup();

  zombie1 = new NormalZombie(200,200);
}

function draw() {
  background(0); 

  imageMode(CENTER);
  //sharpen();
  image(backgroundImg, displayWidth/2 - 50, displayHeight/2 - 65, displayWidth-100, displayHeight-100);

  if(keyDown(LEFT_ARROW) || keyDown("A")){
    player.x -= 7.5;
    if(keyDown("SHIFT") && dashEnabled === "true"){
      player.x -= 10;
    }
  }
  if(keyDown(RIGHT_ARROW) || keyDown("D")){
    player.x += 7.5;
    if(keyDown("SHIFT") && dashEnabled === "true"){
      player.x += 10;
    }
  }
  if(keyDown(UP_ARROW) || keyDown("W")){
    player.y -= 7.5;
    if(keyDown("SHIFT") && dashEnabled === "true"){
      player.y -= 10;
    }
  }
  if(keyDown(DOWN_ARROW) || keyDown("S")){
    player.y += 7.5;
    if(keyDown("SHIFT") && dashEnabled === "true"){
      player.y += 10;
    }
  }

  zombie1.display();
  zombie1.follow();
  //zombie1.pointTo(player.x,player.y);

  player.collide(rock1);
  player.collide(rock2);
  player.collide(rock3);
  player.collide(rock4);
  player.collide(rock5);
  player.collide(rock6);
  player.collide(rock7);
  player.collide(rock8);
  player.collide(rock9);
  player.collide(rock10);

  zombie1.collide(rock1.x,rock1.y,rock1.width,rock1.height,2);
  zombie1.collide(rock2.x,rock2.y,rock2.width,rock2.height,2);
  zombie1.collide(rock3.x,rock3.y,rock3.width,rock3.height,2);
  zombie1.collide(rock4.x,rock4.y,rock4.width,rock4.height,2);
  zombie1.collide(rock5.x,rock5.y,rock5.width,rock5.height,2);
  zombie1.collide(rock6.x,rock6.y,rock6.width,rock6.height,2);
  zombie1.collide(rock7.x,rock7.y,rock7.width,rock7.height,2);
  zombie1.collide(rock8.x,rock8.y,rock8.width,rock8.height,2);
  zombie1.collide(rock9.x,rock9.y,rock9.width,rock9.height,2);
  zombie1.collide(rock10.x,rock10.y,rock10.width,rock10.height,2);

  createBullet();
  drawSprites();
}

function createBullet(){
  var bullet;
  bullet = createSprite(player.x+15,player.y-15,5,5);
  bullet.shapeColor = "yellow";
  bullet.visible = false;
  if(bullet.x === player.x + 15 && bullet.y === player.y - 15 && mouseIsPressed && frameCount % 5 === 0){
      bullet.pointTo(mouseX,mouseY);
      bullet.setSpeedAndDirection(15);
      bullet.visible = true;
      bulletGroup.add(bullet)
  }
}