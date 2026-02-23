import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">India Govt Job Portal</h6>
            <p className="small text-secondary">
              A centralized platform to explore official Government
              job recruitment portals across India.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/portals" className="footer-link">All Portals</Link></li>
              <li><Link to="/bookmarks" className="footer-link">My Bookmarks</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Information</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li><Link to="/category/central" className="footer-link">Central Govt</Link></li>
              <li><Link to="/category/state" className="footer-link">State Govt</Link></li>
              <li><Link to="/category/railway" className="footer-link">Railway</Link></li>
              <li><Link to="/category/banking" className="footer-link">Banking</Link></li>
              <li><Link to="/category/defence" className="footer-link">Defence</Link></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">

          <p className="small mb-2 mb-md-0 text-secondary">
            © 2026 India Govt Job Portal. All Rights Reserved.
          </p>

          <div>
            <a href="#" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;