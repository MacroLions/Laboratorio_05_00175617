function palindromo(palabra) {
    console.log(palabra.length)
    palindromo=palabra.split("");
    palindromo.reverse();
    palindromo.join('');
    console.log(palindromo);
    if(palabra==palindromo){
        alert("Shi, "+palabra+" es palindromo")
    }
    else{
        alert("Ño, "+palabra+" no es palindromo");
    }
}
