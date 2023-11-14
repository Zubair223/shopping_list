// const arr = [1,2,3,4,5];  //expected array [6,5,4,3,2,1,0]
// arr.push(6);
// arr.unshift(0);
// x = arr.reverse();
// console.log(arr); //or x


//challenge 2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
// arr1.pop();
// or

// var x = arr1.concat(arr2); //
// var x1 = [...arr1, ...arr2.slice(1)];
var x1 = [...arr1.splice(0,arr1.length-1), ...arr2];//arr.splice (index,length)
// var x1 = [...arr1.slice(0,4), ...arr2];
console.log(x1); //



