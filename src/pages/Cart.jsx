import { Link } from "react-router-dom";

import {
  FaTrashAlt,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaArrowLeft,
} from "react-icons/fa";

import { useStore } from "../components/StoreContext";
import Footer from "../components/Footer";

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  const formatPrice = (price) =>
    `₦${Number(price || 0).toLocaleString("en-NG")}`;

  return (
    <main className="cart-page">
      <div className="cart-container">
        {/* PAGE HEADER */}
        <header className="cart-heading">
          <span className="cart-eyebrow">
            VIK GADGETS STORE
          </span>

          <h1>Shopping Cart</h1>

          <p>
            Review your selected gadgets before checkout.
          </p>
        </header>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <section className="cart-empty">
            <div className="cart-empty-icon">
              <FaShoppingBag />
            </div>

            <h2>Your cart is empty</h2>

            <p>
              You haven't added any gadgets to your cart yet.
              Discover something you love!
            </p>

            <Link to="/shop" className="cart-primary-btn">
              Explore Products
            </Link>
          </section>
        ) : (
          /* CART CONTENT */
          <div className="cart-layout">
            {/* CART PRODUCTS */}
            <section className="cart-items-section">
              <div className="cart-items-header">
                <h2>Your Items</h2>

                <span>
                  {cartCount}{" "}
                  {cartCount === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="cart-items-list">
                {cart.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >
                    {/* PRODUCT IMAGE */}
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(event) => {
                          event.currentTarget.style.visibility =
                            "hidden";
                        }}
                      />
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="cart-item-details">
                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <h3>{item.name}</h3>

                      <p className="cart-item-price">
                        {formatPrice(item.price)}
                      </p>

                      {/* QUANTITY CONTROLS */}
                      <div className="cart-item-actions">
                        <div className="cart-quantity">
                          <button
                            type="button"
                            aria-label={`Decrease ${item.name} quantity`}
                            disabled={
                              Number(item.quantity) <= 1
                            }
                            onClick={() => {
                              updateQuantity(
                                item.id,
                                Number(item.quantity) - 1
                              );
                            }}
                          >
                            <FaMinus />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            aria-label={`Increase ${item.name} quantity`}
                            onClick={() => {
                              updateQuantity(
                                item.id,
                                Number(item.quantity) + 1
                              );
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          <FaTrashAlt />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* ITEM SUBTOTAL */}
                    <div className="cart-item-subtotal">
                      <span>Subtotal</span>

                      <strong>
                        {formatPrice(
                          Number(item.price) *
                            Number(item.quantity)
                        )}
                      </strong>
                    </div>
                  </article>
                ))}
              </div>

              {/* BOTTOM ACTIONS */}
              <div className="cart-bottom-actions">
                <Link to="/shop" className="cart-back-link">
                  <FaArrowLeft />
                  Continue Shopping
                </Link>

                <button
                  type="button"
                  className="cart-clear-btn"
                  onClick={clearCart}
                >
                  <FaTrashAlt />
                  Clear Cart
                </button>
              </div>
            </section>

            {/* ORDER SUMMARY */}
            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cart-summary-row">
                <span>Total Items</span>
                <strong>{cartCount}</strong>
              </div>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <div className="cart-summary-row">
                <span>Delivery</span>
                <span className="cart-delivery-note">
                  Calculated later
                </span>
              </div>

              <div className="cart-summary-divider" />

              <div className="cart-summary-total">
                <span>Total</span>

                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <p className="cart-summary-note">
                Delivery fees, if applicable, will be confirmed
                before your order is completed.
              </p>

              <Link
                to="/checkout"
                className="cart-checkout-btn"
              >
                Proceed to Checkout
              </Link>

              <div className="cart-secure-note">
                <FaShoppingBag />
                <span>
                  Thank you for shopping with VIK GADGETS
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </main>
    
  );
}

export default Cart;