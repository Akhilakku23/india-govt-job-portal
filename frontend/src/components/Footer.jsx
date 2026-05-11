import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="startup-footer pt-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-brand mb-3">NextHire</h5>
            <p className="footer-text">
              A smart career discovery platform connecting job seekers
              with trusted government and public sector opportunities.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/portals" className="footer-link">Browse Jobs</Link></li>
              <li><Link to="/bookmarks" className="footer-link">Saved Jobs</Link></li>
              <li><Link to="/notifications" className="footer-link">Latest Notifications</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms</Link></li>
            </ul>
          </div>

          {/* Column 4 - Correct Categories */}
          <div className="col-md-3 mb-4">
  <h6 className="footer-heading">Categories</h6>

  <ul className="list-unstyled">

    <li>
      <Link to="/portals?category=PSC" className="footer-link">
        PSC
      </Link>
    </li>

    <li>
      <Link to="/portals?category=UPSC" className="footer-link">
        UPSC
      </Link>
    </li>

    <li>
      <Link to="/portals?category=SSC" className="footer-link">
        SSC
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Railway" className="footer-link">
        Railway
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Banking" className="footer-link">
        Banking
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Defence" className="footer-link">
        Defence
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Police" className="footer-link">
        Police
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Medical" className="footer-link">
        Medical
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Education" className="footer-link">
        Education
      </Link>
    </li>

    <li>
      <Link to="/portals?category=PSU" className="footer-link">
        PSU
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Metro" className="footer-link">
        Metro
      </Link>
    </li>

    <li>
      <Link to="/portals?category=Technology" className="footer-link">
        Technology
      </Link>
    </li>

  </ul>
</div>

        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
          <p className="footer-copy mb-2 mb-md-0">
            © 2026 NextHire. All rights reserved.
          </p>

          <div>
            <a href="#" className="social-icon me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;