
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