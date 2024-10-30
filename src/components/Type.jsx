import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './activity.css'

const Activityy = ()=> {
    const [activity,setActivity] = useState([])
    const {tp} = useParams();
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const res = await fetch(`https://bored-api.appbrewery.com/filter?type=${tp}`)
        setActivity(await res.json())
        console.log(tp)
    }

    return(
        <>
        <Link style={{textDecoration:'none'}} to='/'>
        <button className="btn back">Back</button></Link>
        <section className="activity">
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
