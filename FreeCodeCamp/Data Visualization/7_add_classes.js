< style >
    .bar {
        width: 25 px;
        height: 100 px;
        display: inline - block;
        background - color: blue;
    } </style> 
    <body >
    <script >
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    // Add your code below this line
    .attr("class", "bar");


// Add your code above this line
</script> <S/body>