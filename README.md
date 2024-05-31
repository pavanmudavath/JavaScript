# JavaScript
JavaScript for Developer

Learning Topics:

Step1 : Core JS: Variables, Data types , operators , control flow, functions, DOM and Event.

Step2: Async JS: Callbacks, Promises, async/await

Step3 :ES6+: Arrow functions, destructuring , classes ,spread / rest Operators . 

Step4: Functional Programming: Higher-order functions, map/filter/reduce.

Step5:Error Handling: Try-catch, custom errors.

💡 Projects To Build 

1.To-Do List 📝

2. Weather App ☀️
   
3.Clock ⏰

4.Expense Tracker 💰

5.Quiz App ❓

6.Blogging Platform 📝

*********************Starts From Here**********************

Step1:CoreJS

Variables :Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable
Or 
 variables are used to store data that can be used and manipulated throughout the program.

 ==> JavaScript uses three keywords to declare variables: var, let, and const.
 
 ***var: This is the oldest way to declare variables and has function scope, meaning the variable is accessible throughout the function in which it is declared.
 
 var x = 10;
function example() {
if(true){
    var y = 20;
    }
    console.log(x); // 10
    console.log(y); // 20
}
console.log(y); // Error: y is not defined   out of function scope

***let: Introduced in ES6 (ECMAScript 2015), let allows you to declare block-scoped variables, which are only accessible within the block they are defined.

let a = 10; // Global scope
if (true) {
    let b = 20; // Block scope
    console.log(a); // Accessible here: 10
    console.log(b); // Accessible here: 20
}
console.log(a); // Accessible here: 10
console.log(b); // Not accessible here: Error - b is not defined

***const: Also introduced in ES6, const declares block-scoped variables but with a constant value that cannot be reassigned.

const PI = 3.14159;
console.log(PI); // 3.14159
PI = 3.14; // Error: Assignment to constant variable.


Data types :  describe the different types or kinds of data that we're gonna be working with and storing in variables.
JavaScript includes primitive and non-primitive data types

There are 8 basic data types in JavaScript.

==> Seven primitive data types:
number:
bigint:
string:
boolean:
null:
undefined:
symbol:

==> non-primitive data type:
object:
  








 
 

 





