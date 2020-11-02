var HP = 10;
var playerX = 50;
var playerY = 220;
var x = 1000;
var y = 220;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(300,100,0);
  fill(0,100,0);
  rect(0,height/2 - 50,width,height);
  
  //player
  
  fill(200,0,0);  
  rect(playerX,playerY,50,50);
  
  // object
  
  rect(x,y,20,7);
  x = x - 10;
  
  if(x == -10){
    x = 1000;
    y = y + random(-300, 300);
  }
  movement();
  
  endGame(HP);
  // colishino 
  if(220 > playerY && 220 < playerY + 50){
            if(x > playerX && x < playerX + 50){
              HP = HP - 0.25;
              console.log(HP)
      }
  }
}


function endGame(HP){
  if( HP < 0){
    background(255,0,0);
    textSize(40);
    text("GAME OVER", width/2, height/2);
    console.log("what");
  }
}











function movement(){
    if(keyCode == UP_ARROW ){
      
      playerY -=5;
      keyCode = ALT;
  }
      if(keyCode == DOWN_ARROW){
      
      playerY += 5;
      keyCode = ALT;
  }
        if(keyCode == RIGHT_ARROW){
      
      playerX += 5;
      keyCode = ALT;
  }
        if(keyCode == LEFT_ARROW){
      
      playerX -= 5;
      keyCode = ALT;
  }
}
