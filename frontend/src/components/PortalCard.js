import React from "react";
import { addBookmark } from "../services/bookmarkService";

function PortalCard({portal}){

    const user = JSON.parse(localStorage.getItem("user"));

    const bookmark = async()=>{

        await addBookmark({

            userId: user._id,
            portalId: portal._id

        });

        alert("Bookmarked");

    };

    return(

        <div className="col-md-4">

            <div className="card m-2 shadow">

                <div className="card-body">

                    <h5>{portal.name}</h5>

                    <p>{portal.category}</p>

                    <a
                    href={portal.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary m-1">

                        Visit Website

                    </a>

                    {user && (

                        <button
                        onClick={bookmark}
                        className="btn btn-warning">

                            Bookmark

                        </button>

                    )}

                </div>

            </div>

        </div>

    );

}

export default PortalCard;