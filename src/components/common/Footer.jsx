import React from 'react';
import { X } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <X size={20} />
              <span className="logo-text">C.H.I.R.A.G.</span>
              <span className="logo-subtext">CONNECT</span>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <a href="/about">About Us</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/impact">CC Impact</a>
            <a href="/careers">Careers</a>
          </div>

          {/* Farmer Links */}
          <div className="footer-column">
            <h3 className="footer-title">For Farmers</h3>
            <a href="/testimonials">CC Testimonials</a>
            <a href="/download">Download Farmer App</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* Vendor Links */}
          <div className="footer-column">
            <h3 className="footer-title">For Vendors</h3>
            <a href="/vendor-register">Register as CC Vendor</a>
          </div>

          {/* Social Links */}
          <div className="footer-column">
            <h3 className="footer-title">Social Links</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <a href="https://play.google.com/store" className="app-button" target="_blank" rel="noopener noreferrer">
              GET IT ON Google Play
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright">
            Copyright © {currentYear} C.H.I.R.A.G Technologies. All Rights Reserved
          </div>
          <div className="credits">
            Web Design by <a href="https://colladome.com">colladome.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;