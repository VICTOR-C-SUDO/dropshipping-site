
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderTracking from "./pages/OrderTracking";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Navbar />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

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
    </BrowserRouter>
  );
}

export default App;

