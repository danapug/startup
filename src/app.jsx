import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import { Login } from './login/login';
import { About } from './about/about';
import { Scoreboard } from './scoreboard/scoreboard';
import { Budget } from './budget/budget';



function NotFound() {
    return <main> 404. Return to sensitiveHeaders. Address unknown</main>;
}

export default function App() {
    return (
        <BrowserRouter>
    <body>
    <header>
        <h1>Budget Tracker</h1>
        <nav> 
            <menu>
                <li className='nav-item'>
                    <NavLink className='nav-link' to=''>
                    Login
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='budget'>
                        Budget
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='scoreboard'>
                        Scoreboard
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='about'>
                        About
                    </NavLink>
                </li>
            </menu>
        </nav>
    </header>


    <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/budget' element={<Budget />} />
        <Route path='/scoreboard' element={<Scoreboard/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    
    

    <footer>
        <span class = "text-reset"> Author:</span>
        <a href = "https://github.com/danapug/startup"> GitHub</a>
    </footer>
</body>
</BrowserRouter>
    );
}