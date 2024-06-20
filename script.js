// 獲取所需的元素
const hole = document.getElementById('hole');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30; // 遊戲時間，以秒為單位

// 更新分數和時間顯示
function updateDisplay() {
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
}

// 時間倒數
function countdown() {
    const countdownInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000);
}

// 地鼠移動
function moveMole() {
    const x = Math.random() * (window.innerWidth - hole.offsetWidth);
    const y = Math.random() * (window.innerHeight - hole.offsetHeight);
    hole.style.transform = `translate(${x}px, ${y}px)`;
}

// 結束遊戲
function endGame() {
    alert('遊戲結束！你的分數是：' + score);
}

// 點擊地鼠時增加分數
hole.addEventListener('click', () => {
    score++;
    updateDisplay();
});

// 遊戲初始化
function startGame() {
    updateDisplay();
    setInterval(moveMole, 2000); // 每隔一段時間移動地鼠
    countdown();
}

// 遊戲初始化
startGame();