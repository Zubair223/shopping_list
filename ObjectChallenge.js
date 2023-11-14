const library = [
    {
        title : 'electronics',
     
        author: 'Morris Mano',
     
        status:{
                    own:true,
                    reading:false,
                    read: false
               }
    },
    {
        title : 'C#',
     
        author: 'Balaguruswamy',
     
        status:{
                    own:true,
                    reading:false,
                    read: false
               }
    },
    {
        title : 'C++',
     
        author: 'Bjarne Stroustrup',
     
        status:{
                    own:true,
                    reading:false,
                    read: false
               }
    }

];

let x1 = library[0].status.read = true;
let x2 = library[1].status.read = true;
let x3 = library[2].status.read = true;

// let x1 = Object.keys(library[0]);
console.log(library);

const {title} = library[0];  // destructure title for library
console.log(title);
const {title:firstBook} = library[0];  // destructure and rename title as  firstBook

console.log(firstBook); // 



const jsonObject = JSON.stringify(library);
console.log(jsonObject);

let x = [3,5,7,3,5,7];
let [a,b,...rest] = x;
console.log(a,b,rest);//3,5 //rest operator gives me an object
