import React from 'react';
import './budget.css';
import Button from 'react-bootstrap/Button';

export function Budget() {
    // Event messages
    const BudgetEndEvent = 'budgetEnd';

    let socket;
    // Functionality for peer communication using WebSocket
    function configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        socket.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text());
            if (msg.type === BudgetEndEvent) {
                displayMsg(`player ${msg.from} ended their budget`);
            }
        };
    }

    function displayMsg(msg) {
        const chatText = document.querySelector('#user');
        chatText.innerHTML =
            `<div className="event">${msg}</div>` + chatText.innerHTML;
    }

    function broadcastEvent(from, type) {
        const event = {
            from: from,
            type: type
        };
        socket.send(JSON.stringify(event));
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

    const handleSubmit = async (event) => {
        const budgetSubmittedEvent = new Event('budgetSubmitted');
        window.dispatchEvent(budgetSubmittedEvent);
        const totals = calculateTotals();
        // Display savings message using totals
        const budgetedInputs = document.querySelectorAll("[id^='budgeted-']");
        const userID = localStorage.getItem("userName");

        let response = await fetch("/api/score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userID,
                score: totals.savings.toFixed(2)
            })
        });
        broadcastEvent(userID, BudgetEndEvent);
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
    };

    configureWebSocket();

    return (
        <main>
            <h1>Budget Categories</h1>
            <div>
                <div className="category">
                    <p>Income</p>
                    <div>
                        <p>Scholarship</p>
                        <input type="text" id="budgeted-scholarship" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-scholarship" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Financial Aid</p>
                        <input type="text" id="budgeted-financial" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-financial" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Income from Job</p>
                        <input type="text" id="budgeted-income" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-income" placeholder="Actual Amount" />
                    </div>
                </div>

                <div className="category">
                    <p>Expenses</p>
                    <div>
                        <p>Rent/Housing</p>
                        <input type="text" id="budgeted-rent" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-rent" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Car/Gas</p>
                        <input type="text" id="budgeted-car" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-car" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Tuition</p>
                        <input type="text" id="budgeted-tuition" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-tuition" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Student Loans</p>
                        <input type="text" id="budgeted-loans" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-loans" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Insurance</p>
                        <input type="text" id="budgeted-insurance" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-insurance" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Clothing</p>
                        <input type="text" id="budgeted-clothing" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-clothing" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Books</p>
                        <input type="text" id="budgeted-books" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-books" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Activities</p>
                        <input type="text" id="budgeted-activities" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-activities" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Groceries</p>
                        <input type="text" id="budgeted-groceries" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-groceries" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Hair/Cosmetics</p>
                        <input type="text" id="budgeted-hair" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-hair" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Tithing</p>
                        <input type="text" id="budgeted-tithing" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-tithing" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Date Night</p>
                        <input type="text" id="budgeted-date" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-date" placeholder="Actual Amount" />
                    </div>
                    <div>
                        <p>Miscellaneous</p>
                        <input type="text" id="budgeted-misce" placeholder="Budgeted Amount" />
                        <input type="text" id="actual-misce" placeholder="Actual Amount" />
                    </div>
                </div>    

                <div className="category">
                    <p>Savings</p>
                    <div>
                        <p>Bank Account</p>
                        <input type="text" id="budgeted-bank" placeholder="Budgeted Amount" />
                        <input type="text" id="savings-bank" placeholder="Actual Amount" />
                    </div>
                </div>
                <p id="user" className="user-message"></p> 
                <Button variant='primary' onClick={() => handleSubmit()}>
                Save Budget Template
            </Button>
                <p id="savings-message"></p>
            </div>
        </main>
    );
}

export default Budget;
