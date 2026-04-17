// The CareFree Campfire by Ariana Walcott

// Instructions: Move your cursor to move the sun. Click the tree to reveal the wood. Click the fire to light the wood.

//Include in a comment at the top of your sketch: your name, a title for the sketch, and any instructions for the user

let skyColorR;
let skyColorG;
let skyColorB;

let currentNight = 1;

let remainingNights = 100;

let campfireItems = [{
  emoji: '🪵', // Log is hidden till you click tree
  active: false,
  x: 200, 
  y: 450
}, {
  emoji: '🔥',
  active: true,
  x: 300,
  y: 400
}, {
  emoji: '🌲',
  active: true,
  x: 400, 
  y:450,
},];



function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(skyColorR, skyColorG, skyColorB);
  
  moveSun()
  natureScene() 
 
  fill(255, 255,255);
  fill(0);
  textSize(20);
  text("Night " + floor(currentNight) + " out of " + remainingNights, 250, 50);
   callCampfireItems()
  
}

// User's mouse moves the coordinates of the sun
function moveSun() {
  
  
  skyColorR = map(mouseX, 0, width, 0, 255);
  
  skyColorG = map(mouseY, 0, height, 0, 255);
  
  skyColorB = map(mouseY, 0, width, 0, 255, 0);
  
  // Sun
  fill(255,204,51)
  ellipse(mouseX, mouseY, 200, 200);
  
  if (mouseX > 0 ) {
      timeMode()
  }

}

function natureScene() {
  // Grass
  fill(65,152,10);
  rect(0, 400, width, 100);

  
}

function callCampfireItems() {
    textSize(50);
    
    // Calling the campfire items to appear in scene
    for(let i = 0; i < campfireItems.length; i++) {
      let item = campfireItems[i];
      if (item.active) { // does not run un-active emojis
         text(item.emoji, item.x, item.y);
      }
    }
  }

function mouseClicked() {
  
  let woodLog = campfireItems[0];
  let fire = campfireItems[1];
  let tree = campfireItems[2];
  
  
  if (dist(mouseX, mouseY, tree.x, tree.y,) < 30) {
    woodLog.active = true;
  }
  if (dist(mouseX, mouseY, fire.x, fire.y) < 30) {
    fire.x = woodLog.x;
    fire.y = woodLog.y;
  }
}

// incrementing time and if the night hits 100, the loop ends
function timeMode() {
  for(let i = 0; i < 10; i++) {
    currentNight += 0.0005;
  }
  
  while (currentNight > 100) {
    noLoop();
  }
  
 
}

