const dressingRoomX = 1;
const dressingRoomY = 349;

function setup() {
  createCanvas(1000, 600);
}

let DressUpUI = [{
  emoji: '🛍️',
  active: true,
  x: 40, 
  y: 80
}, {
  emoji: '💾',
  active: true,
  x: 120,
  y: 80
},];

console.log(DressUpUI);

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


console.log(DressUpItems);

function draw() {
  background(220);
  playerDressingRoom();
  textSize(50);
  text(DressUpUI[0].emoji, DressUpUI[0].x, DressUpUI[0].y);
  textSize(30);
  text(DressUpUI[1].emoji, DressUpUI[1].x, DressUpUI[1].y);
}



function playerDressingRoom() {
  strokeWeight(1);
  rect(dressingRoomX, dressingRoomY, 150, 250);
}




function mouseClicked() {
  let shirtBtn = DressUpItems[0];
  let pantsBtn = DressUpItems[1];
  let glassesBtn = DressUpItems[2];
  let shoesBtn = DressUpItems[3];
  let shopBtn = DressUpUI[0];
  let saveBtn = DressUpUI[1];
}

function test() {
  for (let i = 0; i < 4; i++) {
   return
  }
}

