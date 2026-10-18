import {
  FaHeart,
  FaShoppingCart,
  FaTrashAlt,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useStore } from "../components/StoreContext";



function Favorites() {
  const {
    favoriteProducts,
    toggleFavorite,
    addToCart,
  } = useStore();

  return (
    <main className="fav-page">
      <section className="fav-container">
        <div className="fav-heading">
          <div>
            <span className="fav-subtitle">
              YOUR COLLECTION
            </span>

            <h1>
              My Favourites <FaHeart />
            </h1>

            <p>Your favourite gadgets, all in one place.</p>
          </div>

          <span className="fav-count">
            {favoriteProducts.length}{" "}
            {favoriteProducts.length === 1
              ? "product"
              : "products"}
          </span>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="fav-empty">
            <FaHeart className="fav-empty-icon" />

            <h2>No favourites yet</h2>

            <p>
              Visit our shop and click the heart on a product
              to save it here.
            </p>

            <Link to="/shop" className="fav-shop-btn">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="fav-grid">
            {favoriteProducts.map((product) => (
              <article
                className="fav-card"
                key={product.id}
              >
                <div className="fav-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.badge && (
                    <span className="fav-badge">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="fav-info">
                  <span className="fav-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="fav-prices">
                    <strong className="fav-price">
                      ₦{Number(product.price).toLocaleString("en-NG")}
                    </strong>

                    {product.oldPrice != null && (
                      <del className="fav-old-price">
                        ₦
                        {Number(product.oldPrice).toLocaleString("en-NG")}
                      </del>
                    )}
                  </div>

                  <div className="fav-actions">
                    <button
                      type="button"
                      className="fav-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>

                    <button
                      type="button"
                      className="fav-remove-btn"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label="Remove from favourites"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
       <Footer />
    </main>
  );
}

export default Favorites;