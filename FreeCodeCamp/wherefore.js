function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = Object.keys(source);
    console.log(arr);

    return collection.filter(function (item) {
        return keys.every(function (key) {
            return source[key] == item[key];
        });
});


// Only change code above this line
   // return arr;
}

console.log (whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}));