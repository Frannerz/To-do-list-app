// import { toDoListItems } from "./data.js";
// import { displayItems } from "../src/display.js";

// export function deleteItem(event) {
//     console.log('list before delete:', toDoListItems);
//     let list = [...toDoListItems]
//     let listItem = event.target.closest('li');
//     let index = list.findIndex(
//       (item) => item.id === Number(listItem.id)
//     );
  
//     list = list
//       .slice(0, index)
//       .concat(list.slice(index + 1));
  
//     console.log('updated list after delete:', list);
  
//     displayItems(list);
//   }
  
  