const dressingRoomX = 1;
const dressingRoomY = 349;

function setup() {
  createCanvas(1000, 600);
}


// Credit to BelleBunnik's Dress Up Asset Pack -> High-Fidelity version


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
  x: 500, 
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
  test();
  callPants();
  callGlasses();
  callShoes();
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
    
    let x = 700;
    let y = i * 80;
    textSize(50);
    text(DressUpItems[0].emoji, x, y);
  }
}

function callPants() {
  for (let i = 0; i < 4; i++) {
    
    let x = 600;
    let y = i * 80;
    textSize(50);
    text(DressUpItems[1].emoji, x, y);
  }
}

function callGlasses() {
  for (let i = 0; i < 4; i++) {
    
    let x = 500;
    let y = i * 80;
    textSize(50);
    text(DressUpItems[2].emoji, x, y);
  }
}


function callShoes() {
  for (let i = 0; i < 4; i++) {
    
    let x = 400;
    let y = i * 80;
    textSize(50);
    text(DressUpItems[3].emoji, x, y);
  }
}
