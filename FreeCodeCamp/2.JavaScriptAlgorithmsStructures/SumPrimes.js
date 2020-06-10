function sumPrimes(num) {
    let primesList = [2];
    let newPrime;
    let i = 2;
    let x = 0;

    if (num==1){
        return 1;
    }
    else if (num ==2){
        return 2;
    }

    else if (num>2){
        //let max = Math.sqrt(num);
        while (i < num) {
            while (x < primesList.length) {
                if (i % primesList[x] != 0) {
                    primesList.push(i);
                }
                x++;
            }
        i++;
        }
    }

    else {return undefined;}

    //loop through primesList and check that newPrime not divisable by any in list
    //if not, add to primesList
    
    
    
    // while (num > 1) {
    //     primes.push(num);
    //     num--;
    // }
    
    
    
    console.log(primesList);


 let sum = primesList.reduce((a, b) => a + b, 0);
 console.log(sum);
 return sum;

}

sumPrimes(10);
//2,3,5,7

//sumPrimes(10) 
//should return a number.
//sumPrimes(10) 
//should return 17.
//sumPrimes(977) 
//should return 73156.