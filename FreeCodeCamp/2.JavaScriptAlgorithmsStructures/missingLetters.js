function fearNotLetter(str) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    console.log(str);
    if (alph.indexOf(str) >=0){
        console.log(undefined);
        return undefined;
    }
    else { return str;}
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvw");


//will have to check against full alphabet and see if 