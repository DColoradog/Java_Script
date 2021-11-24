function contarOcurren(datos){
    if(!Array.isArray(datos)){
        throw TypeError (' El argumento debe ser un arreglo');
    }
    let conteo = {};

    for (const d of datos){
        if(conteo[d]){
            conteo[d] += 1;
        }else{
            conteo[d] = 1;
        }
    }
    return conteo;
}

function contarOcurrenreduce(datos){
    if(!Array.isArray(datos)){
        throw TypeError (' El argumento debe ser un arreglo');
    }
    return datos.reduce((a,d) => (a[d] ? a[d]+= 1: a[d] =1 ,a),{});
}

let numeros = [3,4,5,3,4,7,4,2,3,5,7,8,4];
2
try{
console.log(contarOcurren(numeros));
console.log(contarOcurrenreduce(numeros));

}catch(e){
    console.log(`Error: ${e.message}`);
}