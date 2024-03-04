
export let target = 0;


const targetInput = document.getElementById('target-today');
const targetDisplay = document.getElementById('target-display');

  targetInput.addEventListener('input', function() {
    targetDisplay.textContent = targetInput.value;
    target = parseInt(targetInput.value, 10);
  });

// const targetButton = document.getElementById('target-button');
// const targetDisplay = document.getElementById('target-display');

// function setTarget(){
//     target = prompt("Type a number to set your target for the day!")
//     target = parseInt(target)
//     if(!Number.isInteger(target)){
//         target = prompt("Please type a valid integer");
//       }
//       targetDisplay.innerText = target
//     }

// targetButton.addEventListener('click', setTarget);