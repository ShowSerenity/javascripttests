// Reversing a number
function reverseNumber() {
    const inputElement = document.getElementById("numberInput");
    const reversedNumberElement = document.getElementById("reversedNumber");
  
    // Getting the user's input
    const userInput = inputElement.value;
  
    // Reversing the number
    const reversedString = userInput.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
  
    // Displaying the reversed number
    reversedNumberElement.textContent = reversedNumber;
}


// Attaching button click to the reverseNumber function
const reverseButton = document.getElementById("reverseButton");
reverseButton.addEventListener("click", reverseNumber);




// Returning letters in alphabetical order
function sortStringAlphabetically() {
    const inputElement = document.getElementById("inputString");
    const sortedStringElement = document.getElementById("sortedString");
  
    // Getting the user's input
    const inputString = inputElement.value;

    const sortedString = inputString.split('').sort().join('');
  
    // Displaying the sorted string
    sortedStringElement.textContent = sortedString;
}
  
// Attaching button click to the sortStringAlphabetically function
const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortStringAlphabetically);
  



// Area of a triangle
function triangleArea() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);
  
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("Please enter valid side lengths.");
      return;
    }
  
    // Calculating the semiperimeter
    const s = (side1 + side2 + side3) / 2;
  
    // Calculating the area using Heron's formula
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  
    // Displaying the area
    document.getElementById("areaResult").textContent = area.toFixed(2);
}
  
// Attaching button click to the triangleArea function
const calculateAreaButton = document.getElementById("calculateAreaButton");
calculateAreaButton.addEventListener("click", triangleArea);
  



// Multiplication and division

// Multiplication
function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numeric values for both numbers.");
      return;
    }
  
    const multiplicationResult = num1 * num2;
    document.getElementById("resultMultiplyDivide").textContent = multiplicationResult;
}


// Division
function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numeric values for both numbers.");
    return;
    }

    if (num2 === 0) {
    alert("Division by zero is not allowed.");
    return;
    }

    const divisionResult = num1 / num2;
    document.getElementById("resultMultiplyDivide").textContent = divisionResult;
}
  
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);  
  



// Swapping two variables
function swapVariables() {
    let variable1 = document.getElementById("variable1").value;
    let variable2 = document.getElementById("variable2").value;
  
    // Swapping the variables by using destructuring
    [variable1, variable2] = [variable2, variable1];
  
    document.getElementById("resultVariable1").textContent = variable1;
    document.getElementById("resultVariable2").textContent = variable2;
}
  
const swapButton = document.getElementById("swapButton");
swapButton.addEventListener("click", swapVariables);
  
  



// Converting first letter into uppercase
function capitalizeFirstLetter() {
    const inputElement = document.getElementById("lowerString");
    const capitalizedStringElement = document.getElementById("capitalizedString");
  
    // Getting the user's input
    const inputString = inputElement.value;

    // Checking whether string is empty
    if (inputString.trim() === "") {
      alert("Please enter a string.");
      return;
    }
  
    // Capitalizing the first letter
    const capitalizedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);
  
    // Displaying the capitalized string
    capitalizedStringElement.textContent = capitalizedString;
}
  
const capitalizeButton = document.getElementById("capitalizeButton");
capitalizeButton.addEventListener("click", capitalizeFirstLetter);
  



// Calculating the factorial
function calculateFactorial() {
    const number = parseInt(document.getElementById("factNumber").value);
  
    if (isNaN(number) || number < 0) {
      alert("Please enter a non-negative integer.");
      return;
    }
  
    function getFactorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * getFactorial(n - 1);
      }
    }
  
    const factorial = getFactorial(number);
    document.getElementById("factorialResult").textContent = factorial;
}
  
const factorialButton = document.getElementById("factorialButton");
factorialButton.addEventListener("click", calculateFactorial);
  



// Counting a certain letter in a word
function letterCount() {
    const inputString = document.getElementById("inputWord").value;
    const targetLetter = document.getElementById("targetLetter").value;
  
    // Ensuring both input fields are not empty
    if (inputString.trim() === "" || targetLetter.trim() === "") {
      alert("Please enter a word and a target letter.");
      return;
    }
  
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === targetLetter) {
        count++;
      }
    }
  
    document.getElementById("resultLetter").textContent = `"${targetLetter}"`;
    document.getElementById("resultCount").textContent = count;
  }
  
  const countButton = document.getElementById("countButton");
  countButton.addEventListener("click", letterCount);




// Checking if at least one of the values is in the range of 50-99
document.getElementById("valueCheckButton").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;

  // Checking in either of them falls within the range
  const isInRange = (value1 >= 50 && value1 <= 99) || (value2 >= 50 && value2 <= 99);

  if (isInRange) {
    document.getElementById("valueCheckResult").textContent = "True";
  } else {
    document.getElementById("valueCheckResult").textContent = "False";
  }
})




// Checking if letter exists between 2nd and 4th positions in a given string
document.getElementById("checkLetter").addEventListener("click", function () {
  const string = document.getElementById("givenString").value;
  const letter = document.getElementById("letterBetween2And4").value;

  if (string[1] === letter || string[2] === letter || string[3] === letter) {
    document.getElementById("checkLetterResult").textContent = "True";
  } else {
    document.getElementById("checkLetterResult").textContent = "False";
  }
})




// Finding the largest value between the first and last elements and setting all the other elements to that value
document.getElementById('updateButton').addEventListener('click', function () {
  const inputArray = document.getElementById('inputArray').value.split(',').map(Number);
  
  const largest = Math.max(inputArray[0], inputArray[inputArray.length - 1]);

  for (let i = 0; i < inputArray.length; i++) {
      inputArray[i] = largest;
  }

  document.getElementById('updatedArray').textContent = inputArray.join(', ');
})




// Replacing each character in a given string with the next in the English alphabet
document.getElementById('replaceButton').addEventListener('click', function () {
  const inputString = document.getElementById('replaceString').value;

  // Create an array representing the English alphabet in both lowercase and uppercase.
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Map each character in the input string to the next character in the alphabet.
  const updatedString = inputString.replace(/[a-zA-Z]/g, function (char) {
      const currentIndex = alphabet.indexOf(char);
      const nextIndex = (currentIndex + 1) % alphabet.length;
      return alphabet[nextIndex];
  });

  document.getElementById('updatedString').textContent = updatedString;
})




// Sorting array of strings in order of increasing length
document.getElementById('sortArrayButton').addEventListener('click', function () {
  const stringArray = document.getElementById('arrayString').value.split(',').map(str => str.trim());

  // Sorting function to sort strings by length and preserve the order for equal-length strings
  stringArray.sort(function (a, b) {
    return a.length - b.length;

  });

  const sortedStrings = stringArray.join(', ');
  document.getElementById('sortedStrings').textContent = sortedStrings;
});





  