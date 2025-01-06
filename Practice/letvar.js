
/**t.
 * `let`:
 * - Declares a block-scoped local variable, optionally initializing it to a value.
 * - Variables declared with `let` are not hoisted to the top of their block.
 * - Cannot be redeclared within the same scope.
 * 
 * `var`:
 * - Declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
 * - Variables declared with `var` are hoisted to the top of their scope.
 * - Can be redeclared within the same scope.
 * 
 * `const`:
 * - Declares a block-scoped variable that cannot be reassigned.
 * - Must be initialized at the time of declaration.
 * - Variables declared with `const` are not hoisted to the top of their block.
*/

// creating a variable using the var keyword allows shadoing of the variable. 
var y = 2; 

{
    var y = 20; 
    console.log(y);
}

console.log(y);


// creating a variable using the let keyword does not allow shadoing of the variable.
let x = 1; 

{
    let x = 10; 
    console.log(x);
}

console.log(x);

