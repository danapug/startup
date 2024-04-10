import React from 'react';
import { useState, useEffect } from 'react';
import './about.css';

export function About() {
    const [imageURL, setURL] = useState('');
    useEffect(() => {
        const fetchPicture = async() => {
            const random = Math.floor(Math.random() * 1000);
            const response = await fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`);
            const data = await response.json();

            const containerEl = document.querySelector('#picture');
            const width = containerEl.offsetWidth;
            const height = containerEl.offsetHeight;
            const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}`;
            setURL(imgUrl);
        };
        fetchPicture();
    }, []);         //Empty dependency so that it only runs once

    return (
        <main>
            <div id="picture" className="picture-box">
                {imageURL && <img src={imageURL} alt="Random" />}
            </div>
            <p>
                The Budget Tracker is perfect for college students. The application is user friendly, efficient, and will create financial awareness. 
                Budget Tracker will allow users to become their own masters and take control of their expenses. 
                Users can input budget price goals and actual amounts for income and expenses in each category. 
                Understanding and managing expenses will allow college students to begin developing financial freedom and independence early on!
            </p>
            <div id="quote">
                <div>Think like a Saver, not a Consumer.</div>
                <div>- John Pugliano</div>
            </div>
        </main>
        
    );
};