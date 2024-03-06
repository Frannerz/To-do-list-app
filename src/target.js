export let target = 0;

const targetInput = document.getElementById('target-today');
const targetDisplay = document.getElementById('target-display');

targetInput.addEventListener('input', function () {
  targetDisplay.textContent = targetInput.value;
  target = parseInt(targetInput.value, 10);
});
