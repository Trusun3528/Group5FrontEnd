import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";
import CartItem from "./components/CartItem";


function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // HARDCODED FOR TESTING
  // When changing to dynamic,we can either pull user ID from auth state, localStorage/sessionStorage,
  //  or a backend GET /auth/me-style endpoint using JWT
  const userId = 2; // Replace this with dynamic logic when using auth

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const userRes = await fetch(`http://localhost:5251/Account/GetUser/${userId}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");

        const userData = await userRes.json();
        const cartList = userData?.carts?.$values;
        if (!cartList || cartList.length === 0) {
          throw new Error("No cart found for this user");
        }

        const cartId = cartList[0].id;

        const cartRes = await fetch(`http://localhost:5251/Cart/GetCart/${cartId}`);
        if (!cartRes.ok) throw new Error("Failed to fetch cart");

        const cartData = await cartRes.json();
        setCart(cartData);
      } catch (err) {
        console.error("Error fetching user cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCart();
  }, []);

  if (loading) return <p className="p-4">Loading cart...</p>;
  if (!cart) return <p className="p-4">Cart not found.</p>;

  const cartItems = cart.cartItems?.$values || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-lg p-4 shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product?.imageURL}
                  alt={item.product?.productName}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.product?.productName}
                  </h2>
                  <p className="text-gray-600">
                    {item.product?.productDescription}
                  </p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;