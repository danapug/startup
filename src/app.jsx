import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';
import { About } from './about/about';
import { Scoreboard } from './scoreboard/scoreboard';
import { Budget } from './budget/budget';

export default function App() {
    return <body>
    <header>
        <h1>Budget Tracker</h1>
        <nav> 
            <menu>
                <li><a href="index.html"> Home</a></li>
            </menu>
        </nav>
    </header>


    <Login />
    <About />
    <Budget />
    <Scoreboard />
    

    <footer>
        <span class = "text-reset"> Author:</span>
        <a href = "https://github.com/danapug/startup"> GitHub</a>
    </footer>
</body>
}