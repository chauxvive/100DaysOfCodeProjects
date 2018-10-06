var UNITS = {
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

function sumCid(cid) {
    return cid.reduce(function (acc, curr) {
        return acc + curr[1];
    }, 0.0);
}

function checkCashRegister(price, cash, cid) {
    var ret = {
        status: "OPEN",
        change: []
    };
    var pendingDiff = cash - price;

    for (var cuidx = cid.length - 1; cuidx >= 0 && pendingDiff > 0; --cuidx) {
        var unitValue = UNITS[cid[cuidx][0]];
        var unitQuantity = cid[cuidx][1] / unitValue;

        if (unitQuantity > 0 && unitValue <= pendingDiff) {
            var numUnits = pendingDiff / unitValue;
            if (numUnits > unitQuantity) {
                numUnits = unitQuantity;
            }
            var unitsValue = numUnits * unitValue;
            ret.change.push([cid[cuidx][0], unitsValue]);
            pendingDiff -= unitsValue;
        }
    }

    if (pendingDiff > 0) {
        ret.status = "INSUFFICIENT_FUNDS";
        ret.change = [];
    }

    console.log(ret);

    return ret;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

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