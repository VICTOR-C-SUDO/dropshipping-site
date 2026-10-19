import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { useStore } from "../components/StoreContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleFavorite,
    isFavorite,
  } = useStore();

  if (!product || product.id === undefined) {
    return null;
  }

  const favorite = isFavorite(product.id);

  return (
    <article className="product-card">
      <div className="product-image">
        <Link
          to={`/product/${product.id}`}
          className="product-details-link"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className={`favorite-btn ${
            favorite ? "active" : ""
          }`}
          onClick={() => toggleFavorite(product.id)}
          aria-label={
            favorite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={favorite}
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="product-name-link"
        >
          <h3>{product.name}</h3>
        </Link>

        <div className="product-rating">
          <FaStar />
          <span>{product.rating}</span>

          <span className="product-reviews">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-prices">
          <span className="product-price">
            ₦{Number(product.price).toLocaleString("en-NG")}
          </span>

          {product.oldPrice && (
            <span className="product-old-price">
              ₦{Number(product.oldPrice).toLocaleString("en-NG")}
            </span>
          )}
        </div>

        <button
          type="button"
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;