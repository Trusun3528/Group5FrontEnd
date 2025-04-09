import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getAuthHeaders } from "../auth";

function ThankYouPage() {
  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/Cart/GetCarts", {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      const data = await response.json();
      setCart(data[0]); // Assuming the user has only one cart, take the first one.
    })();
  }, []);

  const isLoading = cart == null;

  // Calculate the total if cart and cart items are loaded
  const total = cart ? cart.TotalAmount : 0;

  return (
    <div>
      <Header />

      <div className="max-w-2xl mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Purchase Summary</h1>

        <div className="border-b pb-4 mb-4">
          <p className="text-lg">Thank you for your purchase! Please pay in person at the store.</p>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <p>Loading cart...</p>
          ) : (
            cart.CartItems?.map((item: any) => (
              <div className="flex justify-between" key={item.id}>
                <span>{item.Product.name}</span>
                <span>{item.Quantity} x ${item.Price.toFixed(2)}</span>
                <span>${(item.Quantity * item.Price).toFixed(2)}</span>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4 mt-4 text-lg font-bold">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;