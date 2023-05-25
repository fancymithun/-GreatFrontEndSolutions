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