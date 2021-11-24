function mcd(a, b){
    while(a != b){
        if(a > b){
            a -= b; // a le quitamos lo que haya en b
        } else {
            b -= a;
        }
    }
    return a;
}

console.log(mcd(2,3));
console.log(mcd(7,14));
console.log(mcd(110,75));