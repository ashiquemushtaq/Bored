import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import './activity.css'

const Activityy = ()=> {
    const [activity,setActivity] = useState([])
    const {tp} = useParams();
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const res = await fetch(`https://www.boredapi.com/api/activity?type=${tp}`)
        setActivity(await res.json())
        console.log(tp)
    }

    return(
        <section>
            <div className="card">
                <h1>"{activity.activity}"</h1>
                <h3>Type:<span>{activity.type}</span></h3>
                <h4>Participants:<span>{activity.participants}</span></h4>
            </div>
        </section>
    );
}
export default Activityy;
