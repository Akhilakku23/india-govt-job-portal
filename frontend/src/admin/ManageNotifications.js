import React, { useEffect, useState } from "react";

import {
    getNotifications,
    createNotification,
    deleteNotification
}
from "../../services/notificationService";

function ManageNotifications(){

    const [notifications,setNotifications]=useState([]);

    const [form,setForm]=useState({

        title:"",
        description:"",
        link:""

    });

    useEffect(()=>{

        loadNotifications();

    },[]);

    const loadNotifications=()=>{

        getNotifications()
        .then(res=>setNotifications(res.data));

    };

    const submit=async(e)=>{

        e.preventDefault();

        await createNotification(form);

        alert("Notification added");

        loadNotifications();

    };

    const remove=async(id)=>{

        await deleteNotification(id);

        alert("Deleted");

        loadNotifications();

    };

    return(

        <div className="container mt-4">

            <h3>Manage Notifications</h3>

            <form onSubmit={submit}>

                <input
                className="form-control m-2"
                placeholder="Title"
                onChange={e=>
                setForm({...form,
                title:e.target.value})}
                />

                <textarea
                className="form-control m-2"
                placeholder="Description"
                onChange={e=>
                setForm({...form,
                description:e.target.value})}
                />

                <input
                className="form-control m-2"
                placeholder="Link"
                onChange={e=>
                setForm({...form,
                link:e.target.value})}
                />

                <button
                className="btn btn-success">

                    Add Notification

                </button>

            </form>

            <hr/>

            {notifications.map(n=>(

                <div
                className="card m-2 p-2"
                key={n._id}>

                    <h5>{n.title}</h5>

                    <button
                    className="btn btn-danger"
                    onClick={()=>remove(n._id)}>

                        Delete

                    </button>

                </div>

            ))}

        </div>

    );

}

export default ManageNotifications;