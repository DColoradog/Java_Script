//371
//3^3 + 7^3 + 1^3 = 27 + 343 +1 = 371


function isAmstrong(numero){
    if(typeof numero != 'number'){
        throw TypeError('El argumento debe ser un numero')
    }
    if(!Number.isInteger(numero)){
        throw TypeError('El argumento debe ser un numero entero')
    }
    if(numero < 100  ||numero > 999  ){
        //debe ser de 3 dijitos
        throw TypeError('El argumento debe tener 3 dijitos')
    }
    let resultado = String(numero).split('').map(e => parseInt(e)).reduce((a,d) =>{
        return a+ Math.pow(d,3);
    },0);

    return resultado == numero;

}
try{
    console.log(isAmstrong(125));
}catch(e){
    console.log(`Error: ${e.message}`)
}