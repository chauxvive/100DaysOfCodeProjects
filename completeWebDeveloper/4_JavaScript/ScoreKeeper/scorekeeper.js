var p1button = document.querySelector("#p1");
var playerTwo = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numInput = document.querySelector('input');
var winningScoreDisplay = document.getElementById("winning");

var gameOver = false;
var winningScore = 5;

console.log(winning);

var p1score = 0;
var p2score = 0;

p1button.addEventListener("click", function(){
    if (!gameOver){
        p1score++;
        if(p1score == winningScore){
            gameOver = true;
            p1display.classList.add("winner");
        }
        p1display.innerHTML = p1score;
    }
});

playerTwo.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        if (p2score == winningScore) {
            gameOver = true;
            p2display.classList.add("winner");
        }
        p2display.innerHTML = p2score;
    }
    });

reset.addEventListener("click", function () {
   resetting();
});

numInput.addEventListener("change", function () {
    winningScoreDisplay.innerHTML = numInput.value;
    winningScore = numInput.value;
    resetting();
});

function resetting(){
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.innerHTML = p1score;
    p2display.innerHTML = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");

};

console.log(resetting);
        