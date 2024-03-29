// Event messages
const BudgetEndEvent = 'budgetEnd';
const BudgetStartEvent = 'budgetStart';


// Functionality for peer communication using WebSocket
function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    this.displayMsg('system', 'budget', 'connected');
  };
  this.socket.onclose = (event) => {
    this.displayMsg('system', 'budget', 'disconnected');
  };
  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === BudgetEndEvent) {
      this.displayMsg('player', msg.from, `ended their budget`);
    } else if (msg.type === BudgetStartEvent) {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(`${message.from} started a new budget`); 
        }
      });
    }
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#user');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type) {
  const event = {
    from: from,
    type: type
  };
  this.socket.send(JSON.stringify(event));
}



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


const submitButton = document.getElementById("button");
submitButton.addEventListener("click", async function (event) {
  const budgetSubmittedEvent = new Event('budgetSubmitted');
  window.dispatchEvent(budgetSubmittedEvent);
  const totals = calculateTotals();
  // Display savings message using totals
  const budgetedInputs = document.querySelectorAll("[id^='budgeted-']")
  const userID = localStorage.getItem("userName");
    
  let response = await fetch("/api/score", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      username : userID,
      score : totals.savings.toFixed(2)
    })
  });
  console.log(response.ok);
  this.broadcastEvent(userID, BudgetEndEvent);
  const savingsMessage = document.querySelector('#savings-message');
  if (totals.savings > 0) {
    savingsMessage.textContent = `You saved: $ ${totals.savings.toFixed(2)}. Way to go, keep saving!!\n
    You earned: $ ${totals.income.toFixed(2)}\n
    You spent: $ ${totals.expenses.toFixed(2)}`;
  } 
  else {
    savingsMessage.style.color = 'red';
    savingsMessage.textContent = `You spent: $ ${-totals.savings.toFixed(2)} more than you made. Start saving!!\n
    You earned: $ ${totals.income.toFixed(2)}\n
    You spent: $ ${totals.expenses.toFixed(2)}`;
  }
// Store what the service gave us as the high scores
  const scores = await response.json();
  localStorage.setItem('scores', JSON.stringify(scores));

  try {
    configureWebSocket(); // Call the configureWebSocket method
  } 
  catch (error) {
    console.error(error);
  }
}.bind(this));

