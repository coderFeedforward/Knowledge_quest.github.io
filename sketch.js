function preload(){
  person = loadImage("person.png");
  bullit = loadImage("bullit.png");
}


//FIX THE COLISHION LOGIC AND STUFF SO DEATH WORKS //RIGHT , Make bullit disopear 
var numBUllits = 10;
var bullitsX = [];
var bullitsY = [];
var bullitH = 20;
var bullitW = 40;

var HP = 3;
var playerX = 50;
var playerY = 220;
var playerH = 100;
var playerW = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < numBUllits; i++){
  bullitsX.push(1700 + i*20);
  bullitsY.push(random(-250, 250));
}
}

function draw() {
  //keyReleased();
  background(300,100,0);
  fill(255,255,0);
  ellipse(100,100,50,50);
  fill(0,100,0);
  rect(0,height/2 - 50,width,height);
  
  //player
  
  fill(200,0,0);  
  
  image(person, playerX,playerY,playerW,playerH);
  
  // object
  
  for(var i = 0; i < numBUllits; i++){
    rect(bullitsX[i],bullitsY[i],20,7);
    image(bullit,bullitsX[i],bullitsY[i],bullitW,bullitH);
    bullitsX[i] -=10;
  }
  
  
  

  
  for(var j = 0; j < numBUllits; j++){
  if(bullitsX[j] == -10){
    bullitsX[j] = 1200 ;//+random(-150, 150);
    //IF BULLIT OUT OF SCREAN THAN MOVE BACK 
    bullitsY[j] = bullitsY[j] + random(-250, 250);
  }

  }
  movement();
  
  endGame(HP);
  
  
  // colishion
for(var z = 0; z < numBUllits; z++){
  if(bullitsY[z] > playerY && bullitsY[z] < playerY + playerH){
            if(bullitsX[z] > playerX && bullitsX[z] < playerX + playerW){
              HP = HP - 1;
              console.log(HP)
              bullitsX[z] = 1300;
      }
  }
  }
    if(playerX == width){
    background(0,0,255);
    textSize(40);
    fill(0);
    stroke(70);
    text("you win !!!", width/2, height/2);
  }
    
}


function endGame(HP){
  if( HP < 0){
    background(255,0,0);
    textSize(40);
    fill(0);
    stroke(70);
    text("GAME OVER", width/2, height/2);
    
  }
}











function movement(){
    if(keyCode == UP_ARROW ){
      
      playerY -=5;
      
  }
      if(keyCode == DOWN_ARROW){
      
      playerY += 5;
      
  }
        if(keyCode == RIGHT_ARROW){
      
      playerX += 5;
      
  }
        if(keyCode == LEFT_ARROW){
      
      playerX -= 5;
      
  }
  if(playerX < 0){
    playerX =0;
  }
  if(playerX + 50 > width){
    playerX = width - 50;
  }
  if(playerY > height- 50){
    playerY = height - 50;
  }
  if(playerY < 0){
    playerY = 0 ;
  }

}
  
  function keyReleased() {
    keyCode = ALT;
  }
