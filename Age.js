const age = 10;
const Price = 5000;

if (age <= 12) {
    console.log('You are Child for the free')
}

else if (age >= 60) {
    //50% discount
    const discount = Price * 50 / 100;
    const payAamout = Price - discount
    console.log(payAamout);
}
else if (age >= 50) {
    //40% disscount
    const discount = Price * 40 / 100;
    const payAamout = Price - discount;
    console.log(payAamout);
}
else if (age >= 40) {
    //30% discount 
    const discount = Price * 30 / 100;
    const payAamout = Price - discount;
    console.log(payAamout)
}
else {
    console.log(Price)
}