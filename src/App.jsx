import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import AdminLogin from "./components/AdminLogin";
import AdminBoard from "./components/AdminBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminBoard />} />
      </Routes>
    </div>
  );
}

export default App;
