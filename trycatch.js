let x = 10;
let y = 0;

try{
    let z = x/y;
    if(y == 0){
        throw new Error("Denominator can't be zero Divide by zero exception");
    }


console.log(z);
}
catch(e){
console.log(e);
}