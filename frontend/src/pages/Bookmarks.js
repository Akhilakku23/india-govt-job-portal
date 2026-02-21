import React, { useEffect, useState } from "react";
import { getBookmarks, deleteBookmark }
from "../services/bookmarkService";

function Bookmarks(){

    const [bookmarks, setBookmarks] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{

        loadBookmarks();

    },[]);

    const loadBookmarks = ()=>{

        getBookmarks(user._id)
        .then(res=>setBookmarks(res.data));

    };

    const removeBookmark = async(id)=>{

        await deleteBookmark(id);

        alert("Bookmark removed");

        loadBookmarks();

    };

    return(

        <div className="container mt-4">

            <h3>Your Bookmarked Portals</h3>

            {bookmarks.length === 0 &&
            <p>No bookmarks yet</p>}

            <div className="row">

                {bookmarks.map(b=>(

                    <div className="col-md-4"
                    key={b._id}>

                        <div className="card m-2 shadow">

                            <div className="card-body">

                                <h5>
                                    {b.portalId.name}
                                </h5>

                                <p>
                                    {b.portalId.category}
                                </p>

                                <a
                                href={b.portalId.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary m-1">

                                    Visit

                                </a>

                                <button
                                onClick={()=>removeBookmark(b._id)}
                                className="btn btn-danger">

                                    Remove

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Bookmarks;