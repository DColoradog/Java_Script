class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Ayudante{
    static distancia (a,b){
        const dx = a.x - b.x;
        const dy = a.y -b.y;

        return Math.sqrt (dx * dx + dy *dy)
    }
}

const p1 = new Punto (5,5);
const p2 = new Punto (10,10);

console.log(Ayudante.distancia(p1,p2));
// no es necesario el new en console.log(new Ayudante.distancia(p1,p2));