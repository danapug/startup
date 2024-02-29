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

function saveBudgetedInputs() {
    const budgetedInputs = document.querySelectorAll("[id^='budgeted-']");
    for (const input of budgetedInputs) {
      const userId = sessionStorage.getItem("userId"); // Assuming user ID from login or session
      localStorage.setItem(`${userId}-${input.id}`, input.value);
    }
}

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", function (event) {

    try {
        // Save only budgeted inputs (all their IDs start with "budgeted-")
        const budgetedInputs = document.querySelectorAll("[id^='budgeted-']")
        for (const input of budgetedInputs) {
            localStorage.setItem(input.id, input.value);
        }
        const totals = calculateTotals();
        // Display savings message using totals
        const savingsMessage = document.querySelector('#savings-message');
        if (totals.savings > 0) {
            savingsMessage.textContent = `You saved: $ ${totals.savings.toFixed(2)}. Way to go, keep saving!!\n
                You earned: $ ${totals.income.toFixed(2)}\n
                You spent: $ ${totals.expenses.toFixed(2)}`;
        } else {
        savingsMessageElement.style.color = 'red';
        savingsMessage.textContent = `You spent: $ ${-totals.savings.toFixed(2)} more than you made. Start saving!!\n
                You earned: $ ${totals.income.toFixed(2)}\n
                You spent: $ ${totals.expenses.toFixed(2)}`;
        }
        console.log("form data processed");
    } catch (error) {
        console.error("An error occurred:", error);
    }
    });

function retrieveBudgetData() {
  // Retrieve only budgeted values
  
    const budgetedScholarship = localStorage.getItem("budgeted-scholarship");
    const budgetedFinancial = localStorage.getItem("budgeted-financial");
    const budgetedIncome = localStorage.getItem("budgeted-income");

    const budgetedRent = localStorage.getItem("budgeted-rent");
    const budgetedCar = localStorage.getItem("budgeted-car");
    const budgetedTuition = localStorage.getItem("budgeted-tuition");
    const budgetedLoans = localStorage.getItem("budgeted-loans");
    const budgetedInsurance = localStorage.getItem("budgeted-insurance");
    const budgetedClothing = localStorage.getItem("budgeted-clothing");
    const budgetedBooks = localStorage.getItem("budgeted-books");
    const budgetedActivities = localStorage.getItem("budgeted-activities");
    const budgetedGroceries = localStorage.getItem("budgeted-groceries");
    const budgetedHair = localStorage.getItem("budgeted-hair");
    const budgetedTithing = localStorage.getItem("budgeted-tithing");
    const budgetedDate = localStorage.getItem("budgeted-date");
    const budgetedMisce = localStorage.getItem("budgeted-misce");
    const budgetedBank = localStorage.getItem("budgeted-bank");

    // Use retrieved budgeted values to pre-populate budgeted input fields
    document.querySelector("#budgeted-scholarship").value = budgetedScholarship;
    document.querySelector("#budgeted-financial").value = budgetedFinancial;
    document.querySelector("#budgeted-income").value = budgetedIncome;

    document.querySelector("#budgeted-rent").value = budgetedRent;
    document.querySelector("#budgeted-car").value = budgetedCar;
    document.querySelector("#budgeted-tuition").value = budgetedTuition;
    document.querySelector("#budgeted-loans").value = budgetedLoans;
    document.querySelector("#budgeted-insurance").value = budgetedInsurance;
    document.querySelector("#budgeted-clothing").value = budgetedClothing;
    document.querySelector("#budgeted-books").value = budgetedBooks;
    document.querySelector("#budgeted-activities").value = budgetedActivities;
    document.querySelector("#budgeted-groceries").value = budgetedGroceries;
    document.querySelector("#budgeted-hair").value = budgetedHair;
    document.querySelector("#budgeted-tithing").value = budgetedTithing;
    document.querySelector("#budgeted-date").value = budgetedDate;
    document.querySelector("#budgeted-misce").value = budgetedMisce;
    document.querySelector("#budgeted-bank").value = budgetedBank;
}

// Call retrieveBudgetData on page load or login
retrieveBudgetData();