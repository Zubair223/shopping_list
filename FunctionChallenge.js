const getCelcuis = (f) => c = (f -32) * 5/9;

//              ----OR-----
// const getCelcuis = (f) => 
// {c = (f -32) * 5/9;
// return c}
// getCelcuis(3);
console.log(`The temperature is ${Math.ceil(getCelcuis(92))} \xB0C`);

// °C = (°F - 32) × 5/9; 



const minMax = (x)=>{ 
    let min = Math.min(...x); //here is spread op Math.min(1,2,3,4,5)
    let max = Math.max(...x);//same here also
    return {min,
        max};
};


let x = [1,2,3,4,5];
console.log(minMax(x));



let x1 = [1,2,3,4,5];
let a = [...x,...x1];
console.log(a);



//---------IFFE-----------//
(function ifie(len,wid){
console.log(len*wid);
})(3,5);
