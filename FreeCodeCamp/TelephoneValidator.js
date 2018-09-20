/*function telephoneCheck(str) {
    // Good luck!
    if (str.length > 8) {
        return true;
    } else return false;
}

console.log(telephoneCheck("555-555-5555")); */



function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("1 555)555-5555"));