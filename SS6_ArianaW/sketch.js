const dressingRoomX = 1;
const dressingRoomY = 349;

function setup() {
  createCanvas(1000, 600);
}

let DressUpUI = [{
  emoji: '👜',
  active: true,
  x: 200, 
  y: 450
}, {
  emoji: '💾',
  active: true,
  x: 300,
  y: 400
},];


let DressUpItems = [{
  emoji: '👕',
  active: true,
  x: 200, 
  y: 450
}, {
  emoji: '👖',
  active: true,
  x: 300,
  y: 400
}, {
  emoji: '👓',
  active: true,
  x: 300,
  y: 400
},{
  emoji: '👠',
  active: true,
  x: 300,
  y: 400
}];


function draw() {
  background(220);
  playerDressingRoom();
}



function playerDressingRoom() {
  strokeWeight(1);
  rect(dressingRoomX, dressingRoomY, 150, 250);
}




function mouseClicked() {
  let shirt = DressUpItems[0];
  let pants = DressUpItems[1];
  let glasses = DressUpItems[2];
  let shoes = DressUpItems[3];
}