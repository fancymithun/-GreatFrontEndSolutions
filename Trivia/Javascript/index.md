<strong>1. Explain event delegation</strong>

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:

Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

```
<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>
```

```

document.getElementById("parent-list").addEventListener("click", function(e) {
	
	if(e.target && e.target.nodeName == "LI") {
		
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```

<strong>2. Explain how this works in JavaScript</strong>


In JavaScript, this is a special keyword that refers to the object that the current function or method is a property of. The value of this changes depending on how the function or method is called, and it can be determined in different ways.

Here are some common ways that the value of this can be determined in JavaScript:

Global context: When this is used outside of any function or method, it refers to the global object. In a web browser, the global object is the window object.

Function context: When this is used inside a regular function, it refers to the object that the function is called on. If the function is called as a standalone function, this refers to the global object. If the function is called as a method of an object, this refers to that object.

Method context: When this is used inside a method of an object, it refers to that object.

Constructor context: When this is used inside a constructor function, it refers to the object that is being created by the constructor.

Here are some examples that illustrate how this works in JavaScript:

```

// Global context
console.log(this); // logs the global window object

function myFunction() {
  console.log(this); // logs the global window object
}

myFunction(); // calls the function as a standalone function

const myObject = {
  name: 'John',
  sayName() {
    console.log(this.name);
  }
};

myObject.sayName(); // calls the sayName method on the myObject object

function Person(name) {
  this.name = name;
  console.log(this); // logs the newly created object
}

const person = new Person('John'); // creates a new Person object using the constructor

```

<strong>3. What is the difference between == and ===?</strong>

== is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply return false. When using ==, funky things can happen, such as:

```
1 == '1'; // true
1 == [1]; // true
1 == true; // true
0 == ''; // true
0 == '0'; // true
0 == false; // true
```
My advice is never to use the == operator, except for convenience when comparing against null or undefined, where a == null will return true if a is null or undefined.

```
var a = null;
console.log(a == null); // true
console.log(a == undefined); // true
```

<strong>4. Explain the same-origin policy with regards to JavaScript.</strong>

In computing, the same-origin policy (SOP) is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, host name, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

<strong>5. What is "use strict";? What are the advantages and disadvantages to using it?</strong>

When strict mode is enabled, the code is executed in a different manner compared to normal mode. Here are some key differences between strict mode and normal mode:

Implicit Global Variables: In strict mode, variables must be explicitly declared with "var," "let," or "const." Otherwise, assigning a value to an undeclared variable will result in an error. In normal mode, assigning a value to an undeclared variable implicitly creates a global variable.

Assigning Values to Read-Only Global Variables: In strict mode, assigning a value to a read-only global variable, such as "undefined," "NaN," or "Infinity," will throw an error. In normal mode, such assignments do not result in an error.

Deleting Variables, Functions, or Function Arguments: Deleting variables, functions, or function arguments is not allowed in strict mode and will throw an error. In normal mode, deleting these entities is permitted, although it is generally not recommended.

Duplicate Parameters: Defining multiple parameters with the same name in a function declaration or function expression will cause an error in strict mode. In normal mode, duplicate parameters are allowed, and the later ones simply override the earlier ones.

Octal Numeric Literals: Octal numeric literals (numbers starting with a leading zero) are not allowed in strict mode. In normal mode, octal literals are interpreted as decimal values.

These are just a few examples of the differences between strict mode and normal mode. Strict mode helps catch common coding mistakes and promotes safer and more maintainable JavaScript code. It's generally recommended to use strict mode to avoid potential pitfalls and benefit from better error handling in your JavaScript projects.

```
"use strict";

function myFunction() {
  x = 10; // This will cause an error in strict mode
  return x;
}
console.log(myFunction());
```

<strong>6. Difference between document load event and document DOMContentLoaded event?</strong>

The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window's load event is only fired after the DOM and all dependent resources and assets have loaded.

```
addEventListener("DOMContentLoaded", (event) => {});

onDOMContentLoaded = (event) => {};
```

```
addEventListener("load", (event) => {});

onload = (event) => {};
```

<strong>7. Can you give an example for destructuring an object or an array?</strong>

Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.

Array destructuring

