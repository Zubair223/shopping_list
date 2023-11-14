const obj = {
    first : 'one',
    second: 'two',
    third: 'three',
    fourth: 'four'
}
for(const key in obj) { //key is the key of the object
    console.log(key); //first , second , third, fourth
    console.log(obj[key]); //one,two,three,four
}

let arr = ["a", "b", "c", "d", "e"];
for(const key in arr)
{
    console.log(key); //0,1,2,3,4
    console.log(arr[key]);//a,b,c,d,e
}