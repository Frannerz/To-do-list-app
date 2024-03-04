// import { toDoListItems, completedItems } from './data.js';
// import { displayItems } from './display.js';
// import { deleteItem } from '../old-files/delete.js';
// import { target } from './target.js';

// export const listContainer = document.getElementById('list-container');
// const showCompleteItems = document.getElementById('show-complete');
// const hideCompleteItems = document.getElementById('hide-complete');

// listContainer.addEventListener('click', function (event) {
//     let selectedButton = event.target;
//     if (selectedButton.closest('.complete-button i')) {
//       markAsComplete(event);
//     } else if (selectedButton.closest('.delete-button i')) {
//       deleteItem(event);
//     }
//   });


//   function showComplete() {
//     let completeArray = toDoListItems.concat(completedItems)
//     displayItems(completeArray);
//   }
  
//   function hideComplete() {
//     displayItems(toDoListItems);
//   }
  
//   showCompleteItems.addEventListener('click', showComplete);
//   hideCompleteItems.addEventListener('click', hideComplete);  

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
  
//   function removeFromList(item, list){
//     const index = list.findIndex((x) => item.task === x.task);
//     if (index !== -1) {
//       list.splice(index, 1);
//     }
//   }

