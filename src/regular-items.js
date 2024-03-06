import { toDoListItems } from './data.js';
import { displayItems } from './display.js';

const regularItems = document.getElementById('regular-items');

regularItems.addEventListener('click', function (event) {
  let item = event.target;
  let task = item.innerText;
  let itemId = new Date().getTime();
  let taskToAdd = {
    task: task,
    id: itemId,
    complete: false,
    img: '<i class="ph ph-check-circle"></i>',
  };
  if (toDoListItems.length >= 10) {
    alert(
      "Your list is full for today! Complete or delete some items so you don't get overwhelmed ❤️"
    );
  } else {
    toDoListItems.unshift(taskToAdd);
    displayItems(toDoListItems);
  }
});
