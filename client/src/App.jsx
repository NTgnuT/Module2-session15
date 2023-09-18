import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/main.css";
import HomePage from "./assets/pages/user/homePage/HomePage";
import ListProduct from "./assets/pages/user/listProduct/ListProduct";
import About from "./assets/pages/user/about/About";
import Contact from "./assets/pages/user/contact/Contact";
import Login from "./assets/pages/user/login/Login";
import Register from "./assets/pages/user/register/Register";
import Cart from "./assets/pages/user/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
