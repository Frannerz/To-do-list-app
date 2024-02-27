const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('list-container');
const showComplete = document.getElementById('toggle-complete');

//list to hold the items
let toDoListItems = [];
let completedItems = [];

//function to add item to list from prompt
function addItem() {
  const userInput = prompt('Add an item to list');
  const itemId = new Date().getTime();
  toDoListItems.push({ task: userInput, id: itemId, complete: false, img:'<i class="ph ph-check-circle"></i>' });
  console.log(toDoListItems);
  //this triggers the displayItems function
  displayItems(toDoListItems);
}

addButton.addEventListener('click', addItem);

//add event listeners to the list container and decide what 
//to do based on what the event.target is
listContainer.addEventListener('click', function(event) {
    const target = event.target;
    if (target.closest('.complete-button i')) {
      completeItem(event);
    } else if (target.closest('.delete-button i')) {
      deleteItem(event);
    }
  });
  
function displayItems(array) {
  //empty out list before adding more items
  listContainer.innerHTML = '';

  //for each item in the array the is complete:false, display them in list
  array.forEach((task) => {
    
    if (!task.complete) {
      const item = document.createElement('li');
      item.id = task.id;

      // each list item will have a complete button, the task and delete button
      item.innerHTML = `
        <div class='complete-button'>
            ${task.img}
        </div>
        <div class='list-item'>
            ${task.task}
        </div>
        <div class='delete-button'>
            <i class="ph ph-trash"></i>
        </div>
        `;
      //append each <li> item to the <ul>
      listContainer.append(item);

    }
  });
}

function completeItem(event) {
  const listItem = event.target.closest('li');
  const completedItem = toDoListItems.find((item)=>item.id === Number(listItem.id));
  
  //mark item as true and change the tick icon
  completedItem.complete = true;
  completedItem.img = '<i class="ph-fill ph-check-circle"></i>';

  //add this item to the completed items
  completedItems.push(completedItem);
  
  console.log("complete:", completedItems);

  //triggers the display function
  displayItems(toDoListItems);
}

function deleteItem(event) {
  console.log("list before", toDoListItems);
  const listItem = event.target.closest('li');
  const index = toDoListItems.findIndex((item)=>item.id === Number(listItem.id));
  
  toDoListItems = toDoListItems.slice(0,index).concat(toDoListItems.slice(index+1));
  
  console.log("updated list after", toDoListItems);

  //triggers the display function
  displayItems(toDoListItems);
}

function showComplete(){
    
}