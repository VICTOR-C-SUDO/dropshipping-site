import { Link } from "react-router-dom";
import {
  FaCheck,
  FaBox,
  FaTruck,
  FaHome,
  FaShoppingBag,
} from "react-icons/fa";

function OrderTracking() {
  const savedOrder = localStorage.getItem("vik-order");
  const order = savedOrder ? JSON.parse(savedOrder) : null;

  if (!order) {
    return (
      <main className="tracking-page">
        <div className="tracking-empty">
          <FaBox />

          <h1>No order found</h1>

          <p>
            You haven't placed an order yet.
          </p>

          <Link to="/shop">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="tracking-page">
      <div className="tracking-container">

        <div className="tracking-header">
          <span>VIK GADGETS</span>

          <h1>Order Tracking</h1>

          <p>
            Follow the progress of your order.
          </p>
        </div>

        {/* ORDER SUCCESS */}

        <div className="order-success">

          <div className="success-icon">
            <FaCheck />
          </div>

          <div>
            <h2>Order placed successfully!</h2>

            <p>
              Thank you, {order.customer.fullName}.
              Your order has been received.
            </p>
          </div>

        </div>

        {/* ORDER INFO */}

        <div className="tracking-grid">

          <section className="tracking-main">

            <div className="tracking-card">

              <div className="tracking-card-header">
                <div>
                  <span>ORDER NUMBER</span>

                  <h2>{order.id}</h2>
                </div>

                <span className="order-status">
                  Order Placed
                </span>
              </div>

              {/* TIMELINE */}

              <div className="tracking-timeline">

                <div className="timeline-item completed">

                  <div className="timeline-icon">
                    <FaCheck />
                  </div>

                  <div>
                    <h3>Order Placed</h3>
                    <p>
                      We've received your order.
                    </p>
                  </div>

                </div>

                <div className="timeline-line"></div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <FaBox />
                  </div>

                  <div>
                    <h3>Preparing Order</h3>
                    <p>
                      Your items will be prepared for delivery.
                    </p>
                  </div>

                </div>

                <div className="timeline-line"></div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <FaTruck />
                  </div>

                  <div>
                    <h3>Out for Delivery</h3>
                    <p>
                      Your order will be on its way to you.
                    </p>
                  </div>

                </div>

                <div className="timeline-line"></div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <FaHome />
                  </div>

                  <div>
                    <h3>Delivered</h3>
                    <p>
                      Your order arrives at your address.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* DELIVERY */}

            <div className="tracking-card">

              <h2>Delivery Information</h2>

              <div className="delivery-info">

                <div>
                  <span>Customer</span>
                  <strong>
                    {order.customer.fullName}
                  </strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    {order.customer.phone}
                  </strong>
                </div>

                <div>
                  <span>Address</span>
                  <strong>
                    {order.customer.address}
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    {order.customer.city},{" "}
                    {order.customer.state}
                  </strong>
                </div>

              </div>

            </div>

          </section>

          {/* ORDER SUMMARY */}

          <aside className="tracking-summary">

            <h2>Order Summary</h2>

            <div className="tracking-products">

              {order.items.map((item) => (
                <div
                  className="tracking-product"
                  key={item.id}
                >
                  <div className="tracking-product-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div>
                    <h3>{item.name}</h3>

                    <span>
                      Qty: {item.quantity}
                    </span>

                    <strong>
                      ₦
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </strong>
                  </div>
                </div>
              ))}

            </div>

            <div className="tracking-total">
              <span>Total</span>

              <strong>
                ₦{order.total.toLocaleString()}
              </strong>
            </div>

            <Link
              to="/shop"
              className="continue-shopping"
            >
              <FaShoppingBag />
              Continue Shopping
            </Link>

          </aside>

        </div>

      </div>
    </main>
  );
}

export default OrderTracking;