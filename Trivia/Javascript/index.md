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