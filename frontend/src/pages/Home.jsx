import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    "https://images.unsplash.com/photo-1557683316-973673baf926",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔵 HERO SECTION */}
      <div
        className="hero-slider d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${images[currentImage]})`
        }}
      >
        <div className="overlay"></div>

        <div className="container text-center position-relative">
          <h1 className="display-4 fw-bold">
            Discover Your Next Career Opportunity
          </h1>

          <p className="lead mt-3">
            Explore curated public sector and government job portals in one
            powerful platform.
          </p>

          <div className="mt-4">
            <Link to="/portals" className="btn btn-gradient btn-lg me-3">
              Browse Jobs
            </Link>

            <Link to="/register" className="btn btn-outline-light btn-lg">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* 🔵 FEATURES SECTION */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Our Platform?</h2>
          <p className="text-muted">
            A smarter way to track and discover career opportunities.
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 h-100">
              <h5>🔍 Smart Search</h5>
              <p>
                Quickly filter and explore job portals by category and sector.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 h-100">
              <h5>⭐ Save Jobs</h5>
              <p>
                Bookmark and manage your favorite opportunities in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 h-100">
              <h5>🔔 Real-Time Updates</h5>
              <p>
                Stay informed with the latest announcements and openings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 CTA SECTION */}
      <div className="cta-section text-center py-5 text-white">
        <h3 className="fw-bold">
          Ready to Take the Next Step in Your Career?
        </h3>
        <Link to="/register" className="btn btn-light mt-3 px-4">
          Create Free Account
        </Link>
      </div>
    </>
  );
}