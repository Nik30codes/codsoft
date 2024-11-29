const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.btn');
let expression = ""; // To store the current calculation expression

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // Handle the AC button (clear everything)
    if (value === "AC") {
      expression = "";  // Clear the expression
      display.textContent = "0";  // Reset display to 0
    } 
    // Handle the DEL button (delete the last character)
    else if (value === "DEL") {
      expression = expression.slice(0, -1);  // Remove the last character from the expression
      display.textContent = expression || "0";  // Show updated expression or 0 if empty
    } 
    // Handle the "=" button (evaluate expression)
    else if (value === "=") {
      try {
        const result = evaluateExpression(expression);  // Evaluate the expression
        expression = result.toString();  // Update expression with result
        display.textContent = result;  // Display the result
      } catch (error) {
        display.textContent = "Error";  // If evaluation fails, show error
        expression = "";
      }
    } 
    // For other buttons (numbers, operators, functions)
    else {
      // Handle special cases for functions and constants
      if (value === "sin" || value === "cos" || value === "tan" || value === "log" || value === "ln" || value === "√") {
        expression += `${value}(`;  // Add function with opening parenthesis
      } else if (value === "π") {
        expression += Math.PI;  // Add the value of π
      } else if (value === "e") {
        expression += Math.E;  // Add the value of e
      } else if (value === "x^2") {
        expression += "**2";  // Add the square operator
      } else {
        expression += value;  // Add regular numbers, operators, or parentheses
      }

      display.textContent = expression;  // Update display with the current expression
    }
  });
});

// Function to evaluate mathematical expressions
function evaluateExpression(expr) {
  expr = expr
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(")
    .replace(/√\(/g, "Math.sqrt(");
  
  try {
    return new Function('return ' + expr)();  // Safe evaluation of the expression
  } catch (error) {
    return 'Error';  // Return 'Error' if evaluation fails
  }
}


// Evaluate the full expression
function evaluateExpression(expr) {
  expr = expr
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(")
    .replace(/√\(/g, "Math.sqrt(");

  return eval(expr); // Evaluate the result
}
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
});
function evaluateExpression(expr) {
  expr = expr
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(")
    .replace(/√\(/g, "Math.sqrt(");
  
  // Use a more secure alternative to eval() (considering security risks)
  try {
    return new Function('return ' + expr)();  // This can safely evaluate mathematical expressions
  } catch (error) {
    return 'Error';
  }
}
