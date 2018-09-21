function binario(num) {
    var k = "";
    while(num!=0){
        a= num%2;
        num=num/2;
        k=k+a;
    }
    console.log(k);
}