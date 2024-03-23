async function loadScores() {
  let username = localStorage.getItem('userName')
  let response = await fetch(`/api/scores/${username}`)
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


window.addEventListener("DOMContentLoaded", async function () {
await loadScores();
});

