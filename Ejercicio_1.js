function palindromo(palabra) {
    var inverso=palabra.split("").reverse().join("");
    if(palabra==inverso){
        console.log(palabra+" es palindromo")
    }
    else{
        console.log(palabra+" no es palindromo")
    }
}
