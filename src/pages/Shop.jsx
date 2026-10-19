import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useStore } from "../components/StoreContext";

import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaChevronDown,
  FaSlidersH,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Get shared products and favourites.
  const {
    products,
    favorites,
    toggleFavorite,
  } = useStore();

  const categories = [
    "All",
    "Phones",
    "Audio",
    "Computer",
    "Power",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
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
      result.sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      );
    }

    return result;
  }, [products, category, search, sort]);

  const formatPrice = (price) =>
    `₦${Number(price).toLocaleString("en-NG")}`;

  // KEEP YOUR EXISTING RETURN (...) BELOW THIS LINE.
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