// Get references to category elements
const categoryElements = document.querySelectorAll(".category");

function calculateTotals() {
    const incomeInputs = document.querySelectorAll("#actual-scholarship, #actual-financial, #actual-income");
    const expenseInputs = document.querySelectorAll("#actual-rent, #actual-car, #actual-tuition, #actual-loans, #actual-insurance, #actual-clothing, #actual-books, #actual-activities, #actual-groceries, #actual-hair, #actual-tithing, #actual-date, #actual-misce");
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
    try {
        const totals = calculateTotals();       //totals of income, expenses, and savings
        const savingsMessage = document.querySelector('#savings-message');
        if (savingsMessage) {
            savingsMessage.textContent = `You saved: ${totals.savings.toFixed(2)}%`;
        }
        const budgetData = {              //budget info is saved to localStorage
            income: totals.income,
            expenses: totals.expenses,
            savings: totals.savings
        };
        localStorage.setItem("budgetData", JSON.stringify(budgetData));
    } 
    catch (error) {
        console.error("An error occurred:", error);
    }
});

