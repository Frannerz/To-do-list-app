// export let toDoListItems  = []; 
// let completedItems = [];


// // add tasks:

// const addButton = document.getElementById('add-button');

// function addItem() {
//     let userInput = prompt('Add an item to list');
//     let itemId = new Date().getTime();
//     let task = {
//       task: userInput,
//       id: itemId,
//       complete: false,
//       img: '<i class="ph ph-check-circle"></i>',
//     };
  
//     if (toDoListItems.length >= 10) {
//       alert(
//         "Your list is full for today! Complete or delete some items so you don't get overwhelmed❤️"
//       );
//     } else {
//       toDoListItems.push(task);
//       displayItems(toDoListItems);
//     }
//     console.log(toDoListItems);
//   }
  
// addButton.addEventListener('click', addItem);

// function changeButtonDisplay(){
//   let newColour = randomRGB();
//   addButton.style.backgroundColor = newColour;
// }

// addButton.addEventListener('mouseover', changeButtonDisplay);


// // display tasks


// export function displayItems(array) {
//     listContainer.innerHTML = '';

//     array.forEach((task) => {
//       let item = document.createElement('li');
//       item.className = 'list-item'
//       item.id = task.id;

//       item.innerHTML = `
//           <div class='complete-button'>
//               ${task.img}
//           </div>
//           <div class='list-item'>
//               ${task.task}
//           </div>
//           <div class='delete-button'>
//               <i class="ph ph-trash"></i>
//           </div>
//           `;

//       listContainer.append(item);
//     });
//   }
  
// // export function displayIncomplete(array) {
// //     let newArray = array.filter((item) => !item.complete);
// //     displayItems(newArray);
// //   }

// // complete tasks:


// const listContainer = document.getElementById('list-container');
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


// function deleteItem(event) {
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
  
  

