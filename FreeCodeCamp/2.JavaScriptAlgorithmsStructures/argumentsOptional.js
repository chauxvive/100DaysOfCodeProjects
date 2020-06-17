function addTogether(a, b) {
    if (arguments.length === 1) {
        if (Number.isInteger(a) === true) {
            return function (b) {
                if (Number.isInteger(b) === true) {
                    return a + b;
                } else {
                    return undefined;
                }
            }
        } else {
            return undefined;
        }
    } else {
        if (Number.isInteger(a) === true && (Number.isInteger(b) === true)) {
            return a + b;
        } else {
            return undefined;
        }
    }
}

addTogether(2, 3);
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