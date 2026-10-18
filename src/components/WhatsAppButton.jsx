
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "2349076494022";

  const message = encodeURIComponent(
    "Hello VIK GADGETS, I need help with a product."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VIK GADGETS on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}