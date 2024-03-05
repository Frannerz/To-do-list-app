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
```
let streams = "data, software, full-stack, product"
```
- I use split() to split them into an array (I add the separator ',' in brackets to signifiy that the string should be split at the commas):
e.g.
```
let array = streams.split(',')
```
- The data stream has been cancelled! Let's remove this using shift():
e.g.
```
array.shift()
```
- Don't worry- we've found some sponsors so data is back on! We'll add it back with unshift():
e.g.
```
array.unshift('data')
```
**Find an example of unshift() in my project in regular-items.js**

## 2.2.
### Define object methods

### Using the topic of “Programming Languages”, create a new object and object methods.

## 2.3.
### Explain the onmouseover event

### Explain two other DOM events of your choosing

