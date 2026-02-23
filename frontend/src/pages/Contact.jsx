import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>

      <form className="card p-4 shadow-sm">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;