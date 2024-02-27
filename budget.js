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
    const incomeInputs = document.querySelectorAll("[id*='income']");
    const expenseInputs = document.querySelectorAll("[id*='expense']");
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
    const playerName = getPlayerName();
    updateScoreboard(playerName, score); 
    const savings = totalIncome - totalExpenses; 
    const savingsMessageEl = document.querySelector('#savings-message'); 
    savingsMessageEl.textContent = `You saved ${savings.toFixed(2)} this month.`;
});

function getPlayerName() {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        return storedUsername;
    } 
    else {
          // If username is not found
        console.warn("Username not found in localStorage.");
        return ""; 
    }
}

const playerName = getPlayerName();
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
    const playerBudget = allBudgetData[playerName]; 
      
    if (playerBudget) {
        return playerBudget;
    } 
    else {
        // Handle the case where the player's budget data is not found
        console.warn(`Budget data not found for player: ${playerName}`);
        return null; // Or return an empty object or default value
    }
}

function updateScoreboard(username, score) {
    let scores = JSON.parse(localStorage.getItem('scores') || "[]");      //retrieve scores from localStorage
    const foundIndex = scores.findIndex(entry => entry.name === username);     // Update the score for the given username OR add a new entry
    if (foundIndex !== -1) {
      scores[foundIndex].score = score;
      scores[foundIndex].date = new Date().toLocaleDateString(); 
    } 
    else {
      scores.push({ name: username, score: score, date: new Date().toLocaleDateString() });
    }
    scores.sort((a, b) => b.score - a.score);             // Sort scores in descending order
    scores = scores.slice(0, 10);                        // Limit top 10 scores
    localStorage.setItem('scores', JSON.stringify(scores));     // Update localStorage with the new scores
}

function resetBudget() {
    localStorage.removeItem('budgetData'); 
    const inputElements = document.querySelectorAll("[id*='budgeted'], [id*='actual'], [id*='difference']");
    inputElements.forEach(element => element.value = ""); 
    const savingsMessageEl = document.querySelector('#savings-message');
    savingsMessageEl.textContent = ""; // Or set a default message 
}

const resetButton = document.querySelector("button[id='reset-budget']"); 
resetButton.addEventListener("click", function (event) {
  event.preventDefault(); 
  resetBudget();
});
