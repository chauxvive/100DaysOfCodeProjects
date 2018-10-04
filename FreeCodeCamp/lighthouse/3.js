function gridSize() {
    const y = GRID.length;
    console.log(y);
    const x = GRID[0].length;
    const sandwich = `${y} + ${x}`;
    console.log(typeof sandwich);
    return sandwich;
}

function gridSize2() {
    return `${GRID[0].length} x ${GRID.length};`
}

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


 console.log(gridSize2(GRID));