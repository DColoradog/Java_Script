function sumarMultiplos(numero){
    let suma = 0;

    for (let i = 1; i <= numero; i++){
      if (i % 3 === 0 || i % 5 === 0) {
          suma += i
      }       
    }
    return suma;
}

console.log(sumarMultiplos(1000))
