function sumFibs(num) {
   let newFibb = 1;
   let fibArray = [];
   let oddFibb = [1];


//cntl+K+C | cntl+K+U = comment/uncomment a block

// while (newFibb<num){
//     if(fibArray.length<2){
//         fibArray.push(1);
//     }
//     else{};
//     newFibb++;
// }

   while (newFibb<num){
       if(fibArray.length<2){
           fibArray.push(1);}
       else {
            newFibb=(fibArray[fibArray.length-1]+fibArray[fibArray.length-2]);
        }
       if (newFibb<num){
            fibArray.push(newFibb);
            }
        if ((newFibb%2==1)&&(newFibb<=num)){
            oddFibb.push(newFibb);
        }
        newFibb++;    
        } 
   
  let sum = oddFibb.reduce((a, b) => a + b, 0);
    //console.log(fibArray);
    //console.log(oddFibb);
    console.log(sum);
    return sum;


       // console.log(oddFibb);
        //console.log(fibArray);

}

//sumFibs[x]
//create fibonacci series into array < than number
//append to array any 

//sumFibs(1);

//sumFibs(4);
//1+1+2+3
//sumFibs(7);
//1,1,2,3,5

//sumFibs(9);



sumFibs(1) 
//should return a number. works.
sumFibs(1000) 
//should return 1785.
sumFibs(4000000) 
//should return 4613732.
sumFibs(4) 
//should return 5. works
sumFibs(75024) 
//should return 60696.
sumFibs(75025) 
//should return 135721.

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.