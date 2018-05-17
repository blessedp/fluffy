function staircase(n){
    var s='';
    for(var i=1; i <=n; i++){
        s +=''.repeat(n-1) + '*'.repeat(i) +'\n';
    }
    return s;
}
var x =staircase(20);console.log(x);
