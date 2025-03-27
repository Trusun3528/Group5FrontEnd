import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/CartPage";
import ThankYouPage from "./pages/ThankYouPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Admin Pages
import AdminPurchasesPage from "./pages/admin/AdminPurchasesPage";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminInventory from "./pages/admin/AdminInventory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="details/:id" element={<ItemDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="thankyou" element={<ThankYouPage />} />
        
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="admin/purchases" element={<AdminPurchasesPage />} />
        <Route path="/admin/inventory" element={<AdminInventory />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);