import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";

function CartPage() {
  const [cart, setCart] = useState<any>(null);
  
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/Cart/GetUserCart", {
          method: 'GET',
          headers: getAuthHeaders()
        }
      );
      
      setCart((await response.json()));
    })()
  }, [])

  const isLoading = cart == null

  return (
    <PageContainer
      isLoading={isLoading}
      content={isLoading ? null :
      <div className="flex gap-2">
        {cart.toString()}
      </div>}>
    </PageContainer>
  )
}

export default CartPage;