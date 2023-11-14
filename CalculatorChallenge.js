function calculator(num1,num2,operator){
    if(operator != '+' && operator != '-' && operator != '/' && operator != '*')
    {
        console.log("Error");
    }
    else
    {
        return eval(`${num1} ${operator} ${num2} `);
    }
}
let x = calculator(7,9,'/');
console.log(x);