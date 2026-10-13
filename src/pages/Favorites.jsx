import { Link } from "react-router-dom";
import {
  FaHeart,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";

import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useStore } from "../components/StoreContext";

function Favorites() {
  const { favoriteProducts } = useStore();

  return (
    <>
      <main className="favorites-page">
        {/* HEADER */}
        <section className="favorites-header">
          <span className="section-label">
            <FaHeart /> YOUR COLLECTION
          </span>

          <h1>
            Your <span>Favorites.</span>
          </h1>

          <p>
            All the gadgets you've saved, collected in one place.
          </p>

          <div className="favorites-count">
            <FaHeart />
            <span>
              {favoriteProducts.length}{" "}
              {favoriteProducts.length === 1
                ? "product"
                : "products"}{" "}
              saved
            </span>
          </div>
        </section>

        {/* FAVORITE PRODUCTS */}
        {favoriteProducts.length > 0 ? (
          <section className="favorites-products">
            <div className="favorites-section-heading">
              <div>
                <h2>Saved for you</h2>
                <p>
                  Your favourite gadgets, ready to explore.
                </p>
              </div>

              <Link
                to="/shop"
                className="favorites-continue-link"
              >
                Continue shopping <FaArrowRight />
              </Link>
            </div>

            <div className="products-grid">
              {favoriteProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </section>
        ) : (
          /* EMPTY STATE */
          <section className="empty-favorites">
            <div className="empty-favorites-icon">
              <FaHeart />
            </div>

            <span className="empty-favorites-label">
              NOTHING SAVED YET
            </span>

            <h2>Your collection is waiting.</h2>

            <p>
              Found something you love? Tap the heart on any
              product to save it here for later.
            </p>

            <Link to="/shop" className="primary-btn">
              <FaShoppingBag />
              Explore Products
              <FaArrowRight />
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Favorites;