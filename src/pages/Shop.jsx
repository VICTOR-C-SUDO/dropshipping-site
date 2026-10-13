import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaChevronDown,
  FaSlidersH,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    category: "Audio",
    price: 18500,
    oldPrice: 24000,
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
    badge: "SALE",
  },
  {
    id: 2,
    name: "Fast Charge Power Bank",
    category: "Power",
    price: 22000,
    oldPrice: 28500,
    rating: 4.8,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1609592424632-6b7b5f1f7a3b?auto=format&fit=crop&w=900&q=85",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 35000,
    oldPrice: 42000,
    rating: 4.9,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    badge: "SALE",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Computer",
    price: 27500,
    oldPrice: 32000,
    rating: 4.7,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Smartphone Fast Charger",
    category: "Power",
    price: 12500,
    oldPrice: 16000,
    rating: 4.8,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    badge: "SALE",
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    category: "Computer",
    price: 19500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 24000,
    oldPrice: 30000,
    rating: 4.7,
    reviews: 81,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    badge: "POPULAR",
  },
  {
    id: 8,
    name: "USB-C Premium Cable",
    category: "Power",
    price: 7500,
    oldPrice: 9500,
    rating: 4.9,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    badge: "BEST SELLER",
  },
];

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const categories = ["All", "Phones", "Audio", "Computer", "Power"];

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, search, sort]);

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <main className="shop-page">

      {/* =====================================================
          SHOP HERO
      ===================================================== */}

      <section className="shop-hero">

        <div className="shop-hero-content">

          <span className="shop-eyebrow">
            VIK GADGETS STORE
          </span>

          <h1>
            Find your next
            <span> favorite gadget.</span>
          </h1>

          <p>
            Explore useful gadgets, accessories and everyday tech
            selected to make life easier.
          </p>

          <div className="shop-hero-stats">

            <div>
              <strong>100+</strong>
              <span>Products</span>
            </div>

            <div className="shop-stat-line"></div>

            <div>
              <strong>4.9★</strong>
              <span>Customer Rating</span>
            </div>

            <div className="shop-stat-line"></div>

            <div>
              <strong>Fast</strong>
              <span>Delivery</span>
            </div>

          </div>

        </div>

        <div className="shop-hero-decoration">
          <div className="shop-decoration-circle">
            <span>VIK</span>
            <small>GADGETS</small>
          </div>
        </div>

      </section>


      {/* =====================================================
          SHOP CONTROLS
      ===================================================== */}

      <section className="shop-container">

        <div className="shop-toolbar">

          <div className="shop-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search gadgets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

          <div className="shop-toolbar-actions">

            <button
              className={`filter-mobile-button ${
                showFilters ? "active" : ""
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaSlidersH />
              Filters
            </button>

            <div className="sort-box">

              <span>Sort by</span>

              <div className="sort-select-wrapper">

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">
                    Price: Low to High
                  </option>
                  <option value="price-high">
                    Price: High to Low
                  </option>
                  <option value="rating">
                    Highest Rated
                  </option>
                </select>

                <FaChevronDown />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div
          className={`shop-filters ${
            showFilters ? "show-mobile-filters" : ""
          }`}
        >

          <div className="category-filter">

            <span className="filter-label">
              Category
            </span>

            <div className="category-buttons">

              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item ? "active" : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            RESULTS HEADER
        ===================================================== */}

        <div className="shop-results-header">

          <div>
            <span className="shop-results-label">
              SHOP COLLECTION
            </span>

            <h2>
              {category === "All"
                ? "All gadgets"
                : category}
            </h2>
          </div>

          <p>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}{" "}
            available
          </p>

        </div>


        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        {filteredProducts.length > 0 ? (

          <div className="shop-product-grid">

            {filteredProducts.map((product) => (

              <article
                className="shop-product-card"
                key={product.id}
              >

                <div className="shop-product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="shop-product-badge">
                    {product.badge}
                  </span>

                  <button
                    className={`shop-heart ${
                      favorites.includes(product.id)
                        ? "liked"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFavorite(product.id)
                    }
                    aria-label={`${
                      favorites.includes(product.id)
                        ? "Remove"
                        : "Add"
                    } ${product.name} ${
                      favorites.includes(product.id)
                        ? "from"
                        : "to"
                    } favorites`}
                  >
                    <FaHeart />
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="quick-view"
                  >
                    Quick View
                    <FaArrowRight />
                  </Link>

                </div>


                <div className="shop-product-info">

                  <span className="shop-product-category">
                    {product.category}
                  </span>

                  <Link
                    to={`/product/${product.id}`}
                    className="shop-product-name"
                  >
                    {product.name}
                  </Link>

                  <div className="shop-rating">

                    <div className="stars">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}

                    </div>

                    <span>
                      {product.rating} ({product.reviews})
                    </span>

                  </div>

                  <div className="shop-product-bottom">

                    <div className="shop-price">

                      <strong>
                        {formatPrice(product.price)}
                      </strong>

                      <del>
                        {formatPrice(product.oldPrice)}
                      </del>

                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="shop-cart-button"
                      aria-label={`View ${product.name}`}
                    >
                      <FaShoppingBag />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="shop-empty">

            <div className="empty-icon">
              <FaSearch />
            </div>

            <h3>No gadgets found</h3>

            <p>
              Try searching for another product or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              View all products
            </button>

          </div>

        )}


        {/* =====================================================
            SHOP CTA
        ===================================================== */}

        <section className="shop-bottom-cta">

          <div>

            <span>
              VIK GADGETS
            </span>

            <h2>
              Technology that fits
              <strong> your lifestyle.</strong>
            </h2>

            <p>
              Discover practical gadgets designed for everyday
              life.
            </p>

          </div>

          <Link to="/contact">
            Need help choosing?
            <FaArrowRight />
          </Link>

        </section>

      </section>
<Footer/>
    </main>
  );
}

export default Shop;