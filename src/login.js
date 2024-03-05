const nameForm = document.getElementById('enter-name');
let firstNameDisplay = document.getElementById('firstNameDisplay');


nameForm.addEventListener('submit', function(event) {
    
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    firstNameDisplay.innerText = firstName + "'s"
  });