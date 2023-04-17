// Logo.js
import React, { useEffect } from 'react';
import './Logo.css';
import { animateLogo } from './Logo_animation.js';

const Logo = () => {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        animateLogo();

    }, []);

    return (
        <div className="logo-container">
            <div className="logo">
                <div id="Canvas_container">
                    <canvas id="myCanvas" width="100%" height="100%"></canvas>
                </div>
            </div>
        </div >
    );
};

export default Logo;
