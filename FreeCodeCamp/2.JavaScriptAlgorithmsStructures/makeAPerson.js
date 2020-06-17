var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    var full = firstAndLast.split(" ");
    var first = full[0];
    var last = full[1];

    this.getFirstName = function () {
        return first;
    };

    this.getLastName = function () {
        return last;
    };

    this.getFullName = function () {
        return firstAndLast;
    };

    this.setFirstName = function (input) {
        full = input + " " + full[1];
        console.log(full);
        return full;
    }

    this.setLastName = function (input) {
        last = input;
        console.log(last);
    }
    this.setFullName = function (input) {
        full = input;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();



Object.keys(bob).length 
//should return 6.
bob instanceof Person 
//should return true.
bob.firstName 
//should return undefined.
bob.lastName 
//should return undefined.
bob.getFirstName() 
//should return "Bob".
bob.getLastName() 
//should return "Ross".
bob.getFullName() 
//should return "Bob Ross".

//bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell"). 
//bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry"). 
//bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry"). 
//bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry"). 
//bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").