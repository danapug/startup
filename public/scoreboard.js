async function loadScores() {
//fetch to call /scores
  const response = await fetch ("/api/scores");
  const scores = await response.json();
  const tableBodyEl = document.querySelector('#scores');
  console.log(scores);
  if (Object.entries(scores).length) {
    for (const [username, score] of Object.entries(scores)) {
      const nameTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');
      
      nameTdEl.textContent = username;
      scoreTdEl.textContent = score;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
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


function saveScore(username) {
  const score = calculateScore(); 
  console.log(score);
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const newScore = { name, score: score.toFixed(2), date: new Date().toLocaleDateString() };
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
}

window.addEventListener("DOMContentLoaded", async function () {
const username = sessionStorage.getItem("username");
await loadScores();
calculateAndDisplayScore();

});

