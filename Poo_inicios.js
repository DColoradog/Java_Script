class Animal{
    tipo = "Mamifero";
    ruido = "no tengo sonido"
    // constructor(tipo) {
    //     this.tipo = tipo;
    // }

    // SI NO TIENE EL CONSTRUCTOR EL METODO GUARDAR LA VARIABLE INICIALIZADA
    // si tiene el constr la primera variable no la coje desde afuera ,raro
    hago=ruido=>
        console.log(ruido)
    
   soy=tipo =>  console.log("no manches " + tipo)
   raro(tipo = this.tipo){
       // SI NO TIENE EL THIS.TIPO no guarda el valor que se llame posterior
       // con el this.tipo guarda el valor q se instancie
    console.log(tipo+" cagon")
   }
   }


   class Gato extends Animal{
  gatolan(){
      console.log('entro a gatolandia')
  }
        
   }


   let perro = new Animal()
   perro.raro();  // con Constr ( undefined cagon ) sin constr (mamifero cagon)
   perro.tipo = "perro" 
   console.log(perro.tipo) //--> perro
   perro.raro(); //-- > perro cagon
   perro.soy(true) // --> no manches true 
    //console.log(tipo)  ---> error
    //console.log(soy)   ---> error
   // console.log(perro.soy) -->  [Function: soy]
   //console.log(perro.raro) --> [Function: raro]
    //console.log(perro.raro()) --> undefinido
   
    // console.log(ruido)  --> error // console.log(ruido)  --> error
   console.log(new Gato().tipo) // con Constr ( undefined // tiene q pasarle parametro) sin constr ( Mamifero)
   console.log(new Gato().ruido) // --> no tengo sonido 
   console.log(new Gato().raro("miguel")) // miguel cagon
   //console.log(new Gato().raro) --->undefined
   //console.log(new Gato().gatolan) ---> [Function: gatolan]
   let ares = new Gato()
   //console.log(ares.tipo) --> undefined
   //console.log(ares.gatolan) --> [Function: gatolan]
  // console.log(ares.gatolan()) --> entro a gatolandia y undefined
  ares.gatolan()
setTimeout(() => {
    console.log(`quien es ${ares.gatolan()}`)
    // 5 segundos de espera
}, 5000);

  

   