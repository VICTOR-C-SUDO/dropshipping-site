import { Link } from "react-router-dom";
import {
  FaBolt,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import Footer from "../components/Footer";

function About() {
  const values = [
    {
      icon: <FaBolt />,
      number: "01",
      title: "Useful Technology",
      description:
        "Discover practical gadgets designed to make everyday tasks easier and more enjoyable.",
    },
    {
      icon: <FaShieldAlt />,
      number: "02",
      title: "Reliable Shopping",
      description:
        "Enjoy a clear and straightforward shopping experience from browsing to checkout.",
    },
    {
      icon: <FaTruck />,
      number: "03",
      title: "Convenient Delivery",
      description:
        "Our goal is to make getting your favourite gadgets as simple as possible.",
    },
    {
      icon: <FaHeadset />,
      number: "04",
      title: "Customer Support",
      description:
        "We're here to help with product questions and guidance throughout your shopping journey.",
    },
  ];

  return (
    <div className="about-page-wrapper">
      <main className="about-page">

        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-hero-content">

            <div className="about-label">
              <span className="about-label-dot"></span>
              GET TO KNOW US
            </div>

            <h1>
              Smart technology.
              <span> Better everyday life.</span>
            </h1>

            <p className="about-intro">
              Welcome to VIK GADGETS — your destination for
              useful gadgets, modern accessories, and everyday
              technology designed around your lifestyle.
            </p>

            <div className="about-buttons">
              <Link to="/shop" className="about-primary-btn">
                Explore Products
                <FaArrowRight />
              </Link>

              <Link to="/contact" className="about-secondary-btn">
                Talk to Us
              </Link>
            </div>

            <div className="about-trust">
              <div className="about-trust-icon">
                <FaCheckCircle />
              </div>

              <div>
                <strong>Technology made simple</strong>
                <span>Useful products. A better experience.</span>
              </div>
            </div>

          </div>

          {/* FEATURE CARD */}
          <div className="about-visual">
            <div className="about-visual-orbit orbit-one"></div>
            <div className="about-visual-orbit orbit-two"></div>

            <div className="about-tech-card">

              <div className="about-card-top">
                <Link to="/" className="about-card-brand">
                  <span className="about-card-brand-icon">
                    <FaBolt />
                  </span>
                  VIK GADGETS
                </Link>

                <span className="about-status">
                  <i></i>
                  TECH FOR EVERYDAY
                </span>
              </div>

              <div className="about-bolt">
                <FaBolt />
              </div>

              <span className="about-card-caption">
                DISCOVER SOMETHING BETTER
              </span>

              <h2>
                Technology
                <span> without the hassle.</span>
              </h2>

              <p>
                Gadgets and accessories for work, entertainment,
                productivity, and everyday life.
              </p>

              <div className="about-card-line"></div>

              <div className="about-card-stats">
                <div>
                  <FaStar />
                  <strong>Quality</strong>
                  <span>Product selection</span>
                </div>

                <div>
                  <FaShieldAlt />
                  <strong>Simple</strong>
                  <span>Shopping experience</span>
                </div>

                <div>
                  <FaHeadset />
                  <strong>Helpful</strong>
                  <span>Customer support</span>
                </div>
              </div>

            </div>

            <div className="about-floating-note">
              <span className="about-floating-icon">
                <FaBolt />
              </span>

              <div>
                <strong>Upgrade your everyday</strong>
                <span>Find your next favourite gadget.</span>
              </div>
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="about-story">

          <div className="about-story-heading">
            <span className="about-section-label">
              <span></span>
              OUR STORY
            </span>

            <h2>
              Great technology should feel
              <span> simple.</span>
            </h2>
          </div>

          <div className="about-story-content">
            <p>
              Finding the right gadget should be exciting,
              not complicated. With so many products available,
              choosing something useful can sometimes feel
              overwhelming.
            </p>

            <p>
              That's the idea behind VIK GADGETS: bringing
              together practical technology, modern accessories,
              and everyday essentials in one convenient place.
            </p>

            <p>
              Whether you're upgrading your phone accessories,
              improving your workspace, or looking for something
              to make life easier, we're building a shopping
              experience focused on simplicity and value.
            </p>

            <Link to="/shop" className="about-text-link">
              Discover our collection
              <FaArrowRight />
            </Link>
          </div>

        </section>

        {/* VALUES SECTION */}
        <section className="about-values">

          <div className="about-section-heading">
            <span className="about-section-label">
              <span></span>
              WHAT MATTERS TO US
            </span>

            <h2>
              Shopping with
              <span> purpose.</span>
            </h2>

            <p>
              We want shopping for gadgets to be convenient,
              enjoyable, and focused on what you actually need.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >
                <div className="about-value-top">
                  <div className="about-value-icon">
                    {value.icon}
                  </div>

                  <span>{value.number}</span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <div className="about-value-bottom">
                  <span>VIK GADGETS</span>
                  <FaArrowRight />
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* CALL TO ACTION */}
        <section className="about-cta">

          <div className="about-cta-decoration">
            <FaBolt />
          </div>

          <div className="about-cta-content">
            <span className="about-section-label">
              YOUR NEXT UPGRADE STARTS HERE
            </span>

            <h2>
              Find the tech that
              <span> fits your life.</span>
            </h2>

            <p>
              Explore gadgets and accessories made for your
              everyday needs.
            </p>
          </div>

          <Link to="/shop" className="about-cta-button">
            Shop VIK GADGETS
            <FaArrowRight />
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;