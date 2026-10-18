
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CookiesPolicy from "./pages/CookiesPolicy";
import WhatsAppButton from "./components/WhatsAppButton";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderTracking from "./pages/OrderTracking";
import { StoreProvider } from "./components/StoreContext";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      {/* Navigation */}
      <Navbar />

      <PageTransition>
    
        <Routes>
              
          <Route path="/" element={<Home />} />
<Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/about" element={<About />} />
<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms"
  element={<TermsConditions />}
/>
          <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} />
          {/* Favorites - support both URL formats */}
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/favourite"
            element={<Navigate to="/Favorites" replace />}
          />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/order-tracking" element={<OrderTracking />} />

          {/* Unknown URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
            <WhatsAppButton />
    </StoreProvider>
        
  );
}

export default App;

