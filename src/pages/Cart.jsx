import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShieldAlt,
} from "react-icons/fa";

import { useStore } from "../components/StoreContext";
import Footer from "../components/Footer";

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useStore();

  const formatPrice = (price) =>
    `₦${Number(price).toLocaleString("en-NG")}`;

  return (
    <>
      <main className="cart-page">
        <div className="cart-container">

          {/* Header */}
          <div className="cart-header">
            <span className="cart-eyebrow">
              VIK GADGETS STORE
            </span>

            <h1>
              Your <span>Shopping Cart</span>
            </h1>

            <p>
              Review your selected gadgets before checkout.
            </p>
          </div>

          {/* Empty Cart */}
          {!cart || cart.length === 0 ? (
            <section className="cart-empty">
              <div className="cart-empty-icon">
                <FaShoppingCart />
              </div>

              <h2>Your cart is empty</h2>

              <p>
                You haven't added any gadgets yet.
                Explore our collection and find something you love.
              </p>

              <Link to="/shop" className="cart-primary-button">
                <FaArrowLeft />
                Continue Shopping
              </Link>
            </section>
          ) : (
            <div className="cart-layout">

              {/* Cart Items */}
              <section className="cart-items-section">
                <div className="cart-items-heading">
                  <h2>Shopping Items</h2>

                  <span>
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="cart-items">
                  {cart.map((item) => (
                    <article
                      className="cart-item"
                      key={item.id}
                    >
                      <Link
                        to={`/product/${item.id}`}
                        className="cart-item-image"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </Link>

                      <div className="cart-item-details">
                        <span className="cart-item-category">
                          {item.category || "Gadget"}
                        </span>

                        <Link
                          to={`/product/${item.id}`}
                          className="cart-item-name"
                        >
                          {item.name}
                        </Link>

                        <strong className="cart-item-price">
                          {formatPrice(item.price)}
                        </strong>

                        <div className="cart-item-actions">
                          <div className="cart-quantity">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                              aria-label="Decrease quantity"
                            >
                              <FaMinus />
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              aria-label="Increase quantity"
                            >
                              <FaPlus />
                            </button>
                          </div>

                          <button
                            type="button"
                            className="cart-remove-button"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTrash />
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-subtotal">
                        <span>Subtotal</span>

                        <strong>
                          {formatPrice(
                            Number(item.price) * item.quantity
                          )}
                        </strong>
                      </div>
                    </article>
                  ))}
                </div>

                <Link to="/shop" className="cart-continue-link">
                  <FaArrowLeft />
                  Continue Shopping
                </Link>
              </section>

              {/* Order Summary */}
              <aside className="cart-summary">
                <h2>Order Summary</h2>

                <div className="cart-summary-row">
                  <span>Items ({cartCount})</span>

                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <div className="cart-summary-row">
                  <span>Shipping</span>

                  <span className="cart-shipping-note">
                    Calculated at checkout
                  </span>
                </div>

                <div className="cart-summary-divider" />

                <div className="cart-summary-total">
                  <span>Subtotal</span>

                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <p className="cart-shipping-info">
                  Final delivery charges will be confirmed during checkout.
                </p>

                <Link
                  to="/checkout"
                  className="cart-checkout-button"
                >
                  Proceed to Checkout
                  <span>→</span>
                </Link>

                <div className="cart-secure-note">
                  <FaShieldAlt />

                  <span>
                    Secure shopping experience
                  </span>
                </div>
              </aside>

            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;