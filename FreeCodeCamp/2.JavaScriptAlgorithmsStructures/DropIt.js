function dropElements(arr, func) {
    console.log(arr);
    console.log(func);
    arr = arr.shift(n => func);
    console.log(arr);
    return arr;
}


//.shift



// while (j < fullList.length) {
//     primesList.push(fullList[0]);
//     fullList = fullList.filter(x => x % fullList[j] != 0);
// }

//const result = words.filter(word => word.length>6);




dropElements([1, 2, 3], function (n) {
    return n < 3;
});

dropElements([1, 2, 3, 4], function (n) {return n >= 3;}) 
//should return [3, 4].

//dropElements([0, 1, 0, 1], function (n) {return n === 1;}) 
//should return [1, 0, 1].

//dropElements([1, 2, 3], function (n) {return n > 0;}) 
//should return [1, 2, 3].

//dropElements([1, 2, 3, 4], function (n) {return n > 5;}) 
//should return [].

//dropElements([1, 2, 3, 7, 4], function (n) {return n > 3;}) 
//should return [7, 4].

//dropElements([1, 2, 3, 9, 2], function (n) {return n > 2;}) 
//should return [3, 9, 2].


//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
//until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
