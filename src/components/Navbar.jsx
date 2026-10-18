import { Link, NavLink } from "react-router-dom";
import {
  FaBolt,
  FaShoppingBag,
  FaHeart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import { useState } from "react";
import { useStore } from "./StoreContext";
import { useTheme } from "../components/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart, favorites } = useStore();
  const { theme, toggleTheme } = useTheme();

  const darkMode = theme === "dark";

  const cartCount =
    cart?.reduce(
      (total, item) => total + (Number(item.quantity) || 1),
      0
    ) || 0;

  const favoriteCount = favorites?.length || 0;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `navbar-link ${isActive ? "active" : ""}`;

  return (
    <header className="site-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="VIK GADGETS home"
        >
          <span className="navbar-logo-icon">
            <FaBolt />
          </span>

          <span className="navbar-logo-text">
            VIK<span>GADGETS</span>
            <small>SMART TECH. SMART LIVING.</small>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav
          className={`navbar-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end className={navClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navClass} onClick={closeMenu}>
            Shop
          </NavLink>

          <NavLink to="/about" className={navClass} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass} onClick={closeMenu}>
            Contact
          </NavLink>

          {/* MOBILE SHOP LINK */}
          <Link
            to="/shop"
            className="navbar-mobile-cta"
            onClick={closeMenu}
          >
            Explore Collection
            <FaArrowRight />
          </Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="navbar-actions">

          {/* WISHLIST */}
          <Link
            to="/favourite"
            className="navbar-action"
            aria-label={`Wishlist, ${favoriteCount} items`}
            title="Wishlist"
            onClick={closeMenu}
          >
            <FaHeart />

            {favoriteCount > 0 && (
              <span className="navbar-badge">
                {favoriteCount > 99 ? "99+" : favoriteCount}
              </span>
            )}
          </Link>
<Link to="/cart" className="navbar-cart">
  <FaShoppingBag className="navbar-cart-icon" />

  {cartCount > 0 && (
    <span className="cart-badge">
      {cartCount > 99 ? "99+" : cartCount}
    </span>
  )}

  <span className="cart-tooltip">My Cart</span>
</Link>
          {/* THEME TOGGLE */}
          <button
            type="button"
            className="navbar-action theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;