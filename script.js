let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch(error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
function clearLast() {
  // Get the display element
  var display = document.getElementById('display');
  
  // Get the current value of the display
  var currentValue = display.value;
  
  // Check if the display is not empty
  if (currentValue.length > 0) {
      // Remove the last character from the display value
      var newValue = currentValue.slice(0, -1);
      
      // Update the display with the new value
      display.value = newValue;
  }
}
