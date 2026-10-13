import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaCheck,
} from "react-icons/fa";

import { useStore } from "../components/StoreContext";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const {
    products,
    cartCount,
    addToCart,
    toggleFavorite,
    isFavorite,
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Find the product using its ID.
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Format prices in Nigerian Naira.
  const formatPrice = (price) =>
    `₦${Number(price).toLocaleString("en-NG")}`;

  // Handle an invalid product ID.
  if (!product) {
    return (
      <>
        <main className="product-details-page">
          <div className="product-not-found">
            <div className="product-not-found-icon">
              <FaShoppingCart />
            </div>

            <h1>Product Not Found</h1>

            <p>
              Sorry, we couldn't find this product.
              Please return to our shop and choose another item.
            </p>

            <Link to="/shop" className="product-primary-button">
              Back to Shop
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const favorite = isFavorite(product.id);

  // Increase quantity.
  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  // Decrease quantity without going below one.
  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  // Add the selected product and quantity to the shared cart.
  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // Add or remove the product from favorites.
  const handleFavorite = () => {
    toggleFavorite(product.id);
  };

  return (
    <>
      <main className="product-details-page">
        <div className="product-details-container">

          {/* Breadcrumb */}
          <nav className="product-breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/shop">Shop</Link>

            <span>/</span>

            <strong>{product.name}</strong>
          </nav>

          {/* Product details */}
          <section className="product-details">

            {/* Product image */}
            <div className="product-gallery">
              <div className="product-main-image">

                {product.badge && (
                  <span className="product-sale-badge">
                    {product.badge}
                  </span>
                )}

                <button
                  type="button"
                  className={`product-details-heart ${
                    favorite ? "liked" : ""
                  }`}
                  onClick={handleFavorite}
                  aria-label={
                    favorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  <FaHeart />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-image-note">
                <FaCheck />
                Quality gadgets for everyday life
              </div>
            </div>

            {/* Product information */}
            <div className="product-information">

              <span className="product-details-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              {/* Rating */}
              <div className="product-details-rating">
                <div className="product-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <span>{product.rating || "4.8"}</span>

                <span className="product-review-count">
                  ({product.reviews || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="product-details-price">
                <strong>
                  {formatPrice(product.price)}
                </strong>

                {product.oldPrice > product.price && (
                  <>
                    <del>
                      {formatPrice(product.oldPrice)}
                    </del>

                    <span className="product-discount">
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="product-description">
                {product.description ||
                  `Discover the ${product.name}, designed to make your everyday technology experience easier, smarter and more convenient.`}
              </p>

              {/* Features */}
              <div className="product-features">

                <div className="product-feature">
                  <div className="product-feature-icon">
                    <FaTruck />
                  </div>

                  <div>
                    <strong>Delivery</strong>
                    <p>
                      Delivery details confirmed at checkout.
                    </p>
                  </div>
                </div>

                <div className="product-feature">
                  <div className="product-feature-icon">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <strong>Shopping Support</strong>
                    <p>
                      Contact us if you need assistance.
                    </p>
                  </div>
                </div>

                <div className="product-feature">
                  <div className="product-feature-icon">
                    <FaUndo />
                  </div>

                  <div>
                    <strong>Returns</strong>
                    <p>
                      Ask us about our return policy.
                    </p>
                  </div>
                </div>

              </div>

              {/* Quantity and Add to Cart */}
              <div className="product-purchase">

                <div className="product-quantity-control">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  type="button"
                  className={`product-add-cart-button ${
                    added ? "product-added" : ""
                  }`}
                  onClick={handleAddToCart}
                >
                  {added ? <FaCheck /> : <FaShoppingCart />}

                  {added ? "Added to Cart!" : "Add to Cart"}
                </button>

              </div>

              {/* Buy now */}
              <Link
                to="/checkout"
                state={{
                  buyNow: true,
                  productId: product.id,
                  quantity,
                }}
                className="product-buy-now-button"
              >
                Buy Now
                <span>→</span>
              </Link>

              {/* Cart link */}
             <Link
  to="/checkout"
  className="product-view-cart-link"
>
  <FaShoppingCart />
  View Cart ({cartCount})
</Link>
              {/* Back to shop */}
              <Link
                to="/shop"
                className="product-back-shop-link"
              >
                <FaArrowLeft />
                Continue Shopping
              </Link>

            </div>
          </section>

          {/* Extra information */}
          <section className="product-extra">
            <div className="product-extra-card">
              <span className="product-extra-label">
                VIK GADGETS
              </span>

              <h2>
                Technology for your
                <span> everyday life.</span>
              </h2>

              <p>
                Explore gadgets and accessories selected to
                make everyday tasks easier and more convenient.
              </p>

              <Link
                to="/shop"
                className="product-extra-button"
              >
                Explore More Products
                <span>→</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;