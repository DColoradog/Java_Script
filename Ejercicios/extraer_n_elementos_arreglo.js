function extraerArreglo(datos,n = 1){

    // hace trwoh error de arrays y n 
    if(!Array.isArray(datos[0])){
        return datos.slice(0,n);
    }
    else{
        console.log('no hay datos disponibles')
    }
    return datos[0].slice(0,n)
}

console.log(extraerArreglo([1,2,3])); // 1
console.log(extraerArreglo([1,2,3],2)); // 1,2


function extraerUltimoElemento(datos,n = 1){

    // hace trwoh error de arrays y n 
    if(Array.isArray(datos[datos.length -1])){
        return datos[datos.length -1].slice(0,n);
    }
    else{
        console.log('no hay datos disponibles')
    }
    return datos[datos.length -1];
}

console.log(extraerUltimoElemento([1,2,3])); // 3
console.log(extraerUltimoElemento([1,2,3,[4,5,7]],2)); // 4,5