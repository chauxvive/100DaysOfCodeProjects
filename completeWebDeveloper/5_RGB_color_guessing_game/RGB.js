var num = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var again = document.getElementById("again");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? num = 3 : num = 6;
            reset();
        });
    }
    for (var i = 0; i < squares.length; i++) {
        //add click events to squares
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                colorChange(pickedColor);
                h1.style.backgroundColor = pickedColor;
                again.textContent = "Play again?";

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
    reset();
}



function reset(){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    again.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}

function colorChange(color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // color the squares
        squares[i].style.backgroundColor = color;
    //change color to pickedColor
}}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];}

function generateRandomColors(num){
    var arr = [];
    //create num colors
    for(var i=0; i<num; i++){
        //get random color
        arr.push(randomColor());
        //push into array
    }
    return arr;
}

function randomColor(){
    //pick red from 0-255
    var r = Math.floor(Math.random()*256);
    //pick green 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue fom 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+g+", "+b+")";
}


again.addEventListener("click", function () {
 reset();
});

