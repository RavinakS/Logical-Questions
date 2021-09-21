// this is what works
for(let i = 1; i<=5; i++){
    setTimeout(function (){console.log(i);}, i * 1000);
}

console.log("Ended");


// print 1 to 5 using setimeout and time according to the i.
// var i = 1; // or assign with let, the same output is gonna get
// for(i; i<=5; i++){
//     setTimeout(function (){console.log(i);}, i * 1000);
// }

// console.log("Ended");


// function outer(){

//     return setTimeout(function cb(){
//         console.log("Hi");
//     }, 3000)
// }

// inner = outer();