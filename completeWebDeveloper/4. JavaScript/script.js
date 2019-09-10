alert("hello from js");

let first = prompt("What's your first name?");
let last = prompt("what's your last name?");
//let age = prompt("what's your age?");
console.log("hello there " + first + " " + last );
console.log("I know you are " + age + " years old.")



var age = Number(prompt("what's your age?"));

if (age < 0) {
    console.log("I don't think so.")
}

//if (age % 2 = 1) {
//    console.log("hey, your age is odd")
//}

//if (Math.sqrt(age) % 1 === 0) {
//    console.log("whoa, a perfect square")
//}

//if (age < 18) {
//    console.log("sorry, no good")
//}

//else if (age < 21) {
//    console.log("You can enter, but no drinks")
//}

//else if (age = 21) {
//    console.log("hey, welcome to the big leagues!"
//}

else {
    console.log("Come in for a drink, mate")
}