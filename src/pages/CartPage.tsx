import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";
import CartItem from "./components/CartItem";

function CartPage() {
  const [cartItems, setCartItems] = useState<any>(null);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(`api/Cart/GetCartItems/${1}`, {
          method: 'GET',
          headers: getAuthHeaders()
        }
      );
      
      setCartItems((await response.json()).$values);
    })()
  }, [])

  const isLoading = cartItems == null

  return (
    <PageContainer
      isLoading={isLoading}
      content={isLoading ? null :
      <div className="flex gap-2">
        {cartItems.map((cartItem) => <CartItem name="test" price={1} quantity={1} />)}
      </div>}>
    </PageContainer>
  )
}

export default CartPage;