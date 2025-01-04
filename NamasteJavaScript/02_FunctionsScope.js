
let x = 1; 

a();                // This will print the value of x that is defined within the a function scope, i.e. 10
b();                // This will print the value of x that is defined within the b function scope, i.e. 100
console.log(x);     // This will print the value of x that is defined within the global scope, i.e. 1


function a() {
    var x = 10; 
    console.log(x);
}

function b(){
    var x = 100; 
    console.log(x);
}
