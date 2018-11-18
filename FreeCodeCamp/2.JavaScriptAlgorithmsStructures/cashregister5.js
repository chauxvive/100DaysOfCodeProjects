const coins = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

function cidTotal(cid) {
    return cid.reduce(function (acc, curr) {
        return acc + curr[1];
    }, 0.0);
}

function checkCashRegister(price, cash, cid) {
    let res = {
        status: "OPEN",
        change: []
    };
    let changeNeeded = parseFloat((cash - price).toFixed(10));
    console.log(changeNeeded);

    for (let i = cid.length - 1; i >= 0 && changeNeeded > 0; --i) {
        let unitValue = parseFloat(coins[cid[i][0]]);
        //console.log(unitValue);
        let unitQuantity = parseFloat((cid[i][1] / unitValue).toFixed(10));
        //console.log(unitQuantity);

        if (unitQuantity > 0 && unitValue <= changeNeeded) {
            let numUnits = changeNeeded/unitValue;

            if (numUnits > unitQuantity) {
                numUnits = unitQuantity;
            }
            let unitsValue = numUnits*unitValue;
            console.log(unitsValue);
            res.change.push([cid[i][0], unitsValue]);
            console.log(res.change);
           changeNeeded -= unitsValue;
        }
    }

    if (changeNeeded < 0) {
        res.status = "INSUFFICIENT_FUNDS";
        res.change = [];
    }

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