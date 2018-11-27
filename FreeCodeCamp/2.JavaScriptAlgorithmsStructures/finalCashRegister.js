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
        return acc + curr[1] * 100;
    }, 0.0) / 100;
}

function checkCashRegister(price, cash, cid) {
    let res = {
        status: "OPEN",
        change: []
    };
    //console.log(cid);
    let changeNeeded = (cash - price) * 100;
    //console.log(changeNeeded);
    //console.log(cidTotal(cid));
    if ((cidTotal(cid) * 100) == changeNeeded) {
        res.status = "CLOSED";
        res.change = cid;
    }

    else {
    for (let i = cid.length - 1; i >= 0 && changeNeeded > 0; --i) {
        let unitValue = (coins[cid[i][0]]);
        //console.log(unitValue);
        let unitQuantity = ((cid[i][1] / unitValue) * 100);
        //console.log(unitQuantity);

        if (unitQuantity > 0 && unitValue <= changeNeeded) {
            let numUnits = Math.floor(changeNeeded / unitValue);
            //console.log(numUnits);

            if (numUnits > unitQuantity) {
                numUnits = unitQuantity;
            }
            let unitsValue = numUnits * unitValue;
            //console.log(unitsValue);
            res.change.push([cid[i][0], (unitsValue / 100)]);
            //console.log(res.change);
            changeNeeded -= unitsValue;
        }
    }

    if (changeNeeded > 0) {
        res.status = "INSUFFICIENT_FUNDS";
        res.change = [];
    }}

    console.log(res);
    return res;
}

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


/*should
return {
    status: "CLOSED",
    change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]
}. */
