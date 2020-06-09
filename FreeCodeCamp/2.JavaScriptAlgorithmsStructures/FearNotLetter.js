function fearNotLetter(str) {
    //
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    let x = alph.indexOf(str[0]);
    while (i<str.length){
        if (alph[x]==str[i]){
            x++;
            i++;}
        else {return alph[x];}
        }
        return undefined;
    }


//find where in alphabet str starts
//find if letter is missing

console.log(fearNotLetter("abce"));

console.log(fearNotLetter("abce")); 
//should return "d".
console.log(fearNotLetter("abcdefghjklmno")); 
//should return "i".
console.log(fearNotLetter("stvwx")); 
//should return "u".
console.log(fearNotLetter("bcdf")); 
//should return "e".
console.log(fearNotLetter("bcdef"));
console.log(fearNotLetter("defghj"));

