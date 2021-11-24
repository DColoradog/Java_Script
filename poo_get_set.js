class Person {
    _idioma = "";
    get idioma(){
        //pone en mayuscula
        return this._idioma.toUpperCase()+" lelo";
    }
    set idioma(idioma2){
        // me asigna a la propiedad como quiero
        console.log("entro");
        this._idioma = idioma2;
        //this.idioma = idioma2; se queda en un bluque infinito 
        // ya que al this.idioma vuelve y llama el set
    }
} 

let ramiro = new Person();

ramiro.idioma = "Español";
console.log(ramiro.idioma);
//console.log(ramiro.idioma()); --> error --- ramiro.idioma is not a function