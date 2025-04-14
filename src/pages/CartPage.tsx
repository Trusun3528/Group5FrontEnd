import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";
import CartItem from "./components/CartItem";


function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchUserCart = async () => {
    try {
      const cartRes = await fetch(
        `/api/UserCart/GetCart`, {
          headers: getAuthHeaders()
        });
      if (!cartRes.ok) throw new Error("Failed to fetch cart");

      const cartData = await cartRes.json();
      setCart(cartData);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching user cart:", err);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  const removeItemCallback = async (itemId: number) => {
    setIsLoading(true);

    await fetch(`/api/UserCart/RemoveItem/${itemId}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    fetchUserCart();
  }

  return (
    <PageContainer isLoading={isLoading} content={isLoading ? null :
      <div>
        {cart.$values.length == 0 ? "Cart is empty." : 
        cart.$values.map((cartItem: any) => (<CartItem
            key={cartItem.id}
            id={cartItem.id}
            quantity={cartItem.quantity}
            product={cartItem.product}
            removeItemCallback={removeItemCallback} />))}
      </div>
    }></PageContainer>
  )
}

export default CartPage;