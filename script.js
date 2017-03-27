

var tableXfree = [
    [[0],[10],[2],[2,3]],
    [[3,4],[0],[10],[3]],
    [[4],[4,1],[0],[10]],
    [[10],[1],[1,2],[0]],
]

var tableTfree = [
    [[0],[10],[2]],
    [[3],[0],[10]],
    [[10],[1],[0]],
]

function XFGenerator(){
    var carChoice = [1,2,3,4];
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    var first = tableXfree[a][b];
   
    if( first == 10 || first == 0){
        XFGenerator();
        return;
    }
console.log(a,b);
console.log(first);    
}
XFGenerator();
