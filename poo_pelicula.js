class Pelicula {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.año = año;
    }
    resultado() {
        console.log(`la peli se llama ${this.titulo}, la cual fue creada por ${this.autor} en
        el año ${this.año} de genero ${this.genero}`);
    }
}
let peliculas = [];

while(peliculas.length<3){
    let titulo = prompt ("ingrese el titulo");
    let autor = prompt ("ingrese el autor").toUpperCase;
    let año = prompt ("ingrese el año");
    let genero = prompt ("ingrese el genero").toLowerCase;

    if (titulo != "" && autor != "" && año.length == 4 && isNaN(año)==False && (genero=="aventura"||genero=="terror")) {
        peliculas.push(new Pelicula(titulo,autor,año,genero))       
    }
}
const mostrarpeli = () => console.log(resultado())
