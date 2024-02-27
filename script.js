const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('list-container');

//list to hold the items
let toDoListItems = [];
let completedItems = [];

//function to add item to list from prompt
function addItem(){
  const userInput = prompt("Add an item to list");
  const itemId = new Date().getTime();
//   toDoListItems.push({userInput, itemId})
  if(userInput){
    const item = document.createElement('li');
    item.id = itemId;
    item.innerHTML = `
    <div class='complete-button'>
        <i class="ph ph-check-circle"></i>
    </div>
    <div class='list-item'>
        ${userInput}
    </div>
    <div class='delete-button'>
        <i class="ph ph-trash"></i>
    </div>
    `
    listContainer.append(item);
    toDoListItems.push(item)
    const completeIcon = document.querySelector('.complete-button i');
    const deleteIcon = document.querySelector('.delete-button i');
    completeIcon.addEventListener('click', completeItem);
    deleteIcon.addEventListener('click', deleteItem);
  }
}

addButton.addEventListener("click", addItem);

function completeItem(event){
    const icon = event.target;
    const listItem = event.target.closest('.list-item');
//<i class="ph-fill ph-check-circle"></i>
}

function deleteItem(){
//<i class="ph-fill ph-trash"></i>
}