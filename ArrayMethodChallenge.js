const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '123-456-1234',
        age:30
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '133-426-3234',
        age:25
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '143-326-1654',
        age:45
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '143-656-5654',
        age:19
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '433-566-1434',
        age:23
    }
]; //create an array youngpeople name and email under 25 name both f and l

const youngpeople = people.filter((item)=>{
   
    return (item.age < 25) 
    
}).map((item)=>{
    return {
        name: item.firstName + ' ' + item.lastName ,
        email: item.email
    }
});

console.log(youngpeople);


//challenge 2
const num = [2,-30,50,20,-12,-9,7];
//add all the positive numbers in an array
const f_array = num.filter(function(item){
return item > 0;
}).reduce((first,second)=>{
    return first + second;
},0); //including 0 sets first value as zero like sum=0 in normal array 
console.log(f_array);




//challenge 3
const words = ['coder','programmer','developer'];


    const w_array = words.map(function(item) {
       return item.charAt(0).toUpperCase() + item.slice(1);
    });
console.log(w_array);


