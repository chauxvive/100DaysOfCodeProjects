    const GRID = [
        ["", "", "", "^", "", "", "", "", "", ""],
        ["", "", "v", "", "~", "", "", "", "", ""],
        ["", "v", "", "", "^", "^", "", "", "", ""],
        ["", "", "", "", "^", "^", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "v", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "^", "~", "~", "", "", "", "^", "", ""],
        ["", "^", "", "~", "~", "", "", "", "", ""],
        ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

function countRows() {
    return GRID.length
}

function countColumns() {
    return GRID[0].length
}


function gridSize() {
    return countColumns().toString() + " x " + countRows().toString();
}

function totalCells() {
    return countColumns() * countRows();
}

function convertColumn(i) {
    let x = i.split("");
    let a = x[0];
    switch (a) {
        case "A":
            return 0
            break;
        case "B":
            return 1
            break;
        case "C":
            return 2
            break;
        case "D":
            return 3
            break;
        case "E":
            return 4
            break;
        case "F":
            return 5
            break;
        case "G":
            return 6
            break;
        case "H":
            return 7
            break;
        case "I":
            return 8
            break;
        case "J":
            return 9
            break;
        case "K":
            return 10
            break;
        case "L":
            return 11
            break;
        case "M":
            return 12
            break;
        case "N":
            return 13
            break;
        case "O":
            return 14
            break;
        case "P":
            return 15
            break;
        case "Q":
            return 16
            break;
        case "R":
            return 17
            break;
        case "S":
            return 18
            break;
        case "T":
            return 19
            break;
        case "U":
            return 20
            break;
        case "V":
            return 21
            break;
        case "W":
            return 22
            break;
        case "X":
            return 23
            break;
        case "Y":
            return 24
            break;
        case "Z":
            return 25
            break;
        default:
            return x
    }
}

function lightCell(a) {
    let x = a.split("");
    let b = x[1]
    let c = GRID[convertColumn(a)]
    return c[2].toString();
}

console.log(lightCell('B1'));
