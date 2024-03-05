import { toDoListItems } from "./data.js";
import { displayItems } from "./display.js";

export function deleteItem(event) {
    console.log('list before', toDoListItems);
    let listItem = event.target.closest('li');
    let index = toDoListItems.findIndex(
      (item) => item.id === Number(listItem.id)
    );
   
    if (index !== -1) {
      toDoListItems.splice(index, 1);
    }
  
    console.log('updated list after', toDoListItems);
  
    displayItems(toDoListItems);
  }
  
//delete all 
function deleteAllItems(){
  while (toDoListItems.length > 0) {
    toDoListItems.pop();
  }
  displayItems(toDoListItems)
}

const deleteAllButton = document.getElementById('delete-all');
deleteAllButton.addEventListener('click', deleteAllItems);



// export function deleteItem(event) {
//     console.log('list before', toDoListItems);
//     let list = [...toDoListItems]
//     let listItem = event.target.closest('li');
//     let index = list.findIndex(
//       (item) => item.id === Number(listItem.id)
//     );
  
//     list = list
//       .slice(0, index)
//       .concat(list.slice(index + 1));
  
//     console.log('updated list after', list);
  
//     displayItems(list);
//   }