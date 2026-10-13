import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLock,
  FaShoppingBag,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

import { useStore } from "../components/StoreContext";
import Footer from "../components/Footer";

function Checkout() {
  const {
    cart = [],
    cartTotal = 0,
    cartCount = 0,
    clearCart,
  } = useStore();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    paymentMethod: "delivery",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const formatPrice = (price) =>
    `₦${Number(price ?? 0).toLocaleString("en-NG")}`;

  const subtotal = Number(cartTotal ?? 0);
  const shipping = subtotal === 0 || subtotal >= 100000 ? 0 : 2500;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!form.address.trim()) {
      newErrors.address = "Please enter your delivery address.";
    }

    if (!form.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!form.state.trim()) {
      newErrors.state = "Please enter your state.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add products before checking out.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    const newOrderNumber = `VIK-${Date.now().toString().slice(-8)}`;

    const order = {
      orderNumber: newOrderNumber,
      customer: form,
      items: cart,
      subtotal,
      shipping,
      total,
      createdAt: new Date().toISOString(),
      status: "Pending",
    };

    // Save the order in this browser.
    try {
      const previousOrders = JSON.parse(
        localStorage.getItem("vik-orders") || "[]"
      );

      previousOrders.push(order);

      localStorage.setItem("vik-orders", JSON.stringify(previousOrders));
      localStorage.setItem("vik-last-order", JSON.stringify(order));
    } catch (error) {
      console.error("Could not save order:", error);
      alert("Your order could not be saved. Please try again.");
      return;
    }

    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    if (typeof clearCart === "function") {
      clearCart();
    }
  };

  return (
    <>
      <main className="checkout-page">
        <div className="checkout-container">
          <Link to="/cart" className="checkout-back">
            <FaArrowLeft />
            <span>Back to cart</span>
          </Link>

          {orderPlaced ? (
            <section className="checkout-success">
              <div className="success-icon">
                <FaCheckCircle />
              </div>

              <h1>Thank you for your order!</h1>

              <p>
                Your order has been saved in this browser. Your order number
                is shown below.
              </p>

              <div className="order-number">
                <span>Order number</span>
                <strong>{orderNumber}</strong>
              </div>

              <p className="success-note">
                Order confirmation and payment processing are not connected
                to a real payment service yet.
              </p>

              <Link to="/shop" className="checkout-primary-btn">
                Continue shopping
              </Link>

              <Link to="/" className="checkout-secondary-link">
                Return to homepage
              </Link>
            </section>
          ) : (
            <>
              <div className="checkout-heading">
                <span className="checkout-eyebrow">VIK GADGETS</span>
                <h1>Checkout</h1>
                <p>Enter your details to complete your order.</p>
              </div>

              {cart.length === 0 ? (
                <section className="checkout-empty">
                  <FaShoppingBag className="empty-bag-icon" />

                  <h2>Your cart is empty</h2>

                  <p>
                    Add some gadgets to your cart before proceeding to
                    checkout.
                  </p>

                  <Link to="/shop" className="checkout-primary-btn">
                    Explore products
                  </Link>
                </section>
              ) : (
                <div className="checkout-layout">
                  <form
                    className="checkout-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <section className="checkout-section">
                      <div className="section-title">
                        <span className="section-number">01</span>

                        <div>
                          <h2>Contact information</h2>
                          <p>How can we reach you?</p>
                        </div>
                      </div>

                      <div className="checkout-field">
                        <label htmlFor="fullName">Full name</label>

                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={form.fullName}
                          onChange={handleChange}
                        />

                        {errors.fullName && (
                          <small className="field-error">
                            {errors.fullName}
                          </small>
                        )}
                      </div>

                      <div className="checkout-field">
                        <label htmlFor="email">Email address</label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                        />

                        {errors.email && (
                          <small className="field-error">
                            {errors.email}
                          </small>
                        )}
                      </div>

                      <div className="checkout-field">
                        <label htmlFor="phone">Phone number</label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={form.phone}
                          onChange={handleChange}
                        />

                        {errors.phone && (
                          <small className="field-error">
                            {errors.phone}
                          </small>
                        )}
                      </div>
                    </section>

                    <section className="checkout-section">
                      <div className="section-title">
                        <span className="section-number">02</span>

                        <div>
                          <h2>Delivery address</h2>
                          <p>Where should we deliver your order?</p>
                        </div>
                      </div>

                      <div className="checkout-field">
                        <label htmlFor="address">Street address</label>

                        <input
                          id="address"
                          name="address"
                          type="text"
                          placeholder="House number and street"
                          value={form.address}
                          onChange={handleChange}
                        />

                        {errors.address && (
                          <small className="field-error">
                            {errors.address}
                          </small>
                        )}
                      </div>

                      <div className="checkout-two-columns">
                        <div className="checkout-field">
                          <label htmlFor="city">City</label>

                          <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Your city"
                            value={form.city}
                            onChange={handleChange}
                          />

                          {errors.city && (
                            <small className="field-error">
                              {errors.city}
                            </small>
                          )}
                        </div>

                        <div className="checkout-field">
                          <label htmlFor="state">State</label>

                          <input
                            id="state"
                            name="state"
                            type="text"
                            placeholder="Your state"
                            value={form.state}
                            onChange={handleChange}
                          />

                          {errors.state && (
                            <small className="field-error">
                              {errors.state}
                            </small>
                          )}
                        </div>
                      </div>
                    </section>

                    <section className="checkout-section">
                      <div className="section-title">
                        <span className="section-number">03</span>

                        <div>
                          <h2>Payment method</h2>
                          <p>Choose how you intend to pay.</p>
                        </div>
                      </div>

                      <label className="payment-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="delivery"
                          checked={form.paymentMethod === "delivery"}
                          onChange={handleChange}
                        />

                        <span className="payment-option-content">
                          <strong>Pay on delivery</strong>
                          <small>
                            Pay when your order arrives, where available.
                          </small>
                        </span>
                      </label>

                      <label className="payment-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="transfer"
                          checked={form.paymentMethod === "transfer"}
                          onChange={handleChange}
                        />

                        <span className="payment-option-content">
                          <strong>Bank transfer</strong>
                          <small>
                            Payment instructions must be provided by the
                            store owner.
                          </small>
                        </span>
                      </label>

                      <div className="payment-notice">
                        <FaLock />
                        <span>
                          This demo does not process payments or verify
                          transfers.
                        </span>
                      </div>
                    </section>

                    <button
                      type="submit"
                      className="checkout-primary-btn checkout-submit"
                    >
                      Place order · {formatPrice(total)}
                    </button>

                    <p className="checkout-terms">
                      Please check your contact and delivery details before
                      placing your order.
                    </p>
                  </form>

                  <aside className="order-summary">
                    <div className="summary-heading">
                      <div>
                        <h2>Your order</h2>
                        <p>
                          {cartCount} {cartCount === 1 ? "item" : "items"}
                        </p>
                      </div>

                      <FaShoppingBag />
                    </div>

                    <div className="summary-products">
                      {cart.map((item) => (
                        <div className="summary-product" key={item.id}>
                          <div className="summary-product-image">
                            {item.image ? (
                              <img src={item.image} alt={item.name} />
                            ) : (
                              <FaShoppingBag />
                            )}

                            <span>{Number(item.quantity ?? 1)}</span>
                          </div>

                          <div className="summary-product-details">
                            <h3>{item.name}</h3>

                            <p>
                              Qty: {Number(item.quantity ?? 1)}
                            </p>
                          </div>

                          <strong>
                            {formatPrice(
                              Number(item.price ?? 0) *
                                Number(item.quantity ?? 1)
                            )}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="summary-calculations">
                      <div className="summary-row">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>

                      <div className="summary-row">
                        <span>Shipping</span>

                        <span>
                          {shipping === 0 ? "Free" : formatPrice(shipping)}
                        </span>
                      </div>

                      {shipping === 0 && subtotal > 0 && (
                        <p className="free-shipping-note">
                          You've qualified for free shipping!
                        </p>
                      )}

                      <div className="summary-row summary-total">
                        <span>Total</span>
                        <strong>{formatPrice(total)}</strong>
                      </div>
                    </div>

                    <div className="delivery-note">
                      <FaTruck />

                      <div>
                        <strong>Delivery information</strong>
                        <p>
                          Shipping availability and delivery time must be
                          confirmed by the store.
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
/* FIX CHECKOUT DARK MODE */
html.dark,
html.dark-mode,
body.dark,
body.dark-mode,
.dark,
.dark-mode {
  color-scheme: dark;
}

html.dark .checkout-page,
html.dark-mode .checkout-page,
body.dark .checkout-page,
body.dark-mode .checkout-page,
.dark .checkout-page,
.dark-mode .checkout-page {
  background: #0f1117 !important;
  color: #f5f5f5 !important;
}

html.dark .checkout-form,
html.dark .order-summary,
html.dark-mode .checkout-form,
html.dark-mode .order-summary,
body.dark .checkout-form,
body.dark .order-summary,
body.dark-mode .checkout-form,
body.dark-mode .order-summary,
.dark .checkout-form,
.dark .order-summary,
.dark-mode .checkout-form,
.dark-mode .order-summary {
  background: #191c24 !important;
  color: #f5f5f5 !important;
  border-color: #303440 !important;
}

/* Contact information and delivery sections */
html.dark .checkout-section,
html.dark-mode .checkout-section,
body.dark .checkout-section,
body.dark-mode .checkout-section,
.dark .checkout-section,
.dark-mode .checkout-section {
  background: transparent !important;
  color: #f5f5f5 !important;
}

/* Your order heading and product details */
html.dark .summary-heading,
html.dark-mode .summary-heading,
body.dark .summary-heading,
body.dark-mode .summary-heading,
.dark .summary-heading,
.dark-mode .summary-heading {
  color: #f5f5f5 !important;
}

html.dark .summary-product-details h3,
html.dark-mode .summary-product-details h3,
body.dark .summary-product-details h3,
body.dark-mode .summary-product-details h3,
.dark .summary-product-details h3,
.dark-mode .summary-product-details h3 {
  color: #f5f5f5 !important;
}

/* Input fields */
html.dark .checkout-field input,
html.dark-mode .checkout-field input,
body.dark .checkout-field input,
body.dark-mode .checkout-field input,
.dark .checkout-field input,
.dark-mode .checkout-field input {
  background: #11141b !important;
  color: #ffffff !important;
  border: 1px solid #373b47 !important;
}

/* Labels and section headings */
html.dark .checkout-section h2,
html.dark-mode .checkout-section h2,
body.dark .checkout-section h2,
body.dark-mode .checkout-section h2,
.dark .checkout-section h2,
.dark-mode .checkout-section h2 {
  color: #ffffff !important;
}

/* Subtotal, shipping and total */
html.dark .summary-row,
html.dark-mode .summary-row,
body.dark .summary-row,
body.dark-mode .summary-row,
.dark .summary-row,
.dark-mode .summary-row {
  color: #f5f5f5 !important;
}

/* Payment and delivery boxes */
html.dark .payment-option,
html.dark-mode .payment-option,
body.dark .payment-option,
body.dark-mode .payment-option,
.dark .payment-option,
.dark-mode .payment-option {
  background: #191c24 !important;
  color: #f5f5f5 !important;
  border-color: #373b47 !important;
}

html.dark .payment-notice,
html.dark .delivery-note,
html.dark-mode .payment-notice,
html.dark-mode .delivery-note,
body.dark .payment-notice,
body.dark .delivery-note,
body.dark-mode .payment-notice,
body.dark-mode .delivery-note,
.dark .payment-notice,
.dark .delivery-note,
.dark-mode .payment-notice,
.dark-mode .delivery-note {
  background: #222630 !important;
  color: #e0e0e0 !important;
}

/* Product image background */
html.dark .summary-product-image,
html.dark-mode .summary-product-image,
body.dark .summary-product-image,
body.dark-mode .summary-product-image,
.dark .summary-product-image,
.dark-mode .summary-product-image {
  background: #222630 !important;
}

/* Divider lines */
html.dark .summary-heading,
html.dark .summary-calculations,
html.dark-mode .summary-heading,
html.dark-mode .summary-calculations,
body.dark .summary-heading,
body.dark .summary-calculations,
body.dark-mode .summary-heading,
body.dark-mode .summary-calculations {
  border-color: #303440 !important;
}



/* DARK MODE */
.dark-mode .checkout-page,
body.dark-mode .checkout-page {
  background: #0f1117;
  color: #f5f5f5;
}

.dark-mode .checkout-form,
.dark-mode .order-summary,
.dark-mode .checkout-empty,
.dark-mode .checkout-success,
body.dark-mode .checkout-form,
body.dark-mode .order-summary,
body.dark-mode .checkout-empty,
body.dark-mode .checkout-success {
  background: #191c24;
  color: #f5f5f5;
  border-color: #303440;
}

.dark-mode .checkout-field input,
body.dark-mode .checkout-field input {
  background: #11141b;
  color: #f5f5f5;
  border-color: #373b47;
}

.dark-mode .checkout-field input::placeholder,
body.dark-mode .checkout-field input::placeholder {
  color: #969ba8;
}

.dark-mode .payment-option,
body.dark-mode .payment-option {
  border-color: #373b47;
}

.dark-mode .payment-option:has(input:checked),
body.dark-mode .payment-option:has(input:checked) {
  background: #292319;
  border-color: #c58a42;
}

.dark-mode .payment-notice,
.dark-mode .delivery-note,
.dark-mode .summary-product-image,
body.dark-mode .payment-notice,
body.dark-mode .delivery-note,
body.dark-mode .summary-product-image {
  background: #222630;
  color: #e0e0e0;
}

.dark-mode .checkout-back,
.dark-mode .checkout-secondary-link,
body.dark-mode .checkout-back,
body.dark-mode .checkout-secondary-link {
  color: #f5f5f5;
}

.dark-mode .summary-product-details h3,
.dark-mode .summary-product > strong,
.dark-mode .summary-total strong,
body.dark-mode .summary-product-details h3,
body.dark-mode .summary-product > strong,
body.dark-mode .summary-total strong {
  color: #f5f5f5;
}

.dark-mode .summary-heading,
.dark-mode .summary-calculations,
.dark-mode .checkout-section + .checkout-section,
body.dark-mode .summary-heading,
body.dark-mode .summary-calculations,
body.dark-mode .checkout-section + .checkout-section {
  border-color: #303440;
}

.dark-mode .checkout-primary-btn,
body.dark-mode .checkout-primary-btn {
  background: #c58a42;
  color: #111111;
}



        .checkout-page {
          min-height: 70vh;
          padding: 45px 20px 80px;
          background: var(--bg, #f7f8fa);
          color: var(--text, #171717);
        }

        .checkout-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .checkout-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 30px;
          color: var(--text, #171717);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .checkout-heading {
          margin-bottom: 35px;
        }

        .checkout-eyebrow {
          color: #b77b32;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .checkout-heading h1 {
          margin: 8px 0;
          font-size: clamp(32px, 5vw, 45px);
        }

        .checkout-heading p,
        .section-title p,
        .summary-heading p {
          margin: 0;
          color: var(--muted, #777);
          font-size: 14px;
        }

        .checkout-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.8fr);
          gap: 30px;
          align-items: start;
        }

        .checkout-form,
        .order-summary,
        .checkout-empty,
        .checkout-success {
          background: var(--card-bg, #fff);
          border: 1px solid var(--border, #e8e8e8);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.035);
        }

        .checkout-form {
          padding: 30px;
        }

        .checkout-section + .checkout-section {
          margin-top: 35px;
          padding-top: 30px;
          border-top: 1px solid var(--border, #e8e8e8);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .section-number {
          display: grid;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 12px;
          background: #fff1df;
          color: #9a6223;
          font-size: 13px;
          font-weight: 800;
        }

        .section-title h2,
        .summary-heading h2 {
          margin: 0 0 5px;
          font-size: 19px;
        }

        .checkout-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 19px;
        }

        .checkout-field label {
          font-size: 13px;
          font-weight: 700;
        }

        .checkout-field input {
          box-sizing: border-box;
          width: 100%;
          min-height: 48px;
          padding: 12px 14px;
          border: 1px solid var(--border, #dedede);
          border-radius: 9px;
          outline: none;
          background: var(--input-bg, #fff);
          color: var(--text, #171717);
          font: inherit;
          font-size: 14px;
        }

        .checkout-field input:focus {
          border-color: #c58a42;
          box-shadow: 0 0 0 3px rgba(197, 138, 66, 0.12);
        }

        .checkout-field input::placeholder {
          color: #999;
        }

        .field-error {
          color: #d63031;
          font-size: 12px;
        }

        .checkout-two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .payment-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border: 1px solid var(--border, #e3e3e3);
          border-radius: 12px;
          cursor: pointer;
        }

        .payment-option:has(input:checked) {
          border-color: #c58a42;
          background: rgba(197, 138, 66, 0.06);
        }

        .payment-option input {
          margin-top: 4px;
          accent-color: #b77b32;
        }

        .payment-option-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .payment-option-content strong {
          font-size: 14px;
        }

        .payment-option-content small {
          color: var(--muted, #777);
          font-size: 12px;
          line-height: 1.5;
        }

        .payment-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 16px;
          padding: 13px;
          border-radius: 9px;
          background: var(--bg, #f7f7f7);
          color: var(--muted, #666);
          font-size: 12px;
          line-height: 1.6;
        }

        .payment-notice svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkout-primary-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          box-sizing: border-box;
          padding: 15px 20px;
          border: none;
          border-radius: 10px;
          background: #171717;
          color: #fff;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }

        .checkout-primary-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .checkout-submit {
          width: 100%;
          margin-top: 10px;
        }

        .checkout-terms {
          margin: 13px 0 0;
          color: var(--muted, #888);
          font-size: 11px;
          line-height: 1.6;
          text-align: center;
        }

        .order-summary {
          position: sticky;
          top: 25px;
          padding: 25px;
        }

        .summary-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border, #e8e8e8);
        }

        .summary-heading > svg {
          font-size: 22px;
          color: #b77b32;
        }

        .summary-products {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 22px 0;
        }

        .summary-product {
          display: grid;
          grid-template-columns: 65px minmax(0, 1fr) auto;
          align-items: center;
          gap: 12px;
        }

        .summary-product-image {
          position: relative;
          display: grid;
          width: 65px;
          height: 65px;
          place-items: center;
          border-radius: 10px;
          background: var(--bg, #f3f3f3);
          color: var(--muted, #777);
        }

        .summary-product-image img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .summary-product-image > span {
          position: absolute;
          top: -7px;
          right: -7px;
          display: grid;
          min-width: 21px;
          height: 21px;
          padding: 0 3px;
          box-sizing: border-box;
          place-items: center;
          border-radius: 50%;
          background: #171717;
          color: #fff;
          font-size: 11px;
        }

        .summary-product-details {
          min-width: 0;
        }

        .summary-product-details h3 {
          margin: 0 0 6px;
          font-size: 13px;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }

        .summary-product-details p {
          margin: 0;
          color: var(--muted, #777);
          font-size: 12px;
        }

        .summary-product > strong {
          font-size: 12px;
          white-space: nowrap;
        }

        .summary-calculations {
          padding-top: 20px;
          border-top: 1px solid var(--border, #e8e8e8);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 13px;
        }

        .summary-row > span:first-child {
          color: var(--muted, #777);
        }

        .summary-total {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border, #e8e8e8);
          font-size: 16px;
        }

        .summary-total strong {
          font-size: 21px;
        }

        .free-shipping-note {
          margin: -6px 0 15px;
          color: #16834a;
          font-size: 12px;
        }

        .delivery-note {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          padding: 15px;
          border-radius: 11px;
          background: var(--bg, #f7f7f7);
        }

        .delivery-note > svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #b77b32;
        }

        .delivery-note strong {
          font-size: 12px;
        }

        .delivery-note p {
          margin: 6px 0 0;
          color: var(--muted, #777);
          font-size: 11px;
          line-height: 1.6;
        }

        .checkout-empty,
        .checkout-success {
          max-width: 600px;
          margin: 0 auto;
          padding: 50px 25px;
          text-align: center;
        }

        .empty-bag-icon,
        .success-icon {
          margin-bottom: 20px;
          color: #b77b32;
          font-size: 42px;
        }

        .checkout-empty h2,
        .checkout-success h1 {
          margin: 0 0 12px;
        }

        .checkout-empty p,
        .checkout-success > p {
          margin: 0 auto 25px;
          max-width: 440px;
          color: var(--muted, #777);
          font-size: 14px;
          line-height: 1.7;
        }

        .success-icon {
          color: #16834a;
        }

        .order-number {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 25px 0;
          padding: 20px;
          border: 1px dashed var(--border, #ddd);
          border-radius: 12px;
        }

        .order-number span {
          color: var(--muted, #777);
          font-size: 12px;
        }

        .order-number strong {
          font-size: 23px;
          letter-spacing: 1px;
        }

        .checkout-success .success-note {
          font-size: 12px;
        }

        .checkout-secondary-link {
          display: block;
          margin-top: 20px;
          color: var(--text, #171717);
          font-size: 13px;
          text-decoration: underline;
        }

        @media (max-width: 850px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }

          .order-summary {
            position: static;
          }
        }

        @media (max-width: 520px) {
          .checkout-page {
            padding: 25px 13px 50px;
          }

          .checkout-form,
          .order-summary {
            padding: 20px 16px;
            border-radius: 13px;
          }

          .checkout-two-columns {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .summary-product {
            grid-template-columns: 55px minmax(0, 1fr) auto;
            gap: 9px;
          }

          .summary-product-image {
            width: 55px;
            height: 55px;
          }

          .summary-product > strong {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

export default Checkout;