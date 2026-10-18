import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">

          <div className="legal-header">
            <span className="legal-label">VIK GADGETS</span>

            <h1>Privacy Policy</h1>

            <p>
              Your privacy matters to us. Learn how we handle
              your personal information when you use our store.
            </p>

            <span className="legal-updated">
              Last updated: October 16, 2026
            </span>
          </div>

          <div className="legal-content">

            <section>
              <h2>1. Introduction</h2>

              <p>
                Welcome to VIK GADGETS. This Privacy Policy
                explains how we collect, use, store and protect
                personal information when you visit our website
                or purchase products from us.
              </p>

              <p>
                By using our website, you acknowledge this
                policy. Where consent is legally required, we
                will request it separately.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>

              <p>Depending on how you use our store, we may collect:</p>

              <ul>
                <li>
                  Contact information, such as your name,
                  email address and phone number.
                </li>

                <li>
                  Delivery information, including your delivery
                  address and location.
                </li>

                <li>
                  Order information, including products
                  purchased, quantities and order status.
                </li>

                <li>
                  Messages you send through our contact forms
                  or customer support channels.
                </li>

                <li>
                  Newsletter subscription preferences, if you
                  choose to subscribe.
                </li>

                <li>
                  Basic technical information, such as browser
                  type and website usage data, where collected.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>

              <p>We may use your information to:</p>

              <ul>
                <li>Process and manage customer orders.</li>
                <li>Arrange delivery and provide order updates.</li>
                <li>Respond to questions and support requests.</li>
                <li>Send newsletters when you have subscribed.</li>
                <li>Improve our products and website.</li>
                <li>Prevent fraud and protect our store.</li>
                <li>Meet applicable legal obligations.</li>
              </ul>

              <p>
                We will not use your information for unrelated
                marketing purposes where consent or another
                lawful basis is required.
              </p>
            </section>

            <section>
              <h2>4. Sharing Your Information</h2>

              <p>
                We may share relevant information with service
                providers when necessary to operate our store.
                These may include delivery companies, payment
                processors, website hosting providers and email
                newsletter services.
              </p>

              <p>
                We may also disclose information when required
                by applicable law or when necessary to protect
                our legitimate rights and prevent fraud.
              </p>

              <p>
                We do not sell customers' personal information
                as part of our ordinary business practices.
              </p>
            </section>

            <section>
              <h2>5. Payments</h2>

              <p>
                If online payments are introduced, payment
                details may be processed by the selected payment
                provider. We will explain the relevant payment
                process before customers submit their payments.
              </p>

              <p>
                Do not send full payment card details or
                passwords through ordinary email or contact forms.
              </p>
            </section>

            <section>
              <h2>6. Cookies and Local Storage</h2>

              <p>
                Our website may use browser storage to remember
                shopping cart items, preferences or other
                necessary website information.
              </p>

              <p>
                Additional cookies or analytics tools may be
                used if introduced. Where required, we will
                provide appropriate information and consent
                controls.
              </p>
            </section>

            <section>
              <h2>7. Data Security and Retention</h2>

              <p>
                We take reasonable steps to protect personal
                information against unauthorized access, loss,
                misuse or disclosure.
              </p>

              <p>
                No website or electronic storage system can be
                guaranteed completely secure. We retain personal
                information only for as long as reasonably
                necessary for the purposes described in this
                policy, including legal and business requirements.
              </p>
            </section>

            <section>
              <h2>8. Your Privacy Rights</h2>

              <p>
                Depending on applicable law, you may have the
                right to request access to your personal
                information, correct inaccurate details, request
                deletion, object to certain processing or withdraw
                consent where processing relies on consent.
              </p>

              <p>
                You can unsubscribe from marketing emails using
                the unsubscribe instructions provided in those
                messages.
              </p>
            </section>

            <section>
              <h2>9. Children's Privacy</h2>

              <p>
                Our store is not intended to knowingly collect
                personal information from children in violation
                of applicable law. A parent or guardian may
                contact us if they believe a child has provided
                personal information improperly.
              </p>
            </section>

            <section>
              <h2>10. Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy when our
                business practices or legal requirements change.
                The latest version will be published on this page
                with its updated date.
              </p>
            </section>

            <section>
              <h2>11. Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy
                or how your information is handled, contact
                VIK GADGETS through our Contact page.
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

export default PrivacyPolicy;