// function hoist(){
//     a = 20;
//     var b = 100;
// }

// hoist();
// console.log(a);
// //Accessible as a global variable outside hoist() function
// //all undeclared variables are global variables

// console.log(b);
// //Since it was declared, it is confined to the hoist() function scope.
// // We can't print it out outside the confines of the hoist() function.
// // Output: ReferenceError: b is not defined

console.log(hoist());
function hoist(){
    var message = "welcome to world of coding!";
    return message;
}
