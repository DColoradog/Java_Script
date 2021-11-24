function ordenar(cadena){
    if(!Array.isArray(cadena)){
        throw TypeError (' El argumento debe ser un arreglo');
    }
    if(!cadena.every(e => typeof e === 'string')){
        throw TypeError ('todos los elementos deben ser strings');
    }
    return cadena.sort((x,y) => x.charCodeAt(x.length-1)- y.charCodeAt(y.length -1));
}

let lenguajes = ['python',3,'dart','js'];
// n, a , t, s
// a, n , s , t
// [ 'java', 'python', 'js', 'dart' ]
try{
let resultado = ordenar(lenguajes);
console.log(resultado);
}catch(e){
    console.log(`Error: ${e.message}`);
}
