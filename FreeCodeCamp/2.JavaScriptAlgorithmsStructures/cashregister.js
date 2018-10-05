function checkCashRegister(price, cash, cid) {
    //initialize and define change variable
    const change = cash - price;
    const response = {
        status: "",
        change: []
    };

    const drawerCash = cid.reduce(function (total, current) {
        return total + current[1];
    }, 0);

    const coins = [
        {"PENNY", 0.01 },
        {"NICKEL", 0.05},
        {"DIME", 0.1},
        {"QUARTER", 0.25},
        {"ONE", 1},
        {"FIVE", 5},
        {"TEN", 10},
        {"TWENTY", 20},
        {"ONE HUNDRED", 100}
    ]

    


    response.change = change;
    if (change == 0) {
        response.status = "CLOSED";
    } else if (change > drawerCash) {
        response.status = "INSUFFICIENT FUNDS";
    } else {
        response.status = "OPEN";
    }

    // Here is your change, ma'am.

    /* console.log(change);
     console.log(drawerCash); */
    return (response);
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

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);