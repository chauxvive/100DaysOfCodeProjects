function sumPrimes(num) {
    let fullList = [2];
    let primesList = [];
    let newPrime;
    let i = 2;
    let j = 0;

   if (num=>2){
       while (i<=num){
        fullList.push(i);
        i++;
        }

        while (j<fullList.length){
            primesList.push(fullList[0]);
            fullList = fullList.filter(x => x % fullList[j] != 0);
        }
        

   }
    else if (num==1){
        return 1;
    }

    else {return undefined;}

    //loop through primesList and check that newPrime not divisable by any in list
    //if not, add to primesList
    
    
    
    // while (num > 1) {
    //     primes.push(num);
    //     num--;
    // }


 let sum = primesList.reduce((a, b) => a + b, 0);
 //console.log(primesList);
 console.log(sum);
 return sum;

}

sumPrimes(20);
//2,3,5,7

sumPrimes(10) 
//should return a number.
sumPrimes(10) 
//should return 17.
sumPrimes(977) 
//should return 73156.