import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function TermsConditions() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">

          <div className="legal-header">
            <span className="legal-label">VIK GADGETS</span>

            <h1>Terms & Conditions</h1>

            <p>
              Please read these terms before using our website
              or placing an order.
            </p>

            <span className="legal-updated">
              Last updated: October 16, 2026
            </span>
          </div>

          <div className="legal-content">

            <section>
              <h2>1. Introduction</h2>

              <p>
                Welcome to VIK GADGETS. These Terms & Conditions
                apply to your use of our website and any purchases
                made through our store.
              </p>

              <p>
                By using our website, you agree to comply with
                these terms and applicable laws. If you do not
                agree, please do not use the website.
              </p>
            </section>

            <section>
              <h2>2. Our Products</h2>

              <p>
                VIK GADGETS offers gadgets and technology
                accessories. We make reasonable efforts to ensure
                that product descriptions, images, prices and
                availability are accurate.
              </p>

              <p>
                Product images may differ slightly from the
                actual product. If a significant error or
                availability issue is discovered, we will take
                reasonable steps to inform affected customers.
              </p>
            </section>

            <section>
              <h2>3. Prices and Orders</h2>

              <p>
                Prices are displayed in Nigerian Naira (₦)
                unless otherwise stated. Applicable delivery
                charges and other costs will be communicated
                before an order is completed.
              </p>

              <p>
                Submitting an order does not necessarily mean
                that it has been accepted. We may need to confirm
                product availability, delivery details and payment
                before processing an order.
              </p>

              <p>
                If an order cannot be fulfilled, we will inform
                the customer and arrange any applicable refund
                in accordance with the law and our stated policy.
              </p>
            </section>

            <section>
              <h2>4. Payment</h2>

              <p>
                Available payment methods will be displayed or
                communicated during checkout. Customers must
                provide accurate payment information and follow
                the instructions given for their chosen method.
              </p>

              <p>
                An order will be processed according to the
                payment and order-confirmation arrangements
                presented at checkout.
              </p>
            </section>

            <section>
              <h2>5. Delivery</h2>

              <p>
                Delivery availability, estimated delivery times
                and charges may depend on the destination,
                product availability and delivery provider.
              </p>

              <p>
                Any delivery estimate provided is an estimate,
                not a guarantee, unless explicitly stated
                otherwise. We will communicate important delays
                when reasonably possible.
              </p>

              <p>
                Customers are responsible for providing a
                correct delivery address and reachable contact
                details.
              </p>
            </section>

            <section>
              <h2>6. Returns, Exchanges and Refunds</h2>

              <p>
                If a product arrives damaged, defective or
                materially different from what was ordered,
                contact us promptly with your order details
                and supporting information.
              </p>

              <p>
                Eligibility, time limits, return arrangements
                and refund methods will be handled under our
                published returns policy and applicable law.
                Any policy we publish will not remove rights
                that customers have under applicable law.
              </p>

              <p>
                Before launching your store, publish a clear
                returns and refunds policy explaining how
                customers can request assistance.
              </p>
            </section>

            <section>
              <h2>7. Customer Responsibilities</h2>

              <p>When using our website, you agree to:</p>

              <ul>
                <li>Provide accurate order and contact details.</li>
                <li>Use the website lawfully.</li>
                <li>Not attempt to disrupt or damage the website.</li>
                <li>Not use the website to commit fraud.</li>
                <li>Keep your order information available for reference.</li>
              </ul>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>

              <p>
                Unless otherwise stated, the website's original
                branding, written content and design elements
                belong to VIK GADGETS or are used with permission.
              </p>

              <p>
                You may not copy or commercially use protected
                website content without the relevant permission.
                Product names, logos and images belonging to
                third parties remain subject to their owners'
                rights.
              </p>
            </section>

            <section>
              <h2>9. Website Availability</h2>

              <p>
                We aim to keep our website available and
                functioning correctly, but we cannot guarantee
                uninterrupted access. Maintenance, technical
                problems or circumstances beyond our control
                may temporarily affect availability.
              </p>
            </section>

            <section>
              <h2>10. Limitation of Liability</h2>

              <p>
                To the extent permitted by applicable law,
                VIK GADGETS is not responsible for indirect
                losses arising from the use of our website
                that could not reasonably have been anticipated.
              </p>

              <p>
                Nothing in these terms excludes or limits
                liability where doing so would be unlawful,
                or removes any consumer rights that cannot
                legally be excluded.
              </p>
            </section>

            <section>
              <h2>11. Privacy</h2>

              <p>
                Our collection and use of personal information
                are described in our Privacy Policy.
              </p>

              <Link
                to="/privacy-policy"
                className="legal-contact-link"
              >
                Read our Privacy Policy →
              </Link>
            </section>

            <section>
              <h2>12. Changes to These Terms</h2>

              <p>
                We may revise these terms when our services,
                business practices or legal requirements change.
                Updated terms will be published on this page
                with a revised date.
              </p>
            </section>

            <section>
              <h2>13. Applicable Law</h2>

              <p>
                These terms are subject to applicable laws,
                including relevant Nigerian consumer protection
                and data protection requirements.
              </p>
            </section>

            <section>
              <h2>14. Contact Us</h2>

              <p>
                If you have questions about these terms or an
                order, contact VIK GADGETS through our Contact page.
              </p>

              <Link to="/contact" className="legal-contact-link">
                Contact VIK GADGETS →
              </Link>
            </section>

          </div>

          <div className="legal-back">
            <Link to="/">← Back to Home</Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default TermsConditions;