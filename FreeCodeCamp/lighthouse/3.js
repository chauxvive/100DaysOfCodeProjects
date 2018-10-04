//short word: this exercise made me angry. it was NOT helpful about testing or error messages. Very frustrating.


function countRows() {
    return GRID.length
}

function countColumns() {
    return GRID[0].length
}


function gridSize() {
    return countColumns().toString() + " x " + countRows().toString();
}


//function gridSize() {
//    let columns = countColumns().toString;
//    let rows = countRows().toString;
//    let result = rows + " x " + columns;
//    return result
//return `${countColumns(GRID)} x ${countRows(GRID)};`
//}