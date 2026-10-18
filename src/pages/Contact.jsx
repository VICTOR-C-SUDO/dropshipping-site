import { useState } from "react";

import {
  FaComments,
  FaBoxOpen,
  FaInstagram,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa";

import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Subject: ${form.subject}\n` +
      `Message: ${form.message}`;

    const whatsappURL =
      `https://wa.me/2349076494022?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <main className="contact-page">
        {/* HERO */}
        <section className="contact-header">
          <div className="contact-header-glow"></div>

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's <span>Talk.</span>
          </h1>

          <p>
            Have a question about a product, your order, or anything
            else? Send us a message and our team will get back to you.
          </p>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-layout">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <div className="contact-info-intro">
              <span className="contact-small-label">
                WE'RE HERE TO HELP
              </span>

              <h2>
                Need some <span>help?</span>
              </h2>

              <p>
                Whether you're looking for product information or
                need help with an order, we're always happy to assist.
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaComments />
              </div>

              <div>
                <h3>Customer Support</h3>

                <p>
                  Questions about our products? We're here to help
                  you find the right gadget.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaBoxOpen />
              </div>

              <div>
                <h3>Order Support</h3>

                <p>
                  Need help with an existing order? Include your
                  order information in your message.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaInstagram />
              </div>

              <div>
                <h3>Social Media</h3>

                <p>
                  Follow VIK GADGETS for new products, special
                  deals and updates.
                </p>
              </div>
            </div>

            <div className="contact-brand-card">
              <div className="contact-brand-icon">
                <FaBolt />
              </div>

              <div>
                <strong>VIK GADGETS</strong>
                <span>Smart tech. Better everyday life.</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-heading">
              <span>CONTACT FORM</span>

              <h2>
                Send us a <strong>message.</strong>
              </h2>

              <p>
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="7"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send Message</span>
              <FaArrowRight />
            </button>

            <p className="contact-form-note">
              You'll be redirected to WhatsApp to send your message.
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;