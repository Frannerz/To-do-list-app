const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('list-container');
const showCompleteItems = document.getElementById('show-complete');
const hideCompleteItems = document.getElementById('hide-complete');

//list to hold the items
let toDoListItems = [];
let completedItems = [];


//function to add item to list from prompt
function addItem() {
  const userInput = prompt('Add an item to list');
  const itemId = new Date().getTime();
  const task = { task: userInput, id: itemId, complete: false, img:'<i class="ph ph-check-circle"></i>' }
  
  if(toDoListItems.length>=10){
    alert("Your list is full for today! Complete or delete some items so you don't get overwhelmed❤️")
  } else {
    toDoListItems.push(task);
    displayIncomplete(toDoListItems);
  }
  console.log(toDoListItems);
  
}

addButton.addEventListener('click', addItem);


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
  });
}

function displayIncomplete(array){
  let newArray = array.filter((item)=>!item.complete)
  displayItems(newArray)
}

function showComplete(){
  displayItems(toDoListItems);
}

function hideComplete(){
  displayIncomplete(toDoListItems);
}

showCompleteItems.addEventListener('click', showComplete)
hideCompleteItems.addEventListener('click', hideComplete)

function completeItem(event) {
  const listItem = event.target.closest('li');
  const completedItem = toDoListItems.find((item)=>item.id === Number(listItem.id));
  
  //mark item as true and change the tick icon
  completedItem.img = '<i class="ph-fill ph-check-circle"></i>';
  completedItem.complete = true;

  //add this item to the completed items
  completedItems.push(completedItem);
  console.log("complete:", completedItems);

  //triggers the display function
  displayIncomplete(toDoListItems)
}

function deleteItem(event) {
  console.log("list before", toDoListItems);
  const listItem = event.target.closest('li');
  const index = toDoListItems.findIndex((item)=>item.id === Number(listItem.id));
  
  toDoListItems = toDoListItems.slice(0,index).concat(toDoListItems.slice(index+1));
  
  console.log("updated list after", toDoListItems);

  //triggers the display function
  displayIncomplete(toDoListItems);
}

const regularItems = document.getElementById('regular-items')

regularItems.addEventListener('click', function(event) {
  const item = event.target;
  if (item.tagName === 'BUTTON') { 
    const task = item.innerText;
    const itemId = new Date().getTime(); 
    const taskToAdd = { 
      task: task, 
      id: itemId, 
      complete: false,
      img: '<i class="ph ph-check-circle"></i>' 
    };
    if(toDoListItems.length>=10){
      alert("Your list is full for today! Complete or delete some items so you don't get overwhelmed ❤️")
    } else {
    toDoListItems.push(taskToAdd); 
    displayIncomplete(toDoListItems); 
    }
  }
});


