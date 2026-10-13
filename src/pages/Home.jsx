import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home() {
  const categories = [
    {
      icon: "📱",
      title: "Phones",
      text: "Smartphones and everyday mobile essentials",
    },
    {
      icon: "🎧",
      title: "Audio",
      text: "Headphones, earbuds and speakers",
    },
    {
      icon: "⌨️",
      title: "Computer",
      text: "Keyboards, mice and useful accessories",
    },
    {
      icon: "⚡",
      title: "Power",
      text: "Chargers, cables and power solutions",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: "₦18,500",
      oldPrice: "₦24,000",
      category: "Audio",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Fast Charge Power Bank",
      price: "₦22,000",
      oldPrice: "₦28,500",
      category: "Power",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1609592424632-6b7b5f1f7a3b?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Premium Wireless Headphones",
      price: "₦35,000",
      oldPrice: "₦42,000",
      category: "Audio",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "₦27,500",
      oldPrice: "₦32,000",
      category: "Computer",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="home-page">
     
      {/* =====================================
          HERO
      ====================================== */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            New gadgets. Better everyday life.
          </div>

          <h1>
            Upgrade Your
            <span> Everyday Tech.</span>
          </h1>

          <p>
            Discover quality gadgets and accessories designed to
            make your everyday life easier, smarter and more connected.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="primary-button">
              Shop Collection
              <span>→</span>
            </Link>

            <Link to="/about" className="secondary-button">
              Explore VIK GADGETS
            </Link>
          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <strong>100+</strong>
              <span>Products</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Fast</strong>
              <span>Delivery</span>
            </div>

          </div>
        </div>

        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-card">

            <div className="hero-card-top">
              <span>VIK GADGETS</span>

              <span className="hero-card-status">
                ● Available
              </span>
            </div>

            <div className="hero-product">

              <div className="hero-product-circle">
                🎧
              </div>

              <div className="hero-product-info">
                <span>FEATURED</span>

                <h3>
                  Wireless Audio
                </h3>

                <p>
                  Premium sound anywhere.
                </p>
              </div>

            </div>

            <div className="hero-card-bottom">

              <div>
                <small>Starting from</small>
                <strong>₦18,500</strong>
              </div>

              <Link
                to="/shop"
                className="hero-shop-button"
              >
                →
              </Link>

            </div>

          </div>

          <div className="floating-card floating-card-one">

            <span>⚡</span>

            <div>
              <strong>Fast Charging</strong>
              <small>Power accessories</small>
            </div>

          </div>

          <div className="floating-card floating-card-two">

            <span>✓</span>

            <div>
              <strong>Quality Products</strong>
              <small>Built for everyday use</small>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          CATEGORIES
      ====================================== */}

      <section className="home-section categories-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              SHOP BY CATEGORY
            </span>

            <h2>
              Find the right gadget
              <span> for you.</span>
            </h2>
          </div>

          <Link to="/shop" className="section-link">
            View all →
          </Link>

        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <Link
              to="/shop"
              className="category-card"
              key={category.title}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-content">

                <h3>{category.title}</h3>

                <p>{category.text}</p>

                <span className="category-arrow">
                  Explore →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* =====================================
          PRODUCTS
      ====================================== */}

      <section className="home-section products-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              FEATURED PRODUCTS
            </span>

            <h2>
              Popular picks from
              <span> VIK GADGETS.</span>
            </h2>

          </div>

          <Link to="/shop" className="section-link">
            Shop all →
          </Link>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <article
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-tag">
                  SALE
                </span>

                <button
                  className="product-heart"
                  aria-label={`Add ${product.name} to favorites`}
                >
                  ♡
                </button>

              </div>


              <div className="product-details">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="product-rating">
                  ★★★★★
                  <span>
                    ({product.rating})
                  </span>
                </div>

                <div className="product-price">

                  <strong>
                    {product.price}
                  </strong>

                  <del>
                    {product.oldPrice}
                  </del>

                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="product-button"
                >
                  View Product
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          PROMO
      ====================================== */}

      <section className="promo-section">

        <div className="promo-content">

          <span className="section-label">
            VIK GADGETS
          </span>

          <h2>
            Technology that
            <span> fits your lifestyle.</span>
          </h2>

          <p>
            From everyday essentials to smart accessories,
            discover products that combine useful features,
            modern design and great value.
          </p>

          <Link
            to="/shop"
            className="primary-button"
          >
            Start Shopping
            <span>→</span>
          </Link>

        </div>

        <div className="promo-decoration">
          <div className="promo-circle">
            VIK
          </div>
        </div>

      </section>


      {/* =====================================
          WHY VIK
      ====================================== */}

      <section className="home-section why-section">

        <div className="section-heading centered">

          <span className="section-label">
            WHY VIK GADGETS
          </span>

          <h2>
            Shopping made
            <span> simple.</span>
          </h2>

          <p>
            We focus on useful technology, simple shopping
            and a better customer experience.
          </p>

        </div>


        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>

            <h3>Fast Delivery</h3>

            <p>
              Get your gadgets delivered quickly and securely.
            </p>
          </div>


          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>

            <h3>Secure Shopping</h3>

            <p>
              Your shopping experience is designed
              with security in mind.
            </p>
          </div>


          <div className="benefit-card">
            <div className="benefit-icon">💬</div>

            <h3>Customer Support</h3>

            <p>
              We're here to help whenever you need assistance.
            </p>
          </div>


          <div className="benefit-card">
            <div className="benefit-icon">⭐</div>

            <h3>Quality Selection</h3>

            <p>
              Discover useful gadgets selected for everyday life.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================
          NEWSLETTER
      ====================================== */}

      <section className="newsletter-section">

        <div className="newsletter-content">

          <span className="section-label">
            STAY CONNECTED
          </span>

          <h2>
            Get the latest
            <span> gadget drops.</span>
          </h2>

          <p>
            Join our community and be the first to hear about
            new products, special offers and updates.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              Subscribe →
            </button>

          </form>

        </div>

      </section>
 <Footer />
    </div>
  );
}

export default Home;