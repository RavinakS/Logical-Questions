// what if I want to print using var only then the form comes closure.
// using closure
function outer(){
    for(let i = 1; i<=5; i++){
        function inner(value){
            setTimeout(function cb(){
                console.log(value);
            }, value*1000)
        }
        inner(i);
    }
}
inner = outer();

// this is what works
// for(let i = 1; i<=5; i++){
//     setTimeout(function (){console.log(i);}, i * 1000);
// }

// print 1 to 5 using setimeout and time according to the i.
// var i = 1; // or assign with let, the same output is gonna get
// for(i; i<=5; i++){
//     setTimeout(function (){console.log(i);}, i * 1000);
// }

// console.log("Ended");
