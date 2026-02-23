import React from "react";

function FAQ() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">
              How do I apply for jobs?
            </button>
          </h2>
          <div id="q1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Click on the portal and visit the official website to apply.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
              Is this an official government website?
            </button>
          </h2>
          <div id="q2" className="accordion-collapse collapse">
            <div className="accordion-body">
              No. This platform only provides links to official government portals.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQ;