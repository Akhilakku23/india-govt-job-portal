import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/api/portals";

function Category() {
  const { type } = useParams();
  const [portals, setPortals] = useState([]);

  useEffect(() => {
    axios.get(`${API}?category=${type}`)
      .then(res => setPortals(res.data))
      .catch(err => console.log(err));
  }, [type]);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-capitalize">
        {type} Jobs
      </h2>

      {portals.map((portal) => (
        <div key={portal._id} className="card mb-3 p-3 shadow-sm">
          <h5>{portal.name}</h5>
          <p>{portal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;