function spinalCase(str){
    console.log(str.replace(/[\.\s_-]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
///[\s_]/g: brackets because it's an array, find all whitespace, dashes, and underscores and replace with dashes
// don't forget they need to be in right order!

//phone number capture group: (\d{3})-(\d{3})-(\d{4})
//creates capture groups: $1-$2-$3
}

spinalCase('This Is Spinal Tap');
spinalCase('ThisIsSpinalTap');
spinalCase("thisIsSpinalTap");
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")