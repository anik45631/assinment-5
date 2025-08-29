1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById: Selects a single element by its ID. Returns one element or null.

getElementsByClassName: Selects all elements with a specific class. Returns an HTMLCollection (live).

querySelector: Selects the first element matching a CSS selector.

querySelectorAll: Selects all elements matching a CSS selector. Returns a NodeList (static).

In short, getElementById is for single IDs, getElementsByClassName is live for multiple elements, and querySelector/querySelectorAll allow flexible CSS selector-based selection.

2. How to create and insert a new element into the DOM

Create the element:

const newDiv = document.createElement("div");

Add content or attributes:

newDiv.innerText = "Hello World";
newDiv.classList.add("myClass");

Append it to the DOM:

document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

Event Bubbling is the process where an event starts from the target element and then propagates up through its parent elements to the root (document).

Example: If you click a button inside a div, the click event triggers on the button first, then the parent div, then the body.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener on a parent element instead of multiple child elements.

When an event occurs on a child, the parent handles it using event bubbling.

Why useful:

Reduces memory usage (fewer event listeners).

Works for dynamically added elements that didn’t exist initially in the DOM.

5. Difference between preventDefault() and stopPropagation() methods

preventDefault(): Stops the default action of an element.

Example: Prevent a form submission or a link redirect.

stopPropagation(): Stops the event from bubbling up to parent elements.

Example: Clicking a button inside a div won’t trigger the div’s click handler if used.
