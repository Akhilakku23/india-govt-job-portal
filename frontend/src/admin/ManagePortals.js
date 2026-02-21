import React, { useEffect, useState } from "react";

import {
    getPortals,
    createPortal,
    deletePortal
}
from "../../services/portalService";

function ManagePortals(){

    const [portals,setPortals]=useState([]);

    const [form,setForm]=useState({

        name:"",
        link:"",
        category:"",
        description:""

    });

    useEffect(()=>{

        loadPortals();

    },[]);

    const loadPortals=()=>{

        getPortals()
        .then(res=>setPortals(res.data));

    };

    const submit=async(e)=>{

        e.preventDefault();

        await createPortal(form);

        alert("Portal added");

        loadPortals();

    };

    const remove=async(id)=>{

        await deletePortal(id);

        alert("Portal deleted");

        loadPortals();

    };

    return(

        <div className="container mt-4">

            <h3>Manage Portals</h3>

            <form onSubmit={submit}>

                <input
                className="form-control m-2"
                placeholder="Name"
                onChange={e=>
                setForm({...form,
                name:e.target.value})}
                />

                <input
                className="form-control m-2"
                placeholder="Link"
                onChange={e=>
                setForm({...form,
                link:e.target.value})}
                />

                <input
                className="form-control m-2"
                placeholder="Category"
                onChange={e=>
                setForm({...form,
                category:e.target.value})}
                />

                <textarea
                className="form-control m-2"
                placeholder="Description"
                onChange={e=>
                setForm({...form,
                description:e.target.value})}
                />

                <button
                className="btn btn-success">

                    Add Portal

                </button>

            </form>

            <hr/>

            {portals.map(p=>(

                <div
                className="card m-2 p-2"
                key={p._id}>

                    <h5>{p.name}</h5>

                    <button
                    className="btn btn-danger"
                    onClick={()=>remove(p._id)}>

                        Delete

                    </button>

                </div>

            ))}

        </div>

    );

}

export default ManagePortals;