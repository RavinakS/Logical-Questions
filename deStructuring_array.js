let a, b, rest;

[a, b] = [5, 6];

// console.log(a);
// console.log(b);

[a, ...b, rest] = [1, 2, 3, 4, 5, 6, 7];

console.log(a);
console.log(b);
console.log(rest);