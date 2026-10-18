import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function CookiesPolicy() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">
          <Link to="/" className="legal-back">
            ← Back to Home
          </Link>

          <header className="legal-header">
            <span className="legal-label">VIK GADGETS</span>
            <h1>Cookies Policy</h1>
            <p>Last updated: October 16, 2026</p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that websites may store in your
                browser to remember information about your visit and improve
                your shopping experience.
              </p>
            </section>

            <section>
              <h2>2. How We Use Cookies</h2>
              <p>VIK GADGETS may use cookies or similar browser storage to:</p>
              <ul>
                <li>Remember your shopping cart and selected preferences.</li>
                <li>Help our website work correctly.</li>
                <li>Understand how visitors use our website, if analytics are enabled.</li>
                <li>Improve website performance and the shopping experience.</li>
              </ul>
            </section>

            <section>
              <h2>3. Essential Storage</h2>
              <p>
                Some browser storage may be necessary for features such as
                keeping products in your shopping cart. Blocking this storage
                may affect how parts of the website function.
              </p>
            </section>

            <section>
              <h2>4. Analytics and Advertising</h2>
              <p>
                If we introduce analytics or advertising tools, those tools may
                use cookies or similar technologies. Where required by
                applicable law, we will request your consent before using
                non-essential cookies.
              </p>
            </section>

            <section>
              <h2>5. Managing Cookies</h2>
              <p>
                You can manage or delete cookies through your browser settings.
                Please note that disabling certain cookies or browser storage
                may affect some website features.
              </p>
            </section>

            <section>
              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this policy when our website or use of cookies
                changes. Any updates will be published on this page.
              </p>
            </section>

            <section>
              <h2>7. Contact Us</h2>
              <p>
                If you have questions about this policy, please contact us
                through our{" "}
                <Link to="/contact">Contact Us</Link> page.
              </p>
            </section>

            <p className="legal-note">
              This is a starter policy. Update it to reflect the cookies,
              analytics, advertising tools, and other technologies actually
              used by your store.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default CookiesPolicy;