function circunferencia() {
    num = prompt("Ingrese un radio:")
    if(num<0){
        console.log(-1);
    }
    else{
        a=(Math.PI*Math.pow(num,2))/2;
        console.log(a);
    }
}