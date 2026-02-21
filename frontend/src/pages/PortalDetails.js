import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortal } from "../services/portalService";
import { addBookmark } from "../services/bookmarkService";

function PortalDetails(){

    const { id } = useParams();

    const [portal, setPortal] = useState(null);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{

        getPortal(id)
        .then(res=>setPortal(res.data));

    },[id]);

    const bookmark = async()=>{

        await addBookmark({
            userId: user._id,
            portalId: portal._id
        });

        alert("Portal Bookmarked");

    };

    if(!portal)
        return <div className="container mt-3">Loading...</div>;

    return(

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2>{portal.name}</h2>

                <h5 className="text-muted">
                    Category: {portal.category}
                </h5>

                <p className="mt-3">
                    {portal.description}
                </p>

                <a
                href={portal.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary m-2">

                    Visit Official Website

                </a>

                {user && (

                    <button
                    className="btn btn-warning"
                    onClick={bookmark}>

                        Bookmark Portal

                    </button>

                )}

            </div>

        </div>

    );

}

export default PortalDetails;