import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa todas las páginas que se van a utilizar
import Home from './pages/HomePage';
import HomeAdminPage from './pages/HomeAdminPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from './pages/PaymentPage';
import ClientOrderPage from './pages/OrderPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';

// Importa los contextos que se van a utilizar
import { CartProvider } from "./context/CartContext";
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<HomeAdminPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/clientOrder' element={<ClientOrderPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
};

export default App;