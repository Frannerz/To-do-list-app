const targetButton = document.getElementById('target-button');
const targetDisplay = document.getElementById('target-display');
export let target = 0;

function setTarget(){
    target = prompt("Type a number to set your target for the day!")
    target = parseInt(target)
    if(!Number.isInteger(target)){
        target = prompt("Please type a valid integer");
      }
      targetDisplay.innerText = target
    }

targetButton.addEventListener('click', setTarget)

