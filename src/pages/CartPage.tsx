import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders, isLoggedIn } from "../auth";
import CartItem from "./components/CartItem";

function CartPage() {
    const [cart, setCart] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const navigate = useNavigate();
    const loggedIn = isLoggedIn();

    const fetchUserCart = async () => {
        try {
            const cartRes = await fetch(
                `/api/UserCart/GetCart`, {
                headers: getAuthHeaders()
            });
            if (!cartRes.ok) throw new Error("Failed to fetch cart");

            const cartData = await cartRes.json();
            setCart(cartData);
            setTotalPrice(cartData.$values.reduce((acc: number, item: any) => acc + item.product.price * item.quantity, 0));
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

    const applyDiscount = () => {
        if (!discountApplied) {
            setTotalPrice(totalPrice * 0.9);
            setDiscountApplied(true);
        }
    }

    return (
        <PageContainer isLoading={isLoading} content={isLoading ? null :
            <div>
                {cart.$values.length === 0 ? "Cart is empty." :
                    cart.$values.map((cartItem: any) => (
                        <CartItem
                            key={cartItem.id}
                            id={cartItem.id}
                            quantity={cartItem.quantity}
                            product={cartItem.product}
                            removeItemCallback={removeItemCallback} />
                    ))}
                <div className="mt-4">
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    {loggedIn && (
                        <div className="bg-blue-100 p-4 rounded-xl mt-4">
                                <button className="ml-2 p-2 bg-blue-600 text-white rounded" onClick={applyDiscount}>Apply The Valued Customer Discount</button>
                        </div>
                    )}                 
                </div>
            </div>
        }></PageContainer>
    )
}

export default CartPage;