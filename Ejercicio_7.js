function bisiesto() {
    year = prompt("Ingrese un año:")
    if(year%4==0){
        a=true;
    }
    else{
        a=false;
    }
    if(year%100==0){
        b=true;
    }
    else{
        b=false;
    }
    if(year%400==0){
        c=true;
    }
    else{
        c=false;
    }

    if(a==true && b==false || c==true){
        console.log(true);
    }
    else{
        console.log(false);
    }
}