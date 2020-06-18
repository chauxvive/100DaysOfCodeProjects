function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
   

    // for (var i=0; i<arr.length; i++){
    //     console.log(arr[i].avgAlt);
    // }

    GM = Math.round(GM);
    earthRadius= Math.round(earthRadius);

   console.log(GM);

    arr.forEach(function(satelite){
        //satelite.planet = true;
        //satelite.orbitalPeriod = earthRadius + satelite.avgAlt;
        let R = earthRadius+Math.round(satelite.avgAlt);
        //console.log(R);
        
        //console.log(Math.pow(2,2));

        satelite.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(((Math.pow(R, 3)/GM))))

        //satelite.orbitalPeriod = Math.sqrt((4*(Math.PI^2)*(R^3))/GM)
        //satelite.orbitalPeriod = 2 * Math.PI * Math.sqrt(R ^ 3 / GM);
        //satelite.orbitalPeriod = Math.round((2*Math.PI*Math.sqrt((R^3)/GM))

        //satelite.orbitalPeriod = 2*Math.PI * sqrt((earthRadius+satelite.avgAlt) ^ 3 / GM);
        //T =2*pi*sqrt(r^3/GM);
        // (T^2)/(R^3) = (4+ (pi^2))/GM
        //r = earthRadius+avgAlt;
        delete satelite.avgAlt;
    });

    console.log(arr);

    return arr;
}

// (T^2)/(R^3) = (4+ (pi^2))/GM
//



// T = period of the satellite;
// R - average radius of orbit;
//T =2*pi*sqrt(r^3/GM);
//r = earthRadius+avgAlt;


orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]) ;
//should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}]) ;
//should return [{name: "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].



//Return a new array that transforms the elements ' average altitude into their orbital periods (in seconds).

//The array will contain objects in the format {
//    name: 'name',
//    avgAlt: avgAlt
//}.

//You can read about orbital periods on Wikipedia.
//The values should be rounded to the nearest whole number.The body being orbited is Earth.
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s - 2.


// (T^2)/(R^3) = (4+ (pi^2))/GM
// T = period of the satellite
// R - average radius of orbit


//

//math.PI