import React, {useEffect, useState} from "react";
import { getPortals } from "../services/portalService";
import PortalCard from "../components/PortalCard";

function Portals(){

    const [portals,setPortals] = useState([]);

    const [search,setSearch] = useState("");

    useEffect(()=>{

        getPortals()
        .then(res=>setPortals(res.data));

    },[]);

    const filtered = portals.filter(p=>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return(

        <div className="container mt-3">

            <input
            className="form-control"
            placeholder="Search portal"
            onChange={(e)=>setSearch(e.target.value)}
            />

            <div className="row">

                {filtered.map(p=>(

                    <PortalCard portal={p}/>

                ))}

            </div>

        </div>

    );

}

export default Portals;