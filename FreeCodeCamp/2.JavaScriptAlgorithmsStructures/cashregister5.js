const coins = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};

function cidTotal(cid) {
    return cid.reduce(function (acc, curr) {
        return acc + curr[1]*100;
    }, 0.0)/100;
}

function checkCashRegister(price, cash, cid) {
    let res = {
        status: "OPEN",
        change: []
    };
    let changeNeeded = (cash - price)*100;
    //console.log(changeNeeded);
    console.log(cidTotal(cid));
    if ((cidTotal(cid)*100)==changeNeeded){
        res.status = "CLOSED";
        res.change = cid;
    }


    for (let i = cid.length - 1; i >= 0 && changeNeeded > 0; --i) {
        let unitValue = (coins[cid[i][0]]);
        //console.log(unitValue);
        let unitQuantity = ((cid[i][1] / unitValue)*100);
        //console.log(unitQuantity);

        if (unitQuantity > 0 && unitValue <= changeNeeded) {
            let numUnits = Math.floor(changeNeeded/unitValue);
            //console.log(numUnits);

            if (numUnits > unitQuantity) {
                numUnits = unitQuantity;
            }
            let unitsValue = numUnits*unitValue;
            //console.log(unitsValue);
            res.change.push([cid[i][0], (unitsValue/100)]);
            //console.log(res.change);
           changeNeeded -= unitsValue;
        }
    }

    if (changeNeeded > 0) {
        res.status = "INSUFFICIENT_FUNDS";
        res.change = [];
    }

   /* if () {
        res.status = "CLOSED";
        res.change =
    } */

    console.log(res);
    return res;
}

 checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]) 

/* should
return {
    status: "INSUFFICIENT_FUNDS",
    change: []
}. */

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
//should return { status: "OPEN", change: [["QUARTER", 0.5]] }

/* checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]) */
/* should return 
{ status: "OPEN",
    change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04]
    ]
}*/