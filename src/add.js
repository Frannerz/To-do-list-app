import { toDoListItems } from './data.js';
import { displayItems } from './display.js';
import { randomRGB } from './colors.js';

const addButton = document.getElementById('add-button');

function addItem() {
    let userInput = prompt('Add an item to list');
    let itemId = new Date().getTime();
    let task = {
      task: userInput,
      id: itemId,
      complete: false,
      img: '<i class="ph ph-check-circle"></i>',
    };
  
    if (toDoListItems.length >= 10) {
      alert(
        "Your list is full for today! Complete or delete some items so you don't get overwhelmed❤️"
      );
    } else {
      toDoListItems.push(task);
      displayItems(toDoListItems);
    }
    console.log(toDoListItems);
  }
  
addButton.addEventListener('click', addItem);


function changeButtonDisplay(){
  let newColour = randomRGB();
  addButton.style.backgroundColor = newColour;
}

addButton.addEventListener('mouseover', changeButtonDisplay);
