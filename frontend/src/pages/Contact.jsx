import { useState } from "react";
import API from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/contacts", form);
    setForm({ name: "", email: "", message: "" });
    setSuccess(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">

          <div className="text-center mb-4">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              Have questions? We’d love to hear from you.
            </p>
          </div>

          <div className="card border-0 shadow-lg rounded-4 p-4">
            {success && (
              <div className="alert alert-success">
                Message sent successfully ✅
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className="form-control rounded-3"
                  placeholder="Your Message"
                  id="message"
                  style={{ height: "120px" }}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button className="btn btn-primary w-100 py-2 rounded-3">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;