import React, {useEffect, useState} from "react";
import { getNotifications } from "../services/notificationService";

function Home(){

    const [notifications,setNotifications] = useState([]);

    useEffect(()=>{

        getNotifications()
        .then(res=>setNotifications(res.data));

    },[]);

    return(

        <div className="container mt-4">

            <h2>Latest Govt Job Notifications</h2>

            {notifications.map(n=>(

                <div className="card m-2 p-2">

                    <h5>{n.title}</h5>

                    <p>{n.description}</p>

                    <a href={n.link}
                    target="_blank"
                    rel="noreferrer">

                        Apply

                    </a>

                </div>

            ))}

        </div>

    );

}

export default Home;