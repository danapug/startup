// Get references to category elements
const categoryElements = document.querySelectorAll(".category");

// Function to calculate the difference for a single category
function calculateDifference(categoryElement) {
    const budgetedAmountInput = categoryElement.querySelector("[id*='budgeted']"); // Improved selector
    const actualAmountInput = categoryElement.querySelector("[id*='actual']");
    const differenceInput = categoryElement.querySelector("[id*='difference']");

    const budgetedAmount = parseFloat(budgetedAmountInput.value) || 0;
    const actualAmount = parseFloat(actualAmountInput.value) || 0;
    const difference = budgetedAmount - actualAmount;

    differenceInput.value = difference.toFixed(2);
}

// Loop through categories and calculate differences initially
categoryElements.forEach(calculateDifference);

// Add event listener to the submit button
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Recalculate differences on submit
    categoryElements.forEach(calculateDifference);

    // Your logic for saving the budget data (if needed)
    // ...
});

//function for resetting the budget

getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
}

saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }
