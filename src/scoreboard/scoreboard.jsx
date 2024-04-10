import React, { useEffect, useState } from 'react';
import './scoreboard.css';


export function Scoreboard() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        async function loadScores() {
            let currentUser = localStorage.getItem('userName');
            let response = await fetch(`/api/scores/${currentUser}`);
            const scoresData = await response.json();
            setScores(scoresData);
        }

        loadScores();
    }, []);

    return (
        <main>
            <table className="table table-warning table-striped-columns">
                <thead className="table-dark">
                    <tr>
                        <th>User</th>
                        <th>$ Saved</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.length > 0 ? (
                        scores.map((score, index) => (
                            <tr key={index}>
                                <td>{score.username}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">Be the first to score</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    );
}