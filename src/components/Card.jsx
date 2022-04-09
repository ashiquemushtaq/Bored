import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Card = ()=>{
    return(
        <section>
            <div className="card">
                <span className="top">Ready to kill your<br />boredom 🍻</span>
                <span className="bottom">Get a task</span>
                <div className="controls">
                <Link to="/activity"><button>Random</button></Link>
                <select>
                    <option value="">Select Type</option>
                    <option value="education">Education</option>
                    <option value="recreational">Recreational</option>
                    <option value="social">Social</option>
                    <option value="diy">DIY</option>
                    <option value="charity">Charity</option>
                    <option value="cooking">Cooking</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="music">Music</option>
                    <option value="busywork">Busywork</option>
                </select>
                </div>
            </div>
        </section>
    );
}

export default Card;