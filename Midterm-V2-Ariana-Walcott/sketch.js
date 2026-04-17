// scoop logic

const scoopWidth = 60;

let caughtScoops = []; // Stores Scopes

let fallingScoop;

let coneX = 200;

let coneY = 100;

// scene logic

let scene = 0;



let toppings = [



{emoji: '🍒', active: false, x: 300, y: 500},

{emoji: '🥥', active: false, x: 400, y: 500},

{emoji: '🍌', active: false, x: 500, y: 500},

];





function setup() {

createCanvas(800, 600);

newGameSettings()

}



function draw() {

background(220);

newGame()

}



function newGame() {

if (scene == 0) {

doStartScene();

} if (scene == 1) {

doScene1();

moveCone();

checkCollider();

callBtnDone();

} else if (scene == 2) {

doScene2();

} else if (scene == 3) {

doScene3();

}

}



function doStartScene() {
  createFreezeriaBG();
    fill(0);
    textSize(50);
    textAlign(CENTER);
    text("Icecream Make Game", 400, 150);
    textSize(25);
    // Fixed text overlapping by changing Y positions
    text("1. Catch Ice Cream", 400, 220);
    text("2. Add Up to Three Toppings", 400, 260);
    text("3. Complete Order", 400, 300);
    textSize(35);
    text("By Ariana Walcott", 400, 380);
    textSize(20);
    text("Click to Start", 400, 500);

// Player Input To Start

if (mouseIsPressed == true) {

scene = 1;

}

}



function createFreezeriaBG() {

background(255, 240, 245);

fill(100, 100, 120);

rect(0, 350, width, 50);

fill(150, 150, 170);

rect(0, 400, width, 20);

}



function moveCone() {

if (keyIsDown(LEFT_ARROW)) coneX -= 7;

if (keyIsDown(RIGHT_ARROW)) coneX += 7;

}



function callBtnDone() {

fill(0, 200, 0);

rect(680, 20, 100, 50, 10);

fill(255);

textAlign(CENTER);

textSize(20);

text("DONE", 730, 52);

}



function mousePressed() {

if (scene == 1 && mouseX > 680 && mouseX < 780 && mouseY > 20 && mouseY < 70) {

scene = 2;

}

}





function keyPressed() {

if (key == '1') {

scene = 1

doScene1();

caughtScoops = [];

} else if (key == '2') {

scene = 2;

} else if (key == '3') {

scene = 3;

}

print("You are now on level " + scene);

}



function doScene1() {

createFreezeriaBG()

fill(255, 255, 255);

addCone(coneX, coneY);

for (let i = 0; i < caughtScoops.length; i++) {

circle(200 + coneX, 200 + coneY - (i * 30), scoopWidth);

}

circle(fallingScoop.x, fallingScoop.y, scoopWidth);

fallingScoop.y += 4;

if (fallingScoop.y > height) {

newGameSettings();

}

}



function checkCollider() {

let stackHeight = caughtScoops.length * 30;

let targetX = 200 + coneX;

let targetY = 200 + coneY - stackHeight;

let d = dist(fallingScoop.x, fallingScoop.y, targetX, targetY);



if (d < 40) {

caughtScoops.push({yOffset: stackHeight});

newGameSettings();

}



}



function doScene2() // ice cream

{

createFreezeriaBG()

fill(0);

textSize(30);

text("Add Your Toppings!", 400, 50);



// Draw the cone and scoops in a fixed position

let displayX = 200;

let displayY = 200;

addCone(displayX, displayY);



fill(255);

for (let i = 0; i < caughtScoops.length; i++) {

let scoopY = 200 + displayY - (i * 30);

circle(200 + displayX, scoopY, scoopWidth);



// If this is the TOP scoop, draw active toppings on it

if (i === caughtScoops.length - 1) {

let offset = -20;

for (let t of toppings) {

if (t.active) {

textSize(30);

text(t.emoji, 200 + displayX + offset, scoopY - 20);

offset += 25; // Space toppings out

}

}

}

}



// Draw Topping Selection Menu

for (let t of toppings) {

textSize(50);

text(t.emoji, t.x, t.y);

// Draw a green circle if the topping is active

if (t.active) {

noFill(); stroke(0, 255, 0); strokeWeight(3);

ellipse(t.x, t.y - 15, 60, 60); noStroke();

}

}



// Complete Order Button

fill(255, 100, 0);

rect(600, 500, 180, 60, 10);

fill(255);

textSize(20);

text("Complete Order", 690, 535);

}



// --- SCENE 3: FINAL ---

function doScene3() {

background(100, 200, 255);

fill(255);

textSize(50);

text("Order Served! ✅", 400, 300);

textSize(20);

text("Press '1' to play again", 400, 400);

}



// --- INPUTS ---

function mousePressed() {

// Scene 1 "Done" Button

if (scene == 1 && mouseX > 680 && mouseX < 780 && mouseY > 20 && mouseY < 70) {

scene = 2;

}



// Scene 2 Topping Selection

if (scene == 2) {

for (let t of toppings) {

if (dist(mouseX, mouseY, t.x, t.y) < 40) {

t.active = !t.active; // Toggle topping

}

}

// "Complete Order" Button

if (mouseX > 600 && mouseX < 780 && mouseY > 500 && mouseY < 560) {

scene = 3;

}

}

}



function newGameSettings() {

fallingScoop = createVector(random(100, 700), -50);

}



function addCone(x, y) {

triangle(160 + x, 200 + y, 240 + x, 200 + y, 200 + x, 350 + y);

}