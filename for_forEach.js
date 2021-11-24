let lenguajes = ['python','java','dart','js'];

for(i= 0; i<lenguajes.length; i++){
    console.log(lenguajes[i]);
}

lenguajes.forEach(function(valor,indice,lenguajes){
    console.log(indice, valor);
});

lenguajes.forEach((valor,indice,lenguajes) =>
    console.log(valor, indice)
);

function recorrido(valor,indice,lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice}`);
}

lenguajes.forEach(recorrido);