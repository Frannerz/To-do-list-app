import { toDoListItems } from './data.js';

import { displayItems } from './display.js';
import { deleteItem } from './delete.js';
import { target } from './target.js';

export const listContainer = document.getElementById('list-container');
const showCompleteItems = document.getElementById('show-complete');
const hideCompleteItems = document.getElementById('hide-complete');


function checkCompleteList(){
  let completedItems = toDoListItems.filter((item)=>item.complete===true)
    if(completedItems.length===target){
      alert(`Well done! You have completed ${target} items 🥳`);
    }
}

function hideComplete() {
  const incompleteTasks = toDoListItems.filter(item => !item.complete);
  displayItems(incompleteTasks);
}

function showComplete() {
  displayItems(toDoListItems);
}

  
showCompleteItems.addEventListener('click', showComplete);
hideCompleteItems.addEventListener('click', hideComplete);  

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
    let completedItem = toDoListItems[completedIndex]
     
     //toggle to complete
     if(completedItem.complete === false){
      completedItem.img = '<i class="ph-fill ph-check-circle"></i>';
      completedItem.complete = true;
      
    // toggle to incomplete
     } else {
      completedItem.img = '<i class="ph ph-check-circle"></i>';
      completedItem.complete = false;
     }
     
    console.log('to-do-after', toDoListItems)
  
    checkCompleteList()
    displayItems(toDoListItems)
   }


  
  // function removeFromList(item, list){
  //   const index = list.findIndex((x) => item.task === x.task);
  //   if (index !== -1) {
  //     list.splice(index, 1);
  //   }
  // }

// original markAsComplete() function

// function markAsComplete(event) {
//    let listItem = event.target.closest('li');
//    let completedItem = toDoListItems.find(
//       (item) => item.id === Number(listItem.id)
//     );
  
//     //mark item as true and change the tick icon
//     completedItem.img = '<i class="ph-fill ph-check-circle"></i>';
//     completedItem.complete = true;
  
//     //add this item to the completed items
//     completedItems.push(completedItem);
//     if(completedItems.length===target){
//       alert(`Well done! You have completed ${target} items 🥳`);
//     }
//     console.log('to-do-before', toDoListItems)
//     //remove item from toDoList
//     removeFromList(completedItem, toDoListItems);
    
//     console.log('complete:', completedItems);
//     console.log('to-do-after', toDoListItems)
  
//     //triggers the display function
//     displayItems(toDoListItems);
//   }
  