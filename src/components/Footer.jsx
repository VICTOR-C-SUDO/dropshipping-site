import { Link } from "react-router-dom";

import {
  FaBolt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">

          <div>
            <span className="footer-eyebrow">
              STAY CONNECTED
            </span>

            <h2>Get the latest from VIK GADGETS.</h2>

            <p>
              New gadgets, exclusive offers and useful tech
              delivered straight to your inbox.
            </p>
          </div>

          <form
            className="footer-subscribe"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">
              Subscribe
              <FaArrowRight />
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">

              <Link to="/" className="footer-logo">
                <span className="footer-logo-icon">
                  <FaBolt />
                </span>

                <span>
                  VIK<span>GADGETS</span>
                </span>
              </Link>

              <p>
                Smart gadgets, useful tech and everyday
                accessories designed to make life easier.
              </p>

              {/* Social Media */}
              <div className="footer-socials">

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/@shopvikgadgets"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@shopvikgadget"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>

              

              </div>
            </div>

            {/* Shop */}
            <div className="footer-column">
              <h3>Shop</h3>

              <Link to="/shop">All Products</Link>
              <Link to="/shop">New Arrivals</Link>
              <Link to="/shop">Best Sellers</Link>
              <Link to="/shop">Gadgets</Link>
              <Link to="/shop">Accessories</Link>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h3>Company</h3>

              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/order-tracking">Track Order</Link>
              <Link to="/favorites">Wishlist</Link>
              <Link to="/checkout">Checkout</Link>
            </div>

            {/* Support */}
            <div className="footer-column">
              <h3>Support</h3>

              <Link to="/contact">Help Center</Link>
              <Link to="/contact">Shipping Information</Link>
              <Link to="/contact">Returns &amp; Refunds</Link>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

              <Link to="/terms">
                Terms &amp; Conditions
              </Link>

              <Link to="/cookies-policy">
                Cookies Policy
              </Link>
            </div>

          </div>

          {/* Trust Features */}
          <div className="footer-features">

            <div className="footer-feature">
              <div className="footer-feature-icon">
                <FaShieldAlt />
              </div>

              <div>
                <strong>Secure Shopping</strong>
                <span>
                  Your information stays protected.
                </span>
              </div>
            </div>

            <div className="footer-feature">
              <div className="footer-feature-icon">
                <FaTruck />
              </div>

              <div>
                <strong>Reliable Delivery</strong>
                <span>
                  We make getting your order simple.
                </span>
              </div>
            </div>

            <div className="footer-feature">
              <div className="footer-feature-icon">
                <FaHeadset />
              </div>

              <div>
                <strong>Customer Support</strong>
                <span>
                  We're here when you need us.
                </span>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()}{" "}
              <strong>VIK GADGETS</strong>. All rights reserved.
            </p>

            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/cookies-policy">Cookies</Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}