```
// Variable assignment.
const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

Object destructuring

```
// Variable assignment.
const o = {p: 42, q: true};
const {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

<strong>8. What are the benefits of using spread syntax and how is it different from rest syntax?</strong>

ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to Object.create, slice, or a library function. This language feature is used often in Redux and RxJS projects.

```
function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]

const person = {
  name: 'Todd',
  age: 29,
};

const copyOfTodd = {...person};
```

ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

```
const {e, f, ...others} = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }
```

<strong>9. How can you share code between files?</strong>

This depends on the JavaScript environment.

Global variables

One way is to use global variables. This is the simplest way to share code between files, but it's also the least safe. Global variables can be accessed from any file, which can lead to conflicts and errors.

Exporting functions

Another way to share code between files is to export functions. This is a more secure way to share code, because it limits access to the function to the files that import it. To export a function, you use the export keyword. For example:

```
// file1.js
function add(a, b) {
  return a + b;
}

export { add };
```
To import the function, you use the import keyword. For example:

```
// file2.js
import { add } from './file1';

const sum = add(1, 2);
console.log(sum); // 3
```
Modules

The most modern way to share code between files is to use modules. Modules are a way to organize your code into self-contained units. They're also the most secure way to share code, because they isolate each module from the others. To create a module, you use the export default keyword. For example:

```
// file1.js
export default function add(a, b) {
  return a + b;
}
```

To import the module, you use the import keyword. For example:

```
// file2.js
import add from './file1';

const sum = add(1, 2);
console.log(sum); // 3
```

<strong>10. What tools and techniques do you use for debugging JavaScript code?</strong>

a. React and Redux

  React Devtools

  Redux Devtools

b. Vue

  Vue Devtools

c. JavaScript

  Chrome Devtools

  debugger statement

  Good old console.log 
  
  debugging  

  <strong>11. Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?</strong>

forEach Loop:

"forEach" is a method available in many programming languages, including JavaScript.
It iterates over each element of an array and executes a provided function for each element.
It does not return a new array.
It is primarily used for executing a function on each element of an array without transforming or modifying the original array.
It is suitable when you want to perform an action or side effect for each element, such as logging values, updating the DOM, or making API calls, but you don't need a new array as the result.

Example of .forEach:

```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index, arr) => {
  // Perform desired modifications on each element
  arr[index] = num * 2;
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]
```

map() Loop:

map() is a method available in many programming languages, including JavaScript.
It iterates over each element of an array and executes a provided function for each element.
It returns a new array with the results of applying the function to each element.
It is primarily used for transforming or mapping each element of an array into a new value or structure.
It is suitable when you want to perform a transformation on each element of the array and collect the transformed values in a new array.

```
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```
<strong>12. What's a typical use case for anonymous functions?</strong>

Anonymous functions, also known as lambda functions or function literals, are functions that are defined without a specific name. They are typically used in scenarios where a small, one-time function is needed and it doesn't require a dedicated named function.

Callback functions: Anonymous functions are commonly used as callback functions, which are functions passed as arguments to other functions. This is often seen in asynchronous operations, event handlers, or higher-order functions. Using anonymous functions as callbacks allows for concise and inline function definitions without the need for a separate named function.

```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});
```

Function parameters: Anonymous functions can be passed directly as parameters to functions, allowing for flexible and on-the-fly function definitions. This is useful when you need a function with specific behavior to be used in a specific context without cluttering the code with a separate named function.

```
const result = calculate(5, function(num) {
  return num * 2;
});

function calculate(value, operation) {
  return operation(value);
}
```

Immediately Invoked Function Expressions (IIFE): Anonymous functions can be immediately invoked at the point of definition to create a self-contained scope. This helps avoid polluting the global namespace and allows for encapsulation of variables and logic.

```
(function() {
  // Code within the anonymous function
  const message = "Hello, world!";
  console.log(message);
})();
```

Higher-order functions: Higher-order functions are functions that operate on other functions, taking them as arguments or returning them as results. Anonymous functions are often used in higher-order functions to define behavior dynamically.

```
function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

<strong>13. What are the advantages and disadvantages of using Ajax?</strong>

Advantages

a. Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.

b. Reduce connections to the server since scripts and stylesheets only have to be requested once.

c. State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.

d. Basically most of the advantages of an SPA.

Disadvantages

a. Dynamic webpages are harder to bookmark.

b. Does not work if JavaScript has been disabled in the browser.

c. Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.

d. Webpages using Ajax to fetch data will likely have to combine the fetched remote data with client-side templates to update the DOM. For this to happen, JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this.

e. Basically most of the disadvantages of an SPA.

<strong>14. Why you might want to create static class members?</strong>

Creating static class members in JavaScript can be useful in several scenarios:

Constants: Static class members can be used to define constants that are shared among all instances of a class. For example, if you have a Math utility class, you can define a static property Math.PI to represent the mathematical constant pi (π). Since it's a constant value, it makes sense for all instances to share the same value.

Utility Methods: Static class methods can be used to create utility functions that are not specific to any instance but are related to the class as a whole. These methods can perform operations or calculations that are independent of any particular instance. For example, in a String manipulation class, you might have a static method StringUtility.capitalize() that capitalizes the first letter of a given string.

In JavaScript, there is no concept of a static class member like in some other programming languages. However, you can achieve similar functionality using a combination of constructor functions, prototype properties, and closures.

<strong>15. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?</strong>

Template literals help make it simple to do string interpolation, or to include variables in a string. Before ES2015, it was common to do something like this:

```
var person = {name: 'Tyler', age: 28};
console.log(
  'Hi, my name is ' + person.name + ' and I am ' + person.age + ' years old!',
);
// 'Hi, my name is Tyler and I am 28 years old!'
```

With template literals, you can now create that same output like this instead:

```
const person = {name: 'Tyler', age: 28};
console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
// 'Hi, my name is Tyler and I am 28 years old!'
```

A second helpful use case is in creating multi-line strings. Before ES2015, you could create a multi-line string like this:

```
console.log('This is line one.\nThis is line two.');
// This is line one.
// This is line two.
```

Or if you wanted to break it up into multiple lines in your code so you didn't have to scroll to the right in your text editor to read a long string, you could also write it like this:

```
console.log(`This is line one.
This is line two.`);
```

Another use case of template literals would be to use as a substitute for templating libraries for simple variable interpolations:

```
const person = {name: 'Tyler', age: 28};
document.body.innerHTML = `
  <div>
    <p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
  </div>
`;
```
