// Canvas Setup
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Game Sounds
const bgMusic = document.getElementById("bg-music");
const failSound = document.getElementById("fail-sound");
const eatSound = document.getElementById("eat-sound");

// Failure Message and Score Elements
const startMessage = document.getElementById("start-message");

let failureCount = 0;
const segmentSize = 50;
let snake, food, direction, gameInterval, gameRunning = false;



// Initialize Game
function initGame() {
    snake = [{ x: 250, y: 250 }];
    direction = { x: 0, y: 0 };
    placeFood();
    drawGame();
    startMessage.style.display = "block";
    gameRunning = false;
}

// Place Food Randomly
function placeFood() {
    const randomPosition = () => Math.floor(Math.random() * (canvas.width / segmentSize)) * segmentSize;
    food = { x: randomPosition(), y: randomPosition() };
}

// Draw Game Elements
function drawGame() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.forEach(part => {
        ctx.fillStyle = "#3498db";  // Snake Color
        ctx.fillRect(part.x, part.y, segmentSize, segmentSize);
    });

    ctx.fillStyle = "#e74c3c";  // Food Color
    ctx.fillRect(food.x, food.y, segmentSize, segmentSize);
}

// Start the Game
function startGame() {
    if (gameRunning) return;

    direction = randomDirection();  
    startMessage.style.display = "none";  
    
    bgMusic.volume = 0.5;  
    bgMusic.play();  

    gameRunning = true;
    gameInterval = setInterval(() => {
        moveSnake();
        drawGame();
    }, 500);
}

// Stop the Game
function stopGame() {
    clearInterval(gameInterval);
    gameInterval = null;
    gameRunning = false;

    bgMusic.pause();
    bgMusic.currentTime = 0;

    initGame();
}

// Random Initial Direction
function randomDirection() {
    const directions = [
        { x: 0, y: -segmentSize },  
        { x: 0, y: segmentSize },   
        { x: -segmentSize, y: 0 },  
        { x: segmentSize, y: 0 }    
    ];
    return directions[Math.floor(Math.random() * directions.length)];
}

// Move Snake
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        placeFood();  
        eatSound.play();  
    } else {
        snake.pop();  
    }

    if (
        head.x < 0 || head.y < 0 ||
        head.x >= canvas.width || head.y >= canvas.height ||
        snake.slice(1).some(part => part.x === head.x && part.y === head.y)
    ) {
        failSound.play();  
        stopGame();  
    }
}

// Handle Key Presses
window.addEventListener("keydown", event => {
    if (gameRunning && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === " " && gameRunning) stopGame();  

    if (event.key === "ArrowUp" && direction.y === 0) direction = { x: 0, y: -segmentSize };
    if (event.key === "ArrowDown" && direction.y === 0) direction = { x: 0, y: segmentSize };
    if (event.key === "ArrowLeft" && direction.x === 0) direction = { x: -segmentSize, y: 0 };
    if (event.key === "ArrowRight" && direction.x === 0) direction = { x: segmentSize, y: 0 };
});

// Register Button Clicks
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("stop-btn").addEventListener("click", stopGame);

// Add Button Listeners for Controls
document.getElementById("left-btn").addEventListener("click", () => {
    if (direction.x === 0) direction = { x: -segmentSize, y: 0 };
});

document.getElementById("up-btn").addEventListener("click", () => {
    if (direction.y === 0) direction = { x: 0, y: -segmentSize };
});

document.getElementById("down-btn").addEventListener("click", () => {
    if (direction.y === 0) direction = { x: 0, y: segmentSize };
});

document.getElementById("right-btn").addEventListener("click", () => {
    if (direction.x === 0) direction = { x: segmentSize, y: 0 };
});


// Initialize the Game on Page Load
initGame();
