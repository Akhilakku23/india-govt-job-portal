import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Government Portals</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/category/central" className="footer-link">Central Govt Jobs</Link></li>
              <li><Link to="/category/state" className="footer-link">State Govt Jobs</Link></li>
              <li><Link to="/category/railway" className="footer-link">Railway Jobs</Link></li>
              <li><Link to="/category/banking" className="footer-link">Banking Jobs</Link></li>
              <li><Link to="/category/defence" className="footer-link">Defence Jobs</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/portals" className="footer-link">All Portals</Link></li>
              <li><Link to="/bookmarks" className="footer-link">My Bookmarks</Link></li>
              <li><Link to="/notifications" className="footer-link">Latest Notifications</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Stay Connected</h6>

            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
            </div>

            <h6 className="fw-bold mt-4">Newsletter</h6>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2"
            />
            <button className="btn btn-primary btn-sm w-100">
              Subscribe
            </button>
          </div>

        </div>

        <hr className="border-light mt-4" />

        <div className="text-center small">
          © 2026 India Govt Job Portal | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;