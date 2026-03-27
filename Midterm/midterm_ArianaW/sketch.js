function setup() {
  createCanvas(600, 600);
}

let scene = 0;
let expand = 0;

let cherry =  {
    x: 200,
    y: 150,
    emoji: '🍒'
  }

let coconut =  {
    x: 160,
    y: 160,
    emoji: '🥥'
  }

let banana =  {
    x: 180,
    y: 120,
    emoji: '🍌'
  }

var r = random(0, 180);
var g = random(0, 300);
var b = random(0, 200);


function draw() {
 //textSize(50);
  background(220);
  
  if (scene != 3)
    {
      expand = 0;
    }
  
  if (scene == 1)
    {
      doScene1();
    }
  
  else if (scene == 2)
    {
      doScene2();
    }
  else if (scene == 3)
    {
      doScene3();
    }
  
  print(scene);
}

function keyPressed() {
  
  if (key == '1')
    {
      scene = 1;
    }
  else if (key == '2')
    {
      scene = 2;
    }
  else if (key == '3')
    {
      scene = 3;
    }
  
  else if (key == 'i') {
    r = random(0, 180);
    g = random(0, 300);
    b = random(0, 200);
  }
}

function doScene1() // chery on top
{
  background("#f0e2fc");
  fill('black');
  stroke('black');
  text('click i to change colors!', 10, 420);
  
  
  fill('white');
  fill(r,g,b);
  //ice cream cone
  triangle(160, 200, 240, 200, 200, 350);
  
  
 
  // ice cream scoop
  circle(200, 150, 100);
   //text(cherry.emoji, cherry.x, cherry.y);

  
  // edge icecream
  circle(170, 190, 40);
  circle(230, 190, 40);
  circle(195, 190, 40);
  
}


function doScene2() // ice cream 
{
  background("#d69cff");
  noStroke();
  
  stroke("white");
  fill("white");
  //ice cream cone
  fill("#CDA26F");
  triangle(160, 200, 240, 200, 200, 350);
  
  
 
  // ice cream scoop
  fill("#abffe3");
  circle(200, 150, 100);
  textSize(50);
  text(cherry.emoji, cherry.x, cherry.y);
  textSize(20);
  text(coconut.emoji, coconut.x, coconut.y);
  textSize(15);
  text(banana.emoji, banana.x, banana.y);

  // edge icecream
  fill("#fefcd0");
  circle(170, 190, 40);
  fill("#fabdbd");
  circle(230, 190, 40);
 fill("#94654c");
  circle(195, 190, 40);
  
  
  
}

function doScene3() // cold winter for freezeria
{
  background("#04517b");
  translate(width/2, height/2);
  
  for (let i = 0; i < 200; i++)
  {
    
    rotate(0.1);
    //stroke("#88d2f2");
   fill("#abf0ff");
    ellipse(i + expand, 0 + expand, 10, 10);
  }
  expand += 0.2;
}