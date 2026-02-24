# ph-b13-a4

<!-- =============================================== -->

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById()
#select only one element by its id name and return it if no id found return null.

getElementByClassName()
#select element by class name and return multiple elements..

querySelector()
#Select the first matching element using css selector..

querySelectorAll()
#Select all matching elements and return nodeList.

<!-- =============================================== -->

2. How to create and insert a new element into the DOM

step1: create Element

# const newElement = document.createElement("div");

Step 2: Add content

# newElement.innerText = "Hello World";

Step 3: Insert into DOM

# document.body.appendChild(newElement);

<!-- =============================================== -->

3. What is Event Bubbling? How does it work?
   Event bubbling means the event starts from the target(Sons) element and moves upward to the parent elements.

   <!-- =============================================== -->

4. What is Event Delegation? Why is it useful?

Event Delegation means adding event listener to a parent element instead of multiple child elements.

   <!-- =============================================== -->

5. Difference between preventDefault() and stopPropagation()

   preventDefault()

   # Stops the browser's default behavior form will not reload the page.

   document.querySelector("form").addEventListener("submit", function(e){
   e.preventDefault();
   });

   stopPropagation()

   # Stops event bubbling .evnt will not go to parent element.

   button.addEventListener("click", function(e){
     e.stopPropagation();
      });
