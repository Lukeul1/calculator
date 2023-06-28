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

  const firstNumber = 3;
  const operator = '+';
  const secondNumber = 5;

  const result = operate(operator, firstNumber, secondNumber);
  console.log(result);