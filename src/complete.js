import { toDoListItems } from './data.js';
import { displayItems } from './display.js';
import { deleteItem } from './delete.js';
import { target } from './target.js';

export const listContainer = document.getElementById('list-container');
const showCompleteItems = document.getElementById('show-complete');
const hideCompleteItems = document.getElementById('hide-complete');

//checks if completed target amount
function checkCompleteList() {
  let completedItems = toDoListItems.filter((item) => item.complete === true);
  if (completedItems.length === target) {
    alert(`Well done! You have completed ${target} items 🥳`);
  }
}

function hideComplete() {
  const incompleteTasks = toDoListItems.filter((item) => !item.complete);
  displayItems(incompleteTasks);
}

function showComplete() {
  displayItems(toDoListItems);
}

showCompleteItems.addEventListener('click', showComplete);
hideCompleteItems.addEventListener('click', hideComplete);

//adds event listener to listContainer and then checks which function to trigger

listContainer.addEventListener('click', function (event) {
  let selectedButton = event.target;
  if (selectedButton.closest('.complete-button i')) {
    toggleComplete(event);
  } else if (selectedButton.closest('.delete-button i')) {
    deleteItem(event);
  }
});

function toggleComplete(event) {
  let listItem = event.target.closest('li');

  let completedIndex = toDoListItems.findIndex(
    (item) => item.id === Number(listItem.id)
  );
  let completedItem = toDoListItems[completedIndex];

  //toggle to complete
  if (completedItem.complete === false) {
    completedItem.img = '<i class="ph-fill ph-check-circle"></i>';
    completedItem.complete = true;

    // toggle to incomplete
  } else {
    completedItem.img = '<i class="ph ph-check-circle"></i>';
    completedItem.complete = false;
  }

  console.log('to-do-after', toDoListItems);

  checkCompleteList();
  displayItems(toDoListItems);
}
