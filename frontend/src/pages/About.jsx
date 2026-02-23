import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">About India Govt Job Portal</h2>
      <p>
        India Govt Job Portal is a centralized platform designed to help
        candidates access official government recruitment portals easily.
        Users can browse, search, and bookmark important job portals.
      </p>

      <h5 className="mt-4">Our Mission</h5>
      <p>
        To provide simple, fast, and reliable access to all major government
        job recruitment portals across India.
      </p>

      <h5 className="mt-4">Technology Used</h5>
      <ul>
        <li>MERN Stack (MongoDB, Express, React, Node)</li>
        <li>JWT Authentication</li>
        <li>Bootstrap UI</li>
      </ul>
    </div>
  );
}

export default About;