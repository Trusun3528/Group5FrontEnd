import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders, isLoggedIn } from "../auth";
import CartItem from "./components/CartItem";

interface CartItem {
    id: number;
    quantity: number;
    product: {
        name: string;
        price: number;
    };
}

interface CartData {
    items: CartItem[];
    total: number;
}

function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const navigate = useNavigate();
    const loggedIn = isLoggedIn();

    const fetchUserCart = async () => {
        try {
            const cartRes = await fetch(`/api/UserCart/GetCart`, {
                headers: getAuthHeaders()
            });

            if (!cartRes.ok) throw new Error("Failed to fetch cart");

            const cartData = await cartRes.json();
            setCart(cartData.$values);

            const calculatedTotal = cartData.$values.reduce(
                (acc: number, item: CartItem) => acc + item.product.price * item.quantity,
                0
            );
            setTotalPrice(calculatedTotal);
            setIsLoading(false);
        } catch (err) {
            console.error("Error fetching user cart:", err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserCart();
    }, []);

    const applyDiscount = () => {
        if (!discountApplied) {
            setTotalPrice(prev => prev * 0.9);
            setDiscountApplied(true);
        }
    };

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const res = await fetch("/api/UserCart/Checkout", {
                method: "POST",
                headers: getAuthHeaders(),
            });

            let body = null;
            const text = await res.text();

            if (text) {
                body = JSON.parse(text);
            }

            if (!res.ok) {
                console.error("Checkout error:", body || text);
                throw new Error(body?.message || "Checkout failed");
            }

            navigate("/thank-you", { state: { order: body, cartData: { items: cart ?? [], total: totalPrice } } });
        } catch (err) {
            console.error("Checkout error:", err);
            const message = err instanceof Error ? err.message : "Checkout failed. Please try again.";
            alert(message);
        } finally {
            setIsCheckingOut(false);
        }
    };

    const removeItemCallback = async (itemId: number) => {
        setIsLoading(true);

        await fetch(`/api/UserCart/RemoveItem/${itemId}`, {
            method: "DELETE",
            headers: getAuthHeaders()
        });

        fetchUserCart();
    };

    return (
        <PageContainer
            isLoading={isLoading}
            content={
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {cart && cart.length === 0 ? (
                            "Cart is empty."
                        ) : (
                            cart?.map((cartItem: CartItem) => (
                                <CartItem
                                    key={cartItem.id}
                                    id={cartItem.id}
                                    quantity={cartItem.quantity}
                                    product={cartItem.product}
                                    removeItemCallback={removeItemCallback}
                                />
                            ))
                        )}
                        <div className="mt-4">
                            <p>Total Price: ${totalPrice.toFixed(2)}</p>
                            {loggedIn && (
                                <div className="bg-blue-100 p-4 rounded-xl mt-4">
                                    <button
                                        className="ml-2 p-2 bg-blue-600 text-white rounded"
                                        onClick={applyDiscount}
                                        disabled={discountApplied}
                                    >
                                        {discountApplied
                                            ? "Discount Applied"
                                            : "Apply The Valued Customer Discount"}
                                    </button>
                                </div>
                            )}

                            <button
                                className={`ml-2 p-2 rounded mt-4 ${isCheckingOut ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} text-white`}
                                onClick={handleCheckout}
                                disabled={isCheckingOut}
                            >
                                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                            </button>
                        </div>
                    </div>
                )
            }
        />
    );
}

export default CartPage;