﻿alert("Hey world");
/*
var t1 = [
	[x, 1, 2,],
	[2, x, 1],
	[1, 2, x],
];

 var t2 = [
	[x,1,1],
	[3,x,2],
	[1,2,x],
 ]

 var t3 = [
	[x,1,2],
	[1,x,1],
	[1,3,x],
 ]
 
 var x0 = [
	[x,1,2,3], //pozn 3.
	[3,x,1,2],
	[2,3,x,1], //pozn. 1.
	[1,2,4,x], //pozn. 3.
]

 var xpp1 = [
	[x,3,4,4],
	[3,x,2,3],
	[2,2,x,1],
	[1,1,1,x],
]

 var xp1 = [
	[x,1,2,2],
	[1,x,1,1],
	[4,4,x,3],
	[2,3,3,x],
]

 var xp2 = [
	[x,1,1,1],
	[4,x,3,4],
	[3,3,x,2],
	[1,2,2,x],
]

 var xp3 = [
	[x,3,4,4],
	[3,x,2,3],
	[2,2,x,1],
	[1,1,1,x],
]
 var xp4 = [
	[x,2,3,3],
	[2,x,1,2],
	[1,1,x,1],
	[1,1,1,x],
]
/*
 var xp3 = [
	[,,,],
	[,,,],
	[,,,],
	[,,,],
]
*/

var maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
	
});
console.log(sortable);
