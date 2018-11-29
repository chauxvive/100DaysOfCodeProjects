function countPositivesSumNegatives(input) {
    let pos = [];
    let neg = [];
    let posCount = 0;
    let negSum;
    for (i = 0; i < input.length; i++) {
        //console.log(input[i]);
        if (input[i] > 0) {
            pos.push(input[i]);
            posCount++;
        } else if (input[i]<=0) {
            //console.log(input[i]);
            neg.push(input[i]);
        }
        negSum = neg.reduce((a,b) => a+b, 0);

        //var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
        //console.log(sum); // 6

    }
    console.log(posCount);
    console.log(negSum);
    console.log([posCount, negSum])
    return [posCount, negSum];
}

 var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
 var actual = countPositivesSumNegatives(testData);