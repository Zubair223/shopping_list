const companies = [
    {name:'Company one',category: 'finance',start: '1981',end: '1997'},
    {name:'Company two ',category: 'technology',start: '1984',end: '1999'},
    {name:'Company three',category: 'retail',start: '1871',end: '1900'},
    {name:'Company four',category: 'technology',start: '1963',end: '1980'},
    {name:'Company five',category: 'auto',start: '1900',end: '1952'},
    {name:'Company six',category: 'retail',start: '1940',end: '1967'},
    ];

    // const arr = companies.map((item) =>
    // {
    //     return     item.category === 'retail';
    // });
    // console.log(arr); //using map get true and false but all values are returned

    const arr = companies.filter((item) =>
    {
        return     item.category === 'retail';
    });

    console.log(arr); //using filter only true values(actual value not true itself) are send who have the values set true 


    const arr1 = companies.filter((item) =>{
        return item.start >= 1980 && item.end <= 2005
    });  
    console.log(arr1); //using filter
    
    console.log('----------------------------------'); //using filter only true values(actual value not true itself
    const companylasts = companies.filter((item) =>{
        return (item.end - item.start) >= 10
    });
    console.log(companylasts); //using filter