// Functions for basic math operations
const add = (num1, num2) => {
    return num1 + num2;
  };
  
  const subtract = (num1, num2) => {
    return num1 - num2;
  };
  
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  
  const divide = (num1, num2) => {
    if (num2 === 0) {
      console.log('Error: Division by zero');
      return undefined;
    }
    return num1 / num2;
  };
  
  // Function to perform an operation based on the operator
  const operate = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        console.log('Error: Invalid operator');
        return undefined;
    }
  };
  
  // Variables for calculator operation
  let firstNumber = '';
  let operator = '';
  let secondNumber = '';
  let displayValue = '';
  
  // Function to update the display
  const updateDisplay = () => {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue || '0';
  };
  
// Function to append a digit or operator to the display
const appendToDisplay = (input) => {
    if (typeof input === 'number') {
      displayValue += input.toString();
    } else if (typeof input === 'string') {
      displayValue += ' ' + input + ' ';
    }
    updateDisplay();
  };
  
  // Function to append the operator and perform calculation
  const selectOperator = (selectedOperator) => {
    if (operator !== '') {
      // An operator is already selected, perform calculation first
      performCalculation();
    }
    operator = selectedOperator;
    firstNumber = parseFloat(displayValue);
    displayValue = '';
  };
  
  // Function to perform calculation
  const performCalculation = () => {
    if (firstNumber !== '' && operator !== '' && displayValue !== '') {
      secondNumber = parseFloat(displayValue);
      const result = operate(operator, firstNumber, secondNumber);
      displayValue = result.toString();
      updateDisplay();
      firstNumber = result;
      operator = '';
      secondNumber = '';
    }
  };
  
  // Function to clear the display and reset variables
  const clearDisplay = () => {
    displayValue = '';
    updateDisplay();
    firstNumber = '';
    operator = '';
    secondNumber = '';
  };
  
  // Event listeners for number buttons
  document.getElementById('1').addEventListener('click', () => appendToDisplay(1));
  document.getElementById('2').addEventListener('click', () => appendToDisplay(2));
  document.getElementById('3').addEventListener('click', () => appendToDisplay(3));
  document.getElementById('4').addEventListener('click', () => appendToDisplay(4));
  document.getElementById('5').addEventListener('click', () => appendToDisplay(5));
  document.getElementById('6').addEventListener('click', () => appendToDisplay(6));
  document.getElementById('7').addEventListener('click', () => appendToDisplay(7));
  document.getElementById('8').addEventListener('click', () => appendToDisplay(8));
  document.getElementById('9').addEventListener('click', () => appendToDisplay(9));
  document.getElementById('0').addEventListener('click', () => appendToDisplay(0));
  
  // Event listeners for operator buttons
document.getElementById('add').addEventListener('click', () => selectOperator('+'));
document.getElementById('subtract').addEventListener('click', () => selectOperator('-'));
document.getElementById('multiply').addEventListener('click', () => selectOperator('*'));
document.getElementById('divide').addEventListener('click', () => selectOperator('/'));

// Event listener for the equals button
document.getElementById('equals').addEventListener('click', performCalculation);

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', clearDisplay);
