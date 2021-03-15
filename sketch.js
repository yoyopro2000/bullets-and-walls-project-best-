var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1400,400);

  speed = random(223, 321);
  weight = random(32, 52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 30, 10);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {
  background(0);  

  if (isTouching(wall, bullet)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10){

      wall.shapeColor = color(255, 0, 0);

    }

    if (damage < 10){

      wall.shapeColor = color(0, 225, 0);

    }

  }

  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2){

    return true;

  }

    return false;

}