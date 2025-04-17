import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/CartPage";
import ThankYouPage from "./pages/ThankYouPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserWishlistPage from "./pages/UserWishlistPage";
import ProfilePage from "./pages/ProfilePage";
// Admin Pages
import AdminPurchasesPage from "./pages/admin/AdminPurchasesPage";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminInventory from "./pages/admin/AdminInventory";
// business pages
import Privacy from "./pages/business/Privacy";
import TermsOfService from "./pages/business/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="details/:id" element={<ItemDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="wishlist" element={<UserWishlistPage />} />
        <Route path="profile" element={<ProfilePage />} />
        
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="admin/purchases" element={<AdminPurchasesPage />} />
        <Route path="/admin/inventory" element={<AdminInventory />} />

        <Route path="/business/privacy" element={<Privacy />} />
        <Route path="/business/TOS" element={<TermsOfService />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);