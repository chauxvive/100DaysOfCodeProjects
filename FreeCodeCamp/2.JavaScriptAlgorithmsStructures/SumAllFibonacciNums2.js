function sumFibs(num) {
    let Fibs =[1];
    let newFib = 1;


    let oldFib = Fibs[Fibs.length - 1];
    while (newFib<num){
    if (Fibs.length > 1){
        newFib = (Fibs[Fibs.length -2]+oldFib);}
        Fibs.push(newFib);
    console.log(Fibs);}
   
   
   //let sum = Fibs.reduce((a, b) => a + b, 0);
    //console.log(Fibs);
    //console.log(sum);
   // return num;
    }

//sumFibs[x]
//create fibonacci series into array < than number
//append to array any 

sumFibs(1);

sumFibs(4);
//1+1+2+3



//sumFibs(1) 
//should return a number.
//sumFibs(1000) 
//should return 1785.
//sumFibs(4000000) 
//should return 4613732.
//sumFibs(4) 
//should return 5.
//sumFibs(75024) 
//should return 60696.
//sumFibs(75025) 
//should return 135721.

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.