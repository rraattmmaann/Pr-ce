/* alert("Hello World!"); */
var t1 = [
	[0,1,2],
	[2,0,1],
	[1,2,0],
];

 var t2 = [
	[0,1,1],
	[3,0,2],
	[1,2,0],
 ]

 var t3 = [
	[0,1,2],
	[1,0,1],
	[1,3,0],
 ]
 
 var x0 = [
	[[0,0],[1,2],[3,0],[4,1]], //pozn 3.
	[[3,1],[0,0],[1,2],[3,0]],
	[[2,0],[3,1],[0,0],[1,2]], //pozn. 1.
	[[1,2],[2,0],[4,1],[0,0]], //pozn. 3.
]
/*
	[[0,0],[1,2],[2,0],[4,1]], //pozn 3.
	[[3,1],[0,0],[1,2],[2,0]],
	[[2,0],[3,1],[0,0],[1,2]], //pozn. 1.
	[[1,2],[2,0],[4,1],[0,0]],
*/	
 var xpp1 = [
	[0,3,4,4],
	[3,0,2,3],
	[2,2,0,1],
	[1,1,1,0],
]
/*
var xpp2 = [
	[,,,]
	[,,,]
	[,,,]
	[,,,]
]
*/
 var xp1 = [
	[0,1,2,2],
	[1,0,1,1],
	[4,4,0,3],
	[2,3,3,0],
]

 var xp2 = [
	[0,1,1,1],
	[4,0,3,4],
	[3,3,0,2],
	[1,2,2,0],
]

 var xp3 = [
	[0,3,4,4],
	[3,0,2,3],
	[2,2,0,1],
	[1,1,1,0],
]
 var xp4 = [
	[0,2,3,3],
	[2,0,1,2],
	[1,1,0,1],
	[3,4,4,0],
]
 /*
 var xt = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16],
]
*/

function XjunctionFree(){				//funkce pro jednotlivé křižovatky
  alert("křižovatka typu T");		// pravděpodobně zde budou další 
									//switche, které budou odkazovat
									//na specifické případy
}

function XjunctionPreference(){
 // alert("Křižovatka typu X bez upravení přednosti v jízdě");
 //a - sloupec v tabulce (směr, kam auto jede) 
	var a =Math.floor(Math.random() * 4);	//kam auto pojede 
	var b =Math.floor(Math.random() * 4);
	var c =Math.floor(Math.random() * 4);
	var d =Math.floor(Math.random() * 4);
	var A = x0[0][a][0];						//kolikátý pojede
	var B = x0[1][b][0];
	var C = x0[2][c][0];
	var D = x0[3][d][0];
	console.log(a, b, c, d);
	console.log(A, B, C, D);
	sort();
}
/*	
}

function sort(){
	*/
function sortX(){
var maxSpeed = {
    a: A, 
    b: B, 
    c: C, 
    d: D,
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
	
});
console.log(sortable);

var qwe = [sortable[0][0][0], sortable[1][0][0], sortable[2][0][0],sortable[3][0][0]];
console.log(qwe);
// Qtype();
}
  
function Qtype(){
	if(sortable[2][1] = 0){
		choice();jav
	}else	if([qwe[0][1][0]  = qwe[1][1][0] = qwe[2][1][0] = qwe[3][1][0]]){
			choice();
	}	else if(qwe[1][1][0] = 0 && (qwe[2][1][1] = qwe[3][1][1] )){
			chodice();
	}
	}  
function drawX(A, B, C, D){


}

function TjunctionFree(){
  alert("Křižovatka typu T");
	Tfree = Math.floor(Math.random() * 3) + 1;
	switch(Tfree){
		case 1:
			TjunctionFree1();	
		case 2:
			TjunctionFree2();
		case 3:
			TjunctionFree3();
	}
}
function TjunctionFree1(){
	var a =Math.floor(Math.random() * 3);
	var b =Math.floor(Math.random() * 3);
	var c =Math.floor(Math.random() * 3);
	var A = t1[0][a];					
	var B = t1[1][b];
	var C = t1[2][c];
	sort();

}

function TjunctionFree2(){
	var a =Math.floor(Math.random() * 3);
	var b =Math.floor(Math.random() * 3);
	var c =Math.floor(Math.random() * 3);
	var A = t2[0][a];					
	var B = t2[1][b];
	var C = t2[2][c];
	sort();

}

function TjunctionFree3(){
	var a =Math.floor(Math.random() * 3);
	var b =Math.floor(Math.random() * 3);
	var c =Math.floor(Math.random() * 3);
	var A = t3[0][a];					
	var B = t3[1][b];
	var C = t3[2][c];
	sort();
}
function sortT(){
var maxSpeed = {
    a: A, 
    b: B, 
    c: C,
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
	
});
console.log(sortable);

var qwe = [sortable[0][0][0], sortable[1][0][0], sortable[2][0][0]];
console.log(qwe);
// Qtype();
}

function TjunctionPreference(){
  alert("Kruhový objezd");  
}

function roundabout(){
	alert("Křižovatka typu T z boku druhého");
}

function XjunctionPolice(){
	alert("Křižovatka X řízená policistou");
}

function TjunctionPolice(){
	alert("Křižovatka typu T řízená policistou");
}

function XjunctionLights(){
	alert("křižovatka typu X řízená světelnou signalizací");
}

 var blem = choice();
function choice(){
      var choice = junctionChoice();

function junctionChoice(choice){     //výběr jednotlivého typu křižovatky
	var choice = 0;
	choice = Math.floor(Math.random() * 8) + 1;
	choice = 2; 					//POZOR!! kurvitko za účelem testování umístění vozidel na kruháku
	return choice;
}
/* alert(choice); */
switch(choice){
  case 1:
    XjunctionFree();
    break;
  case 2:
    XjunctionPreference();
    break;	
  case 3:
    TjunctionFree();
    break;
  case 4:
    TjunctionPreference();
    break;  
  case 5:
	roundabout();
	break;
  case 6:
	XjunctionPolice();
	break;
  case 7:
	TjunctionPolice();
	break;
  case 8:
	XjunctionLights();
	break;
}
}


/*
 var xp3 = [
	[,,,],
	[,,,],
	[,,,],
	[,,,],
]
*/