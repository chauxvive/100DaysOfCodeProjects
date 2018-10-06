< body >
    <
    script >
    // Add your code below this line
    const scale = d3.scaleLinear();



// Add your code above this line
const output = scale(50);
d3.select("body")
    .append("h2")
    .text(output); <
/script> <
/body>