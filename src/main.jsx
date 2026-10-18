
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "./components/ThemeContext";
import { StoreProvider } from "./components/StoreContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);