function steamrollArray(arr) {
    //console.log(arr);

    for (let i=0;i<arr.length; i++){
        while (Array.isArray(arr[i])===true){
            arr = [].concat(...arr);
         //   console.log(arr);
        }
    }

    return arr;    
    //console.log(arr);

    // if (Array.isArray(arr)===true){
    //     arr=[].concat(...arr);
    //     console.log(arr);
    // }
}

    

// console.log(Array.isArray(arr));    

// console.log(arr);    
// arr = [].concat(...arr);
// console.log(arr);
// console.log(typeof arr[3]);
//object


// for (let i=0; i<arr.length; i++){
//     if (typeof arr[i]=== "object"){
//         arr = [].concat(...arr);
//     }
// }
// console.log(arr);
// }

//if (typeof arr[3] === "object"){
//    let sam = [].concat(...arr);
//    console.log(sam);
//}


//while (arr.isArray===true){
//    arr = [].concat(...arr);}

//console.log(arr);

//     console.log(arr);
//     console.log(arr.flat());
//     console.log(arr.toString().split(","));
//     return arr.toString();




steamrollArray([1, [2], [3, [[4]]]]);

steamrollArray([[["a"]],[["b"]]]); 
//should return ["a", "b"].

steamrollArray([1, [2],[3, [[4]]]]) ;
//should return [1, 2, 3, 4].

steamrollArray([1, [],[3, [[4]]]]) ;
//should return [1, 3, 4].

steamrollArray([1, {},[3, [[4]]]]) 
//should return [1, {}, 3, 4].

//Flatten a nested array.You must account for varying levels of nesting.
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

//.reduce and .concat
