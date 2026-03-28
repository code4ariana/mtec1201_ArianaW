function setup() {
  createCanvas(600, 600);
}

// Inspried by Boba Run
// enLargen Boba with a click by Ariana Walcott


let size = 50; // our variable for size, initialized at 50


function draw() {
  background(220);
  playerCircle(50, 20, 50);
  textSize(30);
  text("click to enlargen the tapoica pearl", 70, 50)
}


function playerCircle(x, y) {
  fill("black") // fills the circle to black automatically
  circle(mouseX, mouseY, size); // uses mouseX and mouseY to track mouse movement
}


function mousePressed() { //
  size += 5 // each click increments by 5
  
  if (size > 255) { // if boba gets too big, it resets size to 1
    size = 1;
  }
}