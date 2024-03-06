# A task tracker app for people who need some motivation!

**How to use:**
- Clone the repository to your computer
- Run index.html

**Features:**
- Personalise your list by adding your name
- Set yourself a daily target
- Receive motivational messages when you achieve your target
- Quickly add frequently completed tasks
- Mark items as complete/incomplete
- Delete items or delete the whoile list
- Receive an alert if you try to add too many tasks
- Keep it interesting- random colour selector ensures yout app looks interesting


# Question 1
A. Knowledge and demonstrated use of Javascript (13 marks) 
B. Knowledge and demonstrated use of HTML and CSS (10 marks)
C. Code readability, layout, and use of best practices (4 marks)
D. Creativity (5 marks)

**Objectives and where to find examples:**
- Use boolean values and if..else statements to branch logic of your program: **see add.js**
- Use a data structure like an array to store values: **see data.js and regular-items.js (task objects are created and added to toDoListItems array)**
- Use a loop or a while loop to reduce repetition: **see display.js uses a forEach loop to create each <li> element, colors.js for loop for iterating through buttons**
- Use functions to make code reusable: **see all js files**
- Use console.log and alert to display messages: **see complete.js**
- Use some HTML and CSS to create a basic website. Use at least 4 different HTML tags and style at least 2 of them. This does not need to look good! It is just a demo of what is covered: **see styles.css and colors.js**
- Get input from the user on a web page: **see login.js**
- Make changes to the HTML or CSS using JavaScript: **see display.js, colors.js, target.js**
- Use an event to trigger a change to a web page: **see complete.js**



# Question 2

A. Demonstrated knowledge of unshift(), shift(), and split() (6 marks)
B. Demonstrated knowledge of object methods (3 marks)
C. Demonstrated knowledge of DOM events (3 marks)

## 2.1
### Define unshift(), shift() and split():
- unshift() and shift() are array methods and can be used to modify an array
- unshift() adds an element to the start of an array
- shift() removes an element from the start of an array
- split() is a string method. This is used to split a string into an array

### Using the topic of “CFGdegree”, provide an example of unshift(), shift() and split(). (E.g.The theme could be the different CFGdegree streams.):
- I have a string containing the CFG streams:
e.g.
```javascript
let streams = "data, software, full-stack, product"
```
- I use split() to split them into an array (I add the separator ',' in brackets to signifiy that the string should be split at the commas):
e.g.
```javascript
let array = streams.split(',')
```
- The data stream has been cancelled! Let's remove this using shift():
e.g.
```javascript
array.shift()
```
- Don't worry- we've found some sponsors so data is back on! We'll add it back with unshift():
e.g.
```javascript
array.unshift('data')
```
**Find an example of unshift() in my project in regular-items.js**

## 2.2.
### Define object methods
- An object method is a function stored as an object property
- You can call an object method by doing objectName.methodName()
### Using the topic of “Programming Languages”, create a new object and object methods.
- e.g.
```javascript
const programmingLanguages = {
    JavaScript: {
        langName: 'JavaScript',
        popularityRating: 3,
        helloWorld() {
            console.log("type console.log('Hello World')");
        }
    },
    Python: {
        langName: 'Python',
        popularityRating: 1,
        helloWorld() {
            console.log("type print('Hello World')");
        }
    }
};

```
I have a helloWorld() method for each language which console logs the instructions for the hello world program for each language.
To access the javaScript helloWorld function, you write:
```javascript
programmingLanguages.JavaScript.helloWorld()
```

## 2.3.
### Explain the onmouseover event
- the **onmouseover** event is a DOM event which occurs when a mouse moves over/ enters an element
- **onmouseover** will call a function when your mouse moves over the element, for example:

html:
```htmlembedded
<p onmouseover="changeColor(this)">Boring text</p>

```
JavaScript:
```javascript
function changeColor(element) {
    element.style.color = 'green';
}

```
**This will turn the text green!**
- This event is often used with onmouseout, which is triggered when the mouse pointer leaves the element

### Explain two other DOM events of your choosing
**onclick**:
- this event happens when when the user clicks a HTML element, e.g. a button or an image
e.g.

html:
```htmlembedded
<button onclick="myFunction()">Click me</button>
<p id="targetParagraph"></p>
```
JavaScript:
```javascript=
function myFunction(element) {
  document.getElementById("targetParagraph").innerText= "Hello World";
}
```
**onkeydown**:
- this event happens when when the user presses a key on the keyboard
- you can also add event listeners like this:

html:
```htmlembedded
<p id="keyPressed">Key Pressed: None</p>
```
JavaScript:
```javascript
    
    function displayKeyCode(event) {
        var keyCode = event.keyCode;
        document.getElementById("keyPressed").innerHTML = "Key Pressed: " + keyCode;
    }
    
document.addEventListener('keydown', displayKeyCode);

```

#### See further examples of DOM events in my project!!
