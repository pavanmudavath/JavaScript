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
object: The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

Operators :
There are following types of operators in JavaScript.

Arithmetic Operators(+,-,*,/,%,++,--)
Comparison (Relational) Operators(== , === , != , !== , > , >= , < , <= )
Bitwise Operators (&, | , ^(bitwise XOR) , ~(bitwise Not) , << (bitwise left shift),(>>) , >>>
Logical Operators ( && , || , ! )
Assignment Operators ( = , += , -= , *=, /=, %= )
Special Operators : (?:)(conditional Operator), (,) , delete , in , instanceof, new , typeof,void,yield


control flow:
If Statement
Using If-Else Statement
Using Switch Statement
Using the Ternary Operator (Conditional Operator)
Using For loop
while loop
do...while loop

functions: In JavaScript, a function is defined using the function keyword, followed by the name of the function and parentheses. Optionally, you can include a list of input parameters within the parentheses. The code block that needs to be executed when the function is called is written within curly braces {}.

function sayHello() {
  console.log("Hello, World!");
}
sayHello();

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("The sum is: " + sum);
}
addNumbers(5, 3);

let greet = function() {
  console.log("Hello!");
};

greet();

setTimeout(function() {
  console.log("This is a callback function.");
}, 2000);

Major Uses of the querySelector() Method

The querySelector() method is a powerful tool in JavaScript that allows you to select and manipulate elements in the DOM (Document Object Model) based on CSS selectors. Here are some major uses of the querySelector() method:

Selecting Elements: The primary use of querySelector() is to select elements from the DOM using CSS selectors. It returns the first element that matches the specified selector. For example, document.querySelector("#myElement") selects the first element with the ID "myElement" 
.
Manipulating Styles: Once you have selected an element using querySelector(), you can manipulate its styles using the style property. For example, document.querySelector("#myElement").style.backgroundColor = "red" sets the background color of the selected element to red 
.
Adding Event Listeners: You can use querySelector() to select an element and then attach event listeners to it. This allows you to respond to user interactions, such as clicks or key presses. For example, document.querySelector("#myButton").addEventListener("click", myFunction) adds a click event listener to the element with the ID "myButton".

Traversing the DOM: querySelector() can be used to navigate the DOM by selecting elements based on their relationship to other elements. For example, document.querySelector("#myElement .myClass") selects the first element with the class "myClass" that is a descendant of the element with the ID "myElement".

Dynamic Content Manipulation: With querySelector(), you can select elements and modify their content dynamically. For example, document.querySelector("#myElement").textContent = "New content" changes the text content of the selected element to "New content"


querySelectorAll() method:
The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

It's important to note that querySelectorAll() returns a static NodeList, which means it doesn't update automatically when the DOM changes. If you need a live collection that reflects the current state of the DOM, you can use other methods like getElementsByClassName() or getElementsByTagName() 
.


createElement() method:
In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
  
syntax:createElement(tagName)
createElement(tagName, options)
ex:<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Working with elements</title>
  </head>
  <body>
    <div id="div1">The text above has been created dynamically.</div>
  </body>
</html>

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

Element.innerHTML

The Element.innerHTML property is used to get or set the HTML content (inner HTML) of an element in JavaScript. It allows you to read the HTML markup contained within an element or replace it with new HTML content.

// HTML code
<div id="myElement">Hello, <strong>World!</strong></div>

// JavaScript code
const element = document.getElementById('myElement');
console.log(element.innerHTML); // Output: Hello, <strong>World!</strong>

element.innerHTML = 'Goodbye, <em>World!</em>';
console.log(element.innerHTML); // Output: Goodbye, <em>World!</em>

Element: setAttribute() method:

The setAttribute() method of the Element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().

getAttribute() method
The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
If the given attribute does not exist, the value returned will be null.

an attribute refers to a specific characteristic or property of an HTML element. Attributes are defined within the opening tag of an HTML element and provide additional information about the element.


EventTarget: addEventListener() method:
The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)







 
 

 





