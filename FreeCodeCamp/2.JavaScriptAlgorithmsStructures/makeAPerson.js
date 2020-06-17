var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return "";
    };
    return firstAndLast;
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