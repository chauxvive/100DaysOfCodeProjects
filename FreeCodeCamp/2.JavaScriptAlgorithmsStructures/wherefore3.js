function whatIsInAName(collection, source) {
    var arr = [];
    arr = Object.keys(source);
    console.log(arr);

    return collection.filter(function (item) {
        return keys.every(function(key) {
            return source[key] == item[key];
        });
    });
}

console.log(whatIsInAName([{
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


function whatIsInAName(collection, source) {
    var keys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        for (var i = 0; i < keys.length; i++) {
            if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
                return false;
            }
        }
        return true;
    });
}

// test here
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