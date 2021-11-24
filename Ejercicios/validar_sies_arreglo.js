function esArreglo(valor){
    return toString.call(valor) === '[object Array]';
}

console.log(esArreglo(124)); //false
console.log(esArreglo('124')); //false
console.log(esArreglo('124'.split(''))); // true, splir devuelve array
console.log(esArreglo([])); //true
console.log(esArreglo(new Array())); //true

console.log(); //false

console.log(Array.isArray(124)); //false
console.log(Array.isArray('124')); //false
console.log(Array.isArray('124'.split(''))); // true, splir devuelve array
console.log(Array.isArray([])); //true
console.log(Array.isArray(new Array())); //true