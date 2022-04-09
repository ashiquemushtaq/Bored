import { useState,useEffect } from "react"
import './activity.css'

const Activityy = ()=> {
    const [activity,setActivity] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const res = await fetch('http://www.boredapi.com/api/activity/')
        setActivity(await res.json())
    }

    return(
        <section>
            <div className="card">
                <h1>{activity.activity}</h1>
                <h3>Type:<span>{activity.type}</span></h3>
                <h4>Participants:<span>{activity.participants}</span></h4>
            </div>
        </section>
    );
}
export default Activityy;