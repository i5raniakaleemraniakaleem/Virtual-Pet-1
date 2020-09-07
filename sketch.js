var dog, happyDog, database, foodS, foodStock;

function preload()
{
dog=loadImage("images/doglmg.png");
happyDog=loadImage("images/doglmg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dog);
  database = firebase.database();
  foodStock=database.ref('food')
  foodStock.on("value",readStock); 
}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}

  drawSprites();
  text("Click the up arrow to feed Vickie milk",250,450);
  //add styles here
  textSize(20);
  fill(white);
  stroke(black);
}

function readStock(data){
foodS=data.val();
}

function writeStock(){
if(x<=0){
x=0;
}else{
x=x-1
}
database.ref('/').update({
food:x
})
}
