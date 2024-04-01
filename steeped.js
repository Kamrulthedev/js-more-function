/**
 * Comparition 
*/


const Price = 2000;

if (Price >= 5000) {
    //10% discount
    const discount = Price * 10 / 100;
    const payAamout = Price - discount;
    console.log(payAamout) 
}
else if(Price >= 2500){
    //5% discount
    const discount = Price * 5 / 100;
    const payAamout = Price - discount;
    console.log(payAamout)
}
else{
    console.log('No discount. Pay on the',Price)
}

