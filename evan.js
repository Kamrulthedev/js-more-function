//for loop 


// for(let i = 1; i <= 20; i=i/4){
//     console.log(i)
// };


// for sum loop
// let sum = 0;

// for (let i = 11; i <= 20; i++) {
//     sum = sum + i;
//     console.log(i)
// }


// console.log(sum);




//for 

// for (let i = 10; i <= 10; i--){
//     console.log(i)
// }



// for (let i = 1; i <= 20; i = i + 2) {
//     console.log(i)
// }


// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0 || i % 3 === 0) {
//         console.log(i)
//     }
// };

let totel = 0;

for(let i = 1; i <= 30; i++){
    if(i % 3 ===0){
        console.log(i)
        totel = totel + i;
        console.log('totel',totel)
    }
}

console.log(totel)