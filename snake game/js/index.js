// Game constants and variables
let direction = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArray = [{x: 13, y: 15}];

// Game functions
function main(ctime)
{
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine()
{
    // Part 1: Updating the snake array & food

    // Part 2: Display the snake and food
    board.innerHTML = "";
    snakeArray.forEach((e, index)=>
    {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}

// Main logic starts here
window.requestAnimationFrame(main);