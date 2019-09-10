alert("js works");

var answer = prompt("Are we there yet?");
    /* while (answer !== "yes" && answer !== "yeah") {*/
       while (answer.indexOf("yes")<0){ 
        var answer = prompt("Are we there yet?");
    }
    alert("yay we're there!");


/*
console.log("print num between -10 and 19");
var num = -10;
while(num<20){
    console.log(num);
    num++;
}

console.log("print even nums between 10 and 40");
var num = 10;
while (num < 41) {
    console.log(num);
    num+=2;
}

console.log("print odds between 300 and 333");
var num = 300;
while (num<334){
    if (num%2==1){
    console.log(num)}
    num++;
}

 console.log("print all nums divisible by 5 AND 3 between 5 and 50");
 var num = 5;
while (num<51){
    if ((num % 5 == 0) && (num % 3 == 0)) {
        console.log(num)}
    num++
} 
  */  


//create a random number
var secretNum = 4

//ask user to guess
//var guess = Number(prompt("Guess a number"));

//check guess

//if (Number(guess) == secretNum){
//    alert("You win!");
//}
//else if (guess<secretNum){
//    alert("higher.")
//}
//else if (guess>secretNum){
//    alert("lower.")
//}
//else {
//    alert("Are you even trying?")
//}