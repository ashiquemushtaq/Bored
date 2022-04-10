import { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Card = ()=>{
    
    const [isActive,setActive] = useState(false);

    const toggleMenu = ()=>{
        setActive(!isActive);
        console.log(isActive);
    }

    return(
        <section>
            <div className="card">
                <span className="top">Ready to kill your<br />boredom 🍻</span>
                <span className="bottom">Get a task</span>
                <div className="controls">
                <Link to="/activity"><button className="btn">Random</button></Link>
                <span>OR</span>
                <div className="drop-down">
                    <button className="btn menu-pa" onClick={toggleMenu}>Select Type &#8595;</button>
                    <ul className={isActive ? 'active':'type-menu'}>
                        <Link to={'/activity/education'} style={{textDecoration:"none"}}><li>Eduction</li></Link>
                        <Link to={'/activity/recreational'} style={{textDecoration:"none"}}><li>Recreational</li></Link>
                        <Link to={'/activity/Social'} style={{textDecoration:"none"}}><li>Social</li></Link>
                        <Link to={'/activity/diy'} style={{textDecoration:"none"}}><li>DIY</li></Link>
                        <Link to={'/activity/charity'} style={{textDecoration:"none"}}><li>Charity</li></Link>
                        <Link to={'/activity/cooking'} style={{textDecoration:"none"}}><li>Cooking</li></Link>
                        <Link to={'/activity/relaxation'} style={{textDecoration:"none"}}><li>Relaxation</li></Link>
                        <Link to={'/activity/music'} style={{textDecoration:"none"}}><li>Music</li></Link>
                        <Link to={'/activity/busywork'} style={{textDecoration:"none"}}><li>Busywork</li></Link>               
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
