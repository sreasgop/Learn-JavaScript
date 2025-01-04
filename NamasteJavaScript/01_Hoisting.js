
console.log(x); 
// console.log(y);  // Running this line will generate a ReferenceError as 'y' variable is created with the let keyword, and variables created with let keyword are hoisted but not initializted. They remain in a temporal dead zone (tdz) from the start of the block until their declaration is encountered. 
// console.log(z);     // Running this line will also generate a ReferenceError, as 'z' variable is created with the const keyword, and it behaves in a similar manner as the let keyword.
console.log(getName);
getName();  // Function declarations are hoisted along with their body, allowing you to call the function before its declaration.

var x = 10;
let y = 7;
const z = 9;

function getName(){
    console.log("01_Hoisting.js")
}