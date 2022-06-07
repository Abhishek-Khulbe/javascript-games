const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 650;
const ballDiameter = 25;
let timerId;
let xDirection;
let yDirection;

const userStart = [330, 160];
let currentPosition = userStart;

const ballStart = [372.5, 180];
let ballCurrentPosition = ballStart;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

// all my blocks
const blocks = [
  new Block(110, 420),
  new Block(220, 420),
  new Block(330, 420),
  new Block(440, 420),
  new Block(550, 420),
  new Block(110, 395),
  new Block(220, 395),
  new Block(330, 395),
  new Block(440, 395),
  new Block(550, 395),
  new Block(110, 370),
  new Block(220, 370),
  new Block(330, 370),
  new Block(440, 370),
  new Block(550, 370),
];

// draw my block
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.append(block);
  }
}

addBlocks();

// add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.append(user);

// draw the user
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

// draw the ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 110) {
        currentPosition[0] -= 10;
        console.log(currentPosition[0] > 0);
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        console.log(currentPosition[0]);
        drawUser();
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.append(ball);

// move ball
function moveBall(){
  ballCurrentPosition[0]+=2;
  ballCurrentPosition[1]+=2;
  drawBall();
}

timerId = etInterval(moveBall, 30);

// check for collisions
function checkForCollisions(){
  // check for wall collisions
  if(ballCurrentPosition[0] >= (boardWidth - ballDiameter))
  {
    changeDirection();
  }
}

// change direction of ball
function changeDirection(){
  if(xDirection == 2 && yDirection == 2)
  {
    yDirection = -2;
  }
}