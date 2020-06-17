function addTogether(a, b) {

   if (addTogether.arguments.length==1){
        if (Number.isInteger(a)===true){
            return function (b) {
                console.log(a + b);
                return a + b;
            };
        }
        else {
            console.log(undefined);
            return undefined;
            }
        }
    else {
        if (Number.isInteger(a)===true&&Number.isInteger(b)===true){
            console.log(a+b);
            return a+b;
        }
        else {
            console.log(undefined);
            return undefined;
        }
    }

   
   
   
   
   
    // if (Number.isInteger(a)===true&&Number.isInteger(b)===true){
    //     console.log(a+b);
    //     return a+b;
    // }
    // else if (addTogether.arguments.length>1&&(Number.isInteger(a)===false|Number.isInteger(b)===false)){
    //     console.log(undefined);
    //     return undefined;}
    // else if (addTogether.arguments.length==1&&Number.isInteger(a)===false){
    //     console.log(undefined);
    //     return undefined;}
    // else if (addTogether.arguments.length == 1&&Number.isInteger(a)===true){
    //     console.log("b is missing.");
    // }


}


//addTogether(2);    


addTogether(2, 3);
//should return 5.*

addTogether(23, 30);
//should return 53.
addTogether(5)(7);
//should return 12.
addTogether("http://bit.ly/IqT6zt"); 
//should return undefined
addTogether(2, "3") ;
//should return undefined.
addTogether(2)([3]) ;
//should return undefined.