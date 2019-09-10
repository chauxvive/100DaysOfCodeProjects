alert("js works");

let movies = [
    {name: "Moulin Rouge", 
    year: 2001, 
    stars: 5, 
    seen: "seen"},

    {name: "The Great Gatsby", 
    year: 2012, 
    stars: 4, 
    seen: "seen"},

    {name: "The Great Mouse Detective", 
    year: 1993, 
    stars: 4, 
    seen: "not seen"}
];

movies.forEach(function(movie){
    console.log("You have " + movie.seen + " " + movie.name + " - " + movie.stars + " stars");
});



function printReverse(word){
    for (var i = word.length-1; i>-1; i--){
        console.log(word[i]);
    }
}

function isUniform(array){
    return array.every((val, i, arr) => val === arr[0]);
  //.every() method tests whether all elements in array pass test implemented by provided function
    //isUniform([1,1,1]);
}

function sumArray(array){
    let total = 0;
    for (var i = 0; i<array.length; i++){
        total+=array[i];
    }
    return total;
}

function max(x){
    let total = 0;
    for (var i=0; i<x.length; i++){
        if (x[i] > total){
            total = x[i];
        }
    }
    return total;
}

//nums.forEach(function(num){\
//    console.log(num);    
//})

function myForEach(arr, func){
    for (var i=0; i<arr.length; i++){
        func(arr[i]);
    }
}

//Object oriented version, dot prototype
Array.prototype.myForEach = function(func){
    for(var i=0; i <this.length; i++){
        func(this[i]);
    }
};


for (var i = 10; i<41; i+=2){
    console.log(i);
}

for (var i = 5; i<51; i+=1){
    if((i%5==0)&&(i%3==0)){
        console.log(i);
    }
}

/* function isEven(x){
    if (x%2==0){
        console.log("yes")}
    else console.log("nope");
} */


function isEven(num){
    return num%2===0;
}

function factorial(x){
    var total = 1;
    for (var i = 1; i <=x; i++){
        total = total*i;
        }
    return total;
}


function kebabToSnake(kebab){
    var snake = kebab.replace(/-/g, "_");
    return snake;
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");


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
var secretNum = 4;

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