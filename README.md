# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 getElementById("id"): 
• Selects one element by ID
• ID is unique, so it returns only one element

Example: document.getElementById("header")

 getElementsByClassName("class"): 
• Selects all elements with the same class
• Returns an HTMLCollection

Example: document.getElementsByClassName("box")

 querySelector(".class"): 
• Uses a CSS selector (class name)
• Returns the first matching element only

Example: document.querySelector(".box")

 querySelectorAll(".class"): 
• Uses a CSS selector
• Returns all matching elements
• Returns a NodeList

Example: document.querySelectorAll(".box")

# 2. How do you create and insert a new element into the DOM?

Step 1: Create the element: 
let newDiv = document.createElement("div");

Step 2: Add content (text or HTML):  
newDiv.innerText = "Hello World";

 Step 3: Insert it into the page:  
document.body.appendChild(newDiv);

# 3. What is Event Bubbling? And how does it work?

 Event Bubbling: 
Event bubbling is a DOM event propagation mechanism where an event triggered on a child element travels upward through its ancestors until it reaches the root (document).

 How it works: 
If you click a button inside a div:

Event happens on the button (target)

Then goes to the div (parent)

Then to body

Then to document

Example:
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked");
});

# 4. What is Event Delegation in JavaScript? Why is it useful?

 Event Delegation: 
Event Delegation is a technique where you attach one event listener to a parent element instead of adding listeners to many child elements.

Why it is useful: 
• Better performance — fewer event listeners
• Works for dynamically added elements
• Cleaner code

# 5. What is the difference between preventDefault() and stopPropagation() methods?

 preventDefault(): 
• Stops the browser’s default action
• The event still bubbles up

Example: Stop a form from submitting
-> event.preventDefault();

 stopPropagation(): 
• Stops the event from bubbling to parent elements
• Default action still happens

Example: Prevent parent click event from running
-> event.stopPropagation();
