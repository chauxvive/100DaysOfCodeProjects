    const coins = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    function checkCashRegister(price, cash, cid) {
        //initialize and define change variable
        let change = cash - price;
        const response = {
            status: "",
            change: []
        };

        const drawerCash = Math.round(cid.reduce(function (total, current) {
            return total + current[1];
        }, 0.0)*100)/100;
        //drawerCash == Math.round(drawerCash* 100) / 100;

        response.change = change;
        if (change == 0) {
            response.status = "CLOSED";
            response.change = [];

        } else if (change > drawerCash) {
            response.status = "INSUFFICIENT FUNDS";
            response.change = [];

        } else {
            response.status = "OPEN";
            response.change = [];
            for (var amount = cid.length - 1; amount >= 0 && change > 0; --amount) {
                var quantity = coins[cid[amount][0]];
                var unitNum = cid[amount][1] / quantity;
                    if (unitNum>0 && quantity<=change) {
                    var howMany = change / quantity;
                    if (howMany > unitVal) {
                        howMany = unitVal;
                    }
                    var unitsTotal = howMany * quantity;
                response.change.push([cid[amount][0], quantity]);
                    change -= unitsValue;
                    return change;
                    response.change.push(howMany);
                }
            }
        }

        // Here is your change, ma'am.

        console.log(change);
        console.log(drawerCash);
        console.log(response);
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