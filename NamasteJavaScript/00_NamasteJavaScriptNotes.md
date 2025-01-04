<h1 align="center" style="font-family: cascadia code; color: cyan;" > Namaste JavaScript Notes </h1>

<br>

### Everything in JavaScript happens inside an ***Execution Context.***

#### What is Execution Context?

Execution Context is made up of **Variable Environment** which is also known as memory component and **Thread of Execution** which is also known as Code component. 

<table border="1">
    <tr>
        <th style="text-align: center"> Memory </th>
        <th style="text-align: center"> Code </th>
    </tr>
    <tr>
        <td> key : value </td>
        <td> lines of code </td>
    </tr>
    <tr>
        <td> a : 10 </td>
        <td> * -------- </td>
    </tr>
    <tr>
        <td> function: { .... }
        <td> * -------- </td>
    </tr>
</table>

<br>

---

<br>

### JavaScript is a ***Synchronous*** ***Single-threaded*** language.

#### What does Single-threaded mean?
It means JavaScript can execute one command at a time.

#### What does Synchronous Single-threaded mean?
It means that JavaScript can execute one command at a time in a specific order. Which in other words mean that it can only go to the next line once the current line has been executed. 

<br>

---

<br>

### What happens when we run JavaScript Code?

An execution context is created when we run a JavaScript Code. Let's see what happens when we run this code with the help of this simple program that calculate the square of given numbers. 

``` JavaScript
var n = 2; 
function square (num) {
    var ans = num * num; 
    return ans; 
}
var square2 = square(n); 
var square4 = square(4);
```

The moment we run this code, JavaScript creates a **global execution context** in **two phases**. 
<ol>
    <li style="font-weight: bold"> Memory Creation Phase</li>
    <li style="font-weight: bold"> Code Execution Phase</li>
</ol>

<br>

In the first phase which is known as the **memory creation phase**, JavaScript will go through the program line by line and allocate memory to all the variables and functions. When it allocates memory to variables one by one, initially it stores the value of variables as undefined, and in case of functions it stores the entire source code written in the function block as the value of the function. 

<br>

Global Execution Context after the **Memory Creation Phase**:
<table border="1">
    <tr>
        <th style="text-align: center"> Memory </th>
        <th style="text-align: center"> Code </th>
    </tr>
    <tr>
        <td> n : undefined </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square : { source code written within the function block} </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square2 : undefined </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square4: undefined
        <td> -------- </td>
    </tr>
</table>

<br>

The second phase of creating an execution context is known as the **Code Execution Phase**. In this phase, JavaScript interpreter once again will go through the entire program line-by-line and executes the following lines one at a time. When it goes over the first line, `var n = 2;` the JavaScript interpreter updates the **global execution context** and allocates the defined values in place of `undefined` for the variable n. There's nothing new to do when it encountes a function block so the interpreter then goes to line number 6: `var square2 = square(n);`. Here we can see that a new variable is being defined and it's being assigned with the value invoked by the `square()` function. Functions are at the core of JavaScript, and they behave quite differently in some context than most languages. When a function is invoked or called, a brand new **execution context** is created within the **global execution context**, which again will have two components, i.e. Memory Component and Code Component, which in turn will also have two phases. In phase one within the **global execution context** only memory will be allocated to the function variable with `undefined` value and in 2nd phase, the value passed as an *argument* to the function will replace the `undefined` value in the new **execution context** of the function. When the entire function is executed the whole **execution context** of the function will be deleted and the **local memory** will be made free. And the process keeps on repeating for n number of functions invoked. After the execution of all the lines of codes in the program, the **global execution context** is also deleted and the memory is made free as well.

<br>

