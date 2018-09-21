function fibonacci(a) {
    a = prompt("Enésimo término:")
    var n=0;
    var n_1=1;
    var aux;
    var k ="";
   
    for (let i= 1; i < a; i++) {
        if (i===1) {
            k=k+n;
            k=k+",";
        }
        if (i===2) {
            k=k+n_1;
            k=k+",";
        }
        else{
            aux= n;
            n=n_1;
            n_1=n_1+aux;
            k=k+n_1;
            k=k+",";
        }
        
    }
    console.log(k);
}


