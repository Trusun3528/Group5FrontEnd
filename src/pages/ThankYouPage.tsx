import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";

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

export default function ThankYouPage() {
    const location = useLocation();
    const state = location.state as { order: any; cartData: CartData } | undefined;

    const order = state?.order;
    const cartData = state?.cartData;

    const [cart, setCart] = useState<CartData | null>(null);

    useEffect(() => {
        if (cartData && Array.isArray(cartData.items)) {
            console.log("cartData:", cartData);
            setCart(cartData);
        } else {
            console.warn("Invalid or missing cartData:", cartData);
        }
    }, [cartData]);

    const isLoading = cart === null;

    return (
        <div>
            <Header onLogoClick={() => { }} />

            <div className="max-w-2xl mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
                <h1 className="text-2xl font-bold mb-4">Purchase Summary</h1>
                <div className="border-b pb-4 mb-4">
                    <p className="text-lg">Thank you for your purchase! Please pay in person at the store.</p>
                </div>
                <div className="space-y-4">
                    {isLoading ? (
                        <p>Loading cart...</p>
                    ) : (
                        cart.items.map((item: any) => (
                            <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100" key={item.id}>
                                <div>
                                    <span className="block text-sm text-gray-600">Name: {item.product.productName}</span>
                                    <span className="block text-sm text-gray-600">Quantity: {item.quantity}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-sm text-gray-600">Price: ${item.product.price.toFixed(2)}</span>
                                    <span className="block text-sm text-gray-600">Total Before the Discount: ${(item.quantity * item.product.price).toFixed(2)}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {!isLoading && (
                    <div className="border-t pt-4 mt-4 text-lg font-bold">
                        Total: ${cart.total.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    );
}