<u>***Step 1:***</u>
Global Execution Context during the **Code Execution Phase** (First phase of execution context creation after function invoking) :
<table border="1">
    <tr>
        <th style="text-align: center"> Memory </th>
        <th style="text-align: center"> Code </th>
    </tr>
    <tr>
        <td> n : 2 </td>
        <td> 
            <table border="1">
                <tr>
                    <td>Memory</td>
                    <td>Code</td>
                </tr>
                <tr>
                    <td>num: undefined</td>
                    <td>----</td>
                </tr>
                <tr>
                    <td>ans: undefined</td>
                    <td>----</td>
                </tr>
            </table> 
        </td>
    </tr>
    <tr>
        <td> square : { source code written within the function block} </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square2 : undefined </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square4: undefined
        <td> -------- </td>
    </tr>
</table>

<br>

<br>

<u>***Step 2:***</u>
Global Execution Context during the **Code Execution Phase** (Second phase of execution context creation after function invoking) :
<table border="1">
    <tr>
        <th style="text-align: center"> Memory </th>
        <th style="text-align: center"> Code </th>
    </tr>
    <tr>
        <td> n : 2 </td>
        <td> 
            <table border="1">
                <tr>
                    <td>Memory</td>
                    <td>Code</td>
                </tr>
                <tr>
                    <td>num: 2</td>
                    <td> num * num <br> return num</td>
                </tr>
                <tr>
                    <td>ans: 4</td>
                    <td>----</td>
                </tr>
            </table> 
        </td>
    </tr>
    <tr>
        <td> square : { source code written within the function block} </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square2 : undefined </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square4: undefined
        <td> -------- </td>
    </tr>
</table>

<br>
<br>

<u>***Step 3:***</u>
Global Execution Context during the **Code Execution Phase** (After the completion of execution of an instance of function invoked) :
<table border="1">
    <tr>
        <th style="text-align: center"> Memory </th>
        <th style="text-align: center"> Code </th>
    </tr>
    <tr>
        <td> n : 2 </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square : { source code written within the function block} </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square2 : 4 </td>
        <td> -------- </td>
    </tr>
    <tr>
        <td> square4: undefined
        <td> -------- </td>
    </tr>
</table>


<br>

---

<br>

### How does JavaScript maintain all the Execution Contexts?

JavaScript maintains a call stack where the **Global Execution Context** is the first to get into the stack and every time a new **Execution Context** is created it is pushed into the call stack and every time an **Execution Context** is deleted it is popped out of the call stack. Eventually when the program is execution the call stack is emptied with popping out the **Global Execution Context**. 

<br>

***Step 1:*** At first the Global Execution Context is pushed into the stack as the program execution begins with the creation of the Global Execution Context.
<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td>Global_Execution_Context</td>
    </tr>
</table>

<br>
<br>

***Step 2:*** As the `square(n)` function is invoked for the first time, Execution_Context_1 is pushed into the stack as well.
<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td>Execution_Context_1</td>
    </tr>
    <tr>
        <td>Global_Execution_Context</td>
    </tr>
</table>

<br>
<br>

***Step 3:*** As the `square(n)` function execution is completed, the Execution_Context_1 created for that specific instance of function call is poppped out of the Call Stack.

<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td>---</td>
    </tr>
    <tr>
        <td>Global_Execution_Context</td>
    </tr>
</table>

<br>
<br>

***Step 4:*** As a the `sqaure(4)` function is invoked again, and a new Execution Context is created within the Global Execution Context, Execution_Context_2 is pushed into the Call Stack.

<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td>Execution_Context_2</td>
    </tr>
    <tr>
        <td>Global_Execution_Context</td>
    </tr>
</table>

<br>
<br>

***Step 5:*** As the `square(4)` function execution is completed for the instance of this function call, the Execution_Context_2 created for that specific function is poppped out of the Call Stack.

<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td>Global_Execution_Context</td>
    </tr>
</table>

<br>
<br>

***Step 6:*** As the execution of the last line of the program is completed the Global_Execution_Context is popped out of the Call stack and then the Call Stack is made free from the memory as well.

<table border="1">
    <tr>
        <th> Call Stack</th>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
    <tr>
        <td> --- </td>
    </tr>
</table>

<br>
<br>

--- 

<br>

