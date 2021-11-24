let resultado = ''
function cantidad(numero){
    if(typeof numero != 'number'){
        throw TypeError('El argumento debe ser un numero')
    }
    if(!Number.isInteger(numero)){
        throw TypeError('El argumento debe ser un numero entero')
    }
    for(let i=1; i<=numero;++i){
        let resultado = "";
        // sin no se pone la linea 10 va 1, 3 6, 10, 15
         for (let j = 1;j <= i; ++j){
             resultado += '* ';
            }
            console.log(resultado);
    }
}

cantidad(5);