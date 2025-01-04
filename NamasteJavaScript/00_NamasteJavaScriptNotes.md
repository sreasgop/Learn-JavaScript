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