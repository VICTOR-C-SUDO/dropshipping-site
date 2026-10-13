import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useStore } from "../context/StoreContext";
import "./ProductCard.css";

function ProductCard({ product }) {
const { addToCart, toggleFavorite, isFavorite } = useStore();

const favorite = isFavorite(product.id);

const handleAddToCart = () => {
addToCart(product);
};

const handleFavorite = () => {
toggleFavorite(product.id);
};

return ( <article className="product-card"> <div className="product-image"> <img
       src={product.image}
       alt={product.name}
       loading="lazy"
     />

```
    {product.badge && (
      <span className="product-badge">
        {product.badge}
      </span>
    )}

    <button
      type="button"
      className={`favorite-btn ${favorite ? "active" : ""}`}
      onClick={handleFavorite}
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

    <h3>{product.name}</h3>

    <div className="product-rating">
      <FaStar />
      <span>{product.rating}</span>
      <span className="product-reviews">
        ({product.reviews} reviews)
      </span>
    </div>

    <div className="product-prices">
      <span className="product-price">
        ₦{product.price.toLocaleString("en-NG")}
      </span>

      {product.oldPrice && (
        <span className="product-old-price">
          ₦{product.oldPrice.toLocaleString("en-NG")}
        </span>
      )}
    </div>

    <button
      type="button"
      className="add-to-cart-btn"
      onClick={handleAddToCart}
    >
      <FaShoppingCart />
      Add to Cart
    </button>
  </div>
</article>

);
}

export default ProductCard;
