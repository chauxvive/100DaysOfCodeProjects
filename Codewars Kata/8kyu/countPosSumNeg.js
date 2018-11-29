//given an array, count the positive entries and sum the negative ones.
// ie [1,2,3,-4,-5] should return [3, -9]


function countPositivesSumNegatives(input) {
    let pos = [];
    let neg = [];
    let posCount = 0;
    let negSum;
    if (input == null || input.length == 0) 
        return [];
    for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            pos.push(input[i]);
            posCount++;
        } else if (input[i] <= 0) {
            neg.push(input[i]);
        }
        negSum = neg.reduce((a, b) => a + b, 0);
    }

    return [posCount, negSum];
}

//for (var i=0, i<input.length; ++i)
//{ if (input[i]>0)
//    ++pos;
//    else
//        neg += input[i];
//    }
//    return [pos, neg];