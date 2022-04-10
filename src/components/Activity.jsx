import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './activity.css'

const Activityy = ()=> {
    const [activity,setActivity] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const res = await fetch('https://www.boredapi.com/api/activity/')
        setActivity(await res.json())
    }

    return(
        <>
        <Link style={{textDecoration:'none'}} to='/'>
        <button className="btn back">Back</button></Link>
        <section>
            <div className="card">
                <h1>"{activity.activity}"</h1>
                <h3>Type:<span>{activity.type}</span></h3>
                <h4>Participants:<span>{activity.participants}</span></h4>
                {activity.link != "" ? <h3>Link:<a href={activity.link}>Helpful Link</a></h3>:null}
            </div>
        </section>
        </>
    );
}
export default Activityy;
