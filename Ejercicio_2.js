function ordenArray(array) {
    console.log("Antes: "+array)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i]<array[j]){
                aux = array[j];
                array[j]=array[i];
                array[i]=aux;
            }
            
        }
    }

    console.log("Despues: "+array)
}
