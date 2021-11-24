let cadena = "abuelo espero que estes a mi lado siempre";
let regex = /abuelo/;

console.log(typeof regex);
console.log(regex instanceof RegExp);
console.log(regex.test(cadena));
let regesito = /(\b\w+\b)+/g;

if(cadena.match(regesito)){
    let cantidad = cadena.match(regesito).length;

    console.log(`la variable cadena contiene ${cantidad} palabras`)
}
