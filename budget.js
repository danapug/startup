// Get references to category elements
const categoryElements = document.querySelectorAll(".category");

// Function to calculate the difference for a single category
function calculateDifference(categoryElement) {
    const budgetedAmountInput = categoryElement.querySelector("[id*='budgeted']"); 
    const actualAmountInput = categoryElement.querySelector("[id*='actual']");
    const differenceInput = categoryElement.querySelector("[id*='difference']");

    const budgetedAmount = parseFloat(budgetedAmountInput.value) || 0;
    const actualAmount = parseFloat(actualAmountInput.value) || 0;
    const difference = budgetedAmount - actualAmount;

    differenceInput.value = difference.toFixed(2);
}

// Loop through categories and calculate differences initially
categoryElements.forEach(calculateDifference);


function calculateTotals() {
    // Get references to income and expense input fields
    const incomeInputs = document.querySelectorAll("[id*='income']");
    const expenseInputs = document.querySelectorAll("[id*='expense']");
  
    // Initialize variables
    let totalIncome = 0;
    let totalExpenses = 0;
  
    // Loop through income and expense inputs and sum their values
    for (const input of incomeInputs) {
      totalIncome += parseFloat(input.value) || 0;
    }
    for (const input of expenseInputs) {
      totalExpenses += parseFloat(input.value) || 0;
    }
  
    const savings = totalIncome - totalExpenses; // Calculate savings as well
  
    return {
      income: totalIncome,
      expenses: totalExpenses,
      savings: savings
    };
  }

   const submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();                 // Prevent default form submission
        categoryElements.forEach(calculateDifference);         // Recalculate differences on submit

        const totals = calculateTotals();       //totals of income, expenses, and savings

        const budgetData = {              //budget info is saved to localStorage
            income: totals.income,
            expenses: totals.expenses,
            savings: totals.savings
        };
        localStorage.setItem("budgetData", JSON.stringify(budgetData));
        const scoreEl = document.querySelector('#score');
        const score = calculateScore();
        scoreEl.textContent = `Score: ${score.toFixed(2)}%`;
    });

    function getPlayerName() {
        // Check if the username is stored in localStorage
        const storedUsername = localStorage.getItem("username");
      
        // If username exists, return it
        if (storedUsername) {
          return storedUsername;
        } else {
          // If username is not found, handle it appropriately (e.g., prompt for input)
          console.warn("Username not found in localStorage. Consider alternative methods (e.g., prompting user for login).");
          return ""; // You can return an empty string or a default value here
        }
    }

    const playerName = getPlayerName();

// Use the player name to connect with their budget data (example)
const budgetData = getBudgetForPlayer(playerName);

    function calculateScore() {
        
        const budgetData = JSON.parse(localStorage.getItem("budgetData"));
        const income = budgetData.income;
        const expenses = budgetData.expenses;
        const savings = income - expenses;
        const score = (savings / income) * 100;          //scoreboard formula
        return score;
    }

    function getBudgetForPlayer(playerName) {
        const allBudgetData = JSON.parse(localStorage.getItem("budgetData") || "{}"); // Handle potential missing data
        const playerBudget = allBudgetData[playerName]; // Assuming budget data is stored per player name as keys
      
        if (playerBudget) {
          return playerBudget;
        } else {
          // Handle the case where the player's budget data is not found
          console.warn(`Budget data not found for player: ${playerName}`);
          return null; // Or return an empty object or default value
        }
    }

    
//function for updating the scoreboard
//function for resetting the budget
