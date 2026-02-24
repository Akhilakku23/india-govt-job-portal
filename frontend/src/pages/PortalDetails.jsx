import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = "http://localhost:5000/api/portals";

function PortalDetails() {
  const { id } = useParams();
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => setPortal(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!portal) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">

          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">

            {/* Title */}
            <div className="text-center mb-4">
              <h2 className="fw-bold">{portal.name}</h2>
              <span className="badge bg-secondary px-3 py-2 rounded-pill mt-2">
                {portal.category}
              </span>
            </div>

            <hr />
              <p className="text-muted">{portal.description}</p>
            {/* Portal Description */}
            <p> {portal.name} is an official government recruitment portal. Candidates can apply for latest notifications, download hall tickets, check results and get official updates directly from this site. </p>
          

            {/* Job Role Section */}
            <div className="mt-4">
              <h5 className="fw-semibold">Typical Job Roles</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Clerk / Assistant</li>
                <li className="list-group-item">Officer / Inspector</li>
                <li className="list-group-item">Engineer / Technical Staff</li>
                <li className="list-group-item">Administrative Positions</li>
              </ul>
            </div>

            {/* Qualification Section */}
            <div className="mt-4">
              <h5 className="fw-semibold">Minimum Qualifications</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">10th / 12th Pass</li>
                <li className="list-group-item">Diploma Holders</li>
                <li className="list-group-item">Graduate Degree</li>
                <li className="list-group-item">Post Graduate Degree (for higher posts)</li>
              </ul>
            </div>

            {/* Selection Process */}
            <div className="mt-4">
              <h5 className="fw-semibold">Selection Process</h5>
              <p className="text-secondary">
                The selection process usually includes written examinations,
                skill tests, physical tests (if applicable), and interviews.
                The exact procedure depends on the official notification.
              </p>
            </div>

            {/* Important Note */}
            <div className="alert alert-warning mt-4">
              <strong>Disclaimer:</strong> We are not affiliated with any
              government organization. Job roles, qualifications, and
              selection processes may vary. Please visit the official website
              for accurate and updated information.
            </div>

            {/* Official Link */}
            <div className="text-center mt-4">
              <a
                href={portal.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Visit Official Website
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default PortalDetails;