## What is Hoisting in JavaScript?



In JavaScript, **hoisting** is a behavior where declarations of variables, functions, and classes are moved (or "hoisted") to the top of their scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are declared in the code.

However, hoisting doesn't move the actual code; it only moves the declarations.

---

#### **1. Variable Hoisting**

Variables declared with `var` are hoisted, but their initialization is not. Until the line where the variable is initialized, it will have the value `undefined`.

#### Example:
```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```
- **What happens internally?**
  ```javascript
  var x;         // Declaration is hoisted
  console.log(x); // undefined (default value)
  x = 5;         // Initialization happens here
  console.log(x); // 5
  ```

Variables declared with `let` and `const` are also hoisted but are not initialized. They remain in a **temporal dead zone (TDZ)** from the start of the block until their declaration is encountered.

#### Example:
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

---

#### **2. Function Hoisting**

Function declarations are hoisted along with their body, allowing you to call the function before its declaration.

#### Example:
```javascript
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}
```

- **What happens internally?**
  ```javascript
  function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  ```

However, function expressions (e.g., `let foo = function() {}`) are hoisted differently. Only the variable declaration is hoisted, not the function body.

#### Example:
```javascript
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hi!");
};
```

---

#### **3. Class Hoisting**

Classes are also hoisted but are placed in the **temporal dead zone**. You cannot use them before their declaration.

#### Example:
```javascript
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.name = "Test";
  }
}
```

---

#### **Key Takeaways:**
- **`var`** declarations are hoisted and initialized with `undefined`.
- **`let` and `const`** are hoisted but not initialized, resulting in a temporal dead zone.
- **Function declarations** are fully hoisted.
- **Function expressions and arrow functions** behave like variables—they are hoisted but uninitialized.
- **Classes** are hoisted but cannot be accessed before their declaration.

<br>
<br>

---
<br>

## What is a block?

In JavaScript, a **block** is a group of code enclosed within a pair of curly braces `{}`, which is therefore a compound statement. It is used to group statements together and is often associated with control structures like `if`, `for`, `while`, that expect a single statement. Or simply as a standalone block for defining scope.

#### **Features of a Block**
1. **Structure**: A block is defined by curly braces `{}`.
   ```javascript
   {
       // This is a block
   }
   ```

2. **Scope**: Variables declared inside a block using `let` or `const` are block-scoped, meaning they are only accessible within that block.
   ```javascript
   {
       let blockScopedVariable = "I exist only in this block!";
       console.log(blockScopedVariable); // Works
   }
   console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
   ```

3. **Usage**: Blocks can be used anywhere a statement is allowed in JavaScript.

---

#### **Common Use Cases of Blocks**

#### **1. Control Structures**
Blocks are commonly used with control structures like `if`, `else`, `for`, `while`, and `switch`:
```javascript
if (true) {
    let message = "This is inside an if block!";
    console.log(message); // Accessible here
}
// console.log(message); // Error: message is not defined
```

#### **2. Functions**
A function body is also a block:
```javascript
function exampleFunction() {
    let insideFunction = "I exist only inside this function block!";
    console.log(insideFunction); // Works
}
// console.log(insideFunction); // Error: insideFunction is not defined
```

#### **3. Standalone Blocks**
Blocks can be used as standalone units to create their own scope:
```javascript
{
    let x = 10;
    console.log(x); // Works
}
// console.log(x); // Error: x is not defined
```

#### **4. Loops**
Blocks define the body of loops:
```javascript
for (let i = 0; i < 3; i++) {
    console.log(`Iteration ${i}`);
}
```

---

#### **Block Scope**
JavaScript introduced block scope with the `let` and `const` keywords in ES6 (2015). Before that, variables declared with `var` were function-scoped and ignored block boundaries, which sometimes led to unexpected behavior.

#### **Example: `var` vs `let`**
```javascript
{
    var functionScoped = "I'm accessible outside the block!";
    let blockScoped = "I'm only accessible inside this block!";
}
console.log(functionScoped); // "I'm accessible outside the block!"
// console.log(blockScoped); // Error: blockScoped is not defined
```

