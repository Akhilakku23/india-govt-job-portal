// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../services/api";

// export default function PortalDetails() {
//   const { id } = useParams();
//   const [portal, setPortal] = useState(null);

//   useEffect(() => {
//     API.get(`/portals/${id}`).then(res => setPortal(res.data));
//   }, [id]);

//   if (!portal) return <p>Loading...</p>;

//   return (
//     <div className="container mt-4">
//       <h2>{portal.name}</h2>
//       <p>{portal.description}</p>
//       <span className="badge bg-info">{portal.category}</span>
//       <br /><br />
//       <a
//         href={portal.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn btn-success"
//       >
//         Visit Official Website
//       </a>

    
      
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = "http://localhost:5000/api/portals";

function PortalDetails() {
  const { id } = useParams();
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    axios.get(`${API}/${id}`)
      .then(res => setPortal(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!portal) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5">

        <h2 className="fw-bold">{portal.name}</h2>
        <p className="text-muted">{portal.description}</p>

        <span className="badge bg-info mb-3">
          {portal.category}
        </span>

        <hr />

        {/* About Section */}
        <h5 className="fw-bold mt-3">About This Portal</h5>
        <p>
          {portal.name} is an official government recruitment portal.
          Candidates can apply for latest notifications, download hall tickets,
          check results and get official updates directly from this site.
        </p>

        {/* Features Section */}
        <h5 className="fw-bold mt-4">Key Features</h5>
        <ul>
          <li>Latest Government Job Notifications</li>
          <li>Online Application Submission</li>
          <li>Admit Card & Result Download</li>
          <li>Official Announcements</li>
        </ul>

        {/* Eligibility Section */}
        <h5 className="fw-bold mt-4">Who Can Apply?</h5>
        <p>
          Candidates who meet the eligibility criteria mentioned in the
          official notification can apply through this portal.
          Please read the notification carefully before applying.
        </p>

        {/* Official Link Button */}
        <div className="mt-4">
          <a
            href={portal.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            Visit Official Website
          </a>
        </div>

      </div>
    </div>
  );
}

export default PortalDetails;