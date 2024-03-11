function loadScores() {

    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const tableBodyEl = document.querySelector('#scores');
    console.log(scores);
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const scoreTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = score.name;
        scoreTdEl.textContent = score.score;
        dateTdEl.textContent = score.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(scoreTdEl);
        rowEl.appendChild(dateTdEl);
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  

function calculateAndDisplayScore() {
  // Calculate score based on actual income and expenses
  const score = calculateScore();
  const scoreDisplayElement = document.querySelector('#current-score');

  // Display score if element exists
  if (scoreDisplayElement) {
    scoreDisplayElement.textContent = `Current Score: ${score.toFixed(2)}%`;
  }
}

function calculateScore() {
  // Access actual income and expenses from localStorage
  const actualIncome = parseFloat(localStorage.getItem('actual-income')) || 0;
  const actualExpenses = parseFloat(localStorage.getItem('actual-expenses')) || 0;
  const savings = actualIncome - actualExpenses;
  const score = (savings / actualIncome) * 100;

  return score;
}


async function saveScore(username) {
  const score = calculateScore();
  const newScore = { name: username, score: score.toFixed(2), date: new Date().toLocaleDateString() };

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newScore)
    });

    const data = await response.json();
    console.log("Score submitted successfully:", data);
  } catch (error) {
    console.error("Error submitting score:", error);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("username");
  loadScores();
  calculateAndDisplayScore();

  window.addEventListener("budgetSubmitted", function (event) {
    const username = sessionStorage.getItem("username");
    saveScore(username);
    // Reload scores after saving
    loadScores();
    calculateAndDisplayScore();
  });
});