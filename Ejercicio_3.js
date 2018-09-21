function fibonacci(a) {
    var n=0;
    var n_1=1;
    var aux;
    var k ="";
   
    for (let i= 0; i < a; i++) {
        if (i===0) {
            k=k+n;
            k=k+",";
        }
        if (i===1) {
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
    alert(k);
}


