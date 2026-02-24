export default function FAQ() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
      </div>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              Is CareerBridge a government website?
            </button>
          </h2>
          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              No, we are a private platform that aggregates publicly available job information.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              Do you charge any fees?
            </button>
          </h2>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              No, browsing job portals is completely free.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}