---

#### **Key Points**
1. A block is defined by curly braces `{}`.
2. It groups multiple statements together.
3. Variables declared with `let` and `const` inside a block are block-scoped.
4. Blocks are used in control structures, functions, and standalone for creating temporary scopes.
5. Blocks help in isolating variables and reducing the risk of variable conflicts.


<br>
<br>

---

<br>

## **What is Scope in JavaScript?**

**Scope** in JavaScript determines the accessibility (visibility) of variables and functions. It defines where in the code you can use a particular variable or function. JavaScript has three types of scopes:

---

#### **1. Global Scope**
- Variables or functions declared outside of any function or block belong to the global scope.
- They are accessible from anywhere in the program.

#### Example:
```javascript
var globalVar = "I'm global!";

function printGlobal() {
  console.log(globalVar); // Accessible
}
printGlobal(); // Output: "I'm global"
console.log(globalVar); // Output: "I'm global"
```

---

#### **2. Local (Function) Scope**
- Variables declared within a function are only accessible within that function.
- These are called **local variables**.

#### Example:
```javascript
function localScopeExample() {
  var localVar = "I'm local!";
  console.log(localVar); // Accessible inside the function
}
localScopeExample();
console.log(localVar); // Error: localVar is not defined
```

---

#### **3. Block Scope (ES6 and later)**
- Variables declared with `let` or `const` are block-scoped, meaning they are only accessible within the block `{}` in which they are defined.
- This is different from `var`, which does not respect block scope.

#### Example:
```javascript
{
  let blockScoped = "I'm block-scoped!";
  const anotherBlockScoped = "Me too!";
  console.log(blockScoped); // Accessible
}
console.log(blockScoped); // Error: blockScoped is not defined
```
<br>
<br>

---

<br>

## **What is Scope Chaining?**

**Scope chaining** refers to the process of resolving variable references in JavaScript. When a variable is accessed, JavaScript starts searching for it in the current scope. If it’s not found, the search continues in the outer (parent) scope, and so on, until it reaches the global scope. If the variable is not found in any scope, it results in a `ReferenceError`.

---

#### **How Scope Chaining Works**
1. **Inner scope can access outer scope variables**:
   - Functions can access variables declared in their outer (parent) scope due to the lexical scoping rules in JavaScript.
2. **Outer scope cannot access inner scope variables**:
   - Variables declared in an inner scope are not accessible from an outer scope.

---

#### Example:
```javascript
var globalVar = "I'm global!";

function outerFunction() {
  var outerVar = "I'm in outerFunction!";

  function innerFunction() {
    var innerVar = "I'm in innerFunction!";
    console.log(globalVar); // Accessible (from global scope)
    console.log(outerVar); // Accessible (from outerFunction's scope)
    console.log(innerVar); // Accessible (from innerFunction's scope)
  }

  innerFunction();

  console.log(innerVar); // Error: innerVar is not defined (not accessible here)
}

outerFunction();
```

---
<br>

***Scope Chain:***
The scope chain is essentially the chain of all parent scopes that JavaScript traverses to resolve a variable. The order of lookup is:
1. Local scope (innermost)
2. Parent scope
3. Global scope

#### Visualization:
```javascript
var globalVar = "global";

function outer() {
  var outerVar = "outer";

  function inner() {
    var innerVar = "inner";
    console.log(innerVar); // Found in inner scope
    console.log(outerVar); // Found in outer scope
    console.log(globalVar); // Found in global scope
  }

  inner();
}
outer();
```

---

#### **Key Takeaways**
- **Scope** determines where variables and functions are accessible.
- **Scope chaining** enables nested functions to access variables from their parent scopes.
- **Global scope** is the outermost scope, while **block** and **function scopes** are inner scopes.
- Always declare variables with `let` or `const` to avoid polluting the global scope and to make use of block scoping.

<br>
<br>

---

<br>