import { ToastContainer } from "react-toastify";
import { CartProvider } from "./contexts/Cart.jsx";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </CartProvider>
  </React.StrictMode>
);
