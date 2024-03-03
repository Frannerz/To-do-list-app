import { listContainer } from "./complete.js";

export function displayItems(array) {
    listContainer.innerHTML = '';

    array.forEach((task) => {
      let item = document.createElement('li');
      item.id = task.id;

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

      listContainer.append(item);
    });
  }
  
// export function displayIncomplete(array) {
//     let newArray = array.filter((item) => !item.complete);
//     displayItems(newArray);
//   }