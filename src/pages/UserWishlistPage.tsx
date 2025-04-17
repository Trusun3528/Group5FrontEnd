import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";

interface WishlistItem {
  id: number;
  title: string;
  description?: string;
  price?: number;
}

function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`api/WishList/GetWishlist`, {
          method: "GET",
          headers: getAuthHeaders(),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wishlist");
        }

        const data = await response.json();
        setWishlist(data.$values ?? data);
      } catch (err) {
        console.error("Error loading wishlist:", err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleRemove = async (productId: number) => {
  try {
    const response = await fetch(`/api/WishList/DeleteFromWishlist/${productId}`, {
      method: "DELETE",
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error("Failed to remove item from wishlist.");
    }

    // Re-fetch wishlist after deletion
    const updatedResponse = await fetch(`/api/WishList/GetWishlist`, {
      headers: getAuthHeaders()
    });

    const updatedWishlist = await updatedResponse.json();
    setWishlist(updatedWishlist.$values ?? updatedWishlist);
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    alert("Failed to remove item from wishlist.");
  }
};

  return (
    <PageContainer
      isLoading={isLoading}
      content={
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Your Wishlist</h1>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex items-center justify-between gap-6"
              >
                <span className="flex-1 font-medium">{item.productName}</span>
                <span className="text-gray-700">${item.price}</span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      }
    />
  );
}

export default WishlistPage;