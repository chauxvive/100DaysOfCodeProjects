function uniteUnique(...arr) {
    let noDupes = [].concat(...arr);
    let outDupes = [...new Set(noDupes)];
    return outDupes;
}


    //let newArr = [...arr];
    //const newArr = arr.map(x => x * 2)
    //let i = 0;
    //while (0<arr.length){

//    }
//    let noDupes = [].concat(arr);
//    console.log(noDupes);
   // return arr;

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
//should return [1, 3, 2, 5, 4].
//uniteUnique([1, 2, 3], [5, 2, 1]) 
//should return [1, 2, 3, 5].
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
//should return [1, 2, 3, 5, 4, 6, 7, 8].


//1. loop through arrays in arrays + concat together

// [...arr] --> this doesn't work.