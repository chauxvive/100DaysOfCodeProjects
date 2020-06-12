function smallestCommons(arr) {
        let range = [];
        if (arr[0]<arr[1]){
            for (let i = arr[0]; i <= arr[1]; i++) {
                range.push(i);
            }
        }
        else {
            for (let i = arr[1]; i <= arr[0]; i++) {
                range.push(i);
            }
        }    

        let multiple = (arr[0]*arr[1]);


        function gcd(a,b){
            return !b ? a: gcd(b,a%b);
        }

        function lcm(a, b) {
            return (a * b) / gcd(a, b);
        }

        range.forEach(function (n) {
            multiple = lcm(multiple, n);
        });

        console.log(multiple);




        // let j=(range.length-2);
        // while(j>0){
        //     if(multiple%range[j]!=0){
        //         multiple = multiple*range[j];
        //         }
        //     console.log(multiple);
        //     j--;
        // }


    } 


smallestCommons([1, 5]);
/// 5*4*3*2


//smallestCommons([1, 5]) 
//should return a number.
//smallestCommons([1, 5]) 
//should return 60.
//smallestCommons([5, 1]) 
//should return 60.
//1,2,3,4,5
//5*

smallestCommons([2, 10]) 
//should return 2520.
//2*10*9*8*7*6*5*4*3

smallestCommons([1, 13]) 
//should return 360360.
smallestCommons([23, 18]) 
//should return 6056820.

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
//that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.