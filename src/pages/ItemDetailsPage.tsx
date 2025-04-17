import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders } from "../auth";

function ItemDetailsPage() {
    const [item, setItem] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/Product/GetProducts/${id}`);
            setItem(await response.json());
            setIsLoading(false);
        })();
    }, [id]);

    const handleAddToCart = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!item) return;

    try {
        setIsLoading(true);

        const response = await fetch(`/api/UserCart/AddItem`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                productId: id,
                quantity: quantity
            })
        });

        if (!response.ok) {
            setIsLoading(false);
            throw new Error(`Failed to add to cart.`);
        }

        setIsLoading(false);
        alert("Item added to cart!");
    } catch (error) {
        console.error("Error adding item to cart:", error);
        alert("Failed to add item to cart.");
    }
};

const handleAddToWishlist = async () => {
    if (!item) return;

    try {
        setIsLoading(true);

        const response = await fetch(`/api/WishList/AddToWishlist?productId=${id}` , {
            method: "POST",
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            setIsLoading(false);
            throw new Error("Failed to add to wishlist.");
        }

        setIsLoading(false);
        alert("Item added to wishlist!");
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        alert("Failed to add item to wishlist.");
    }
};

    return (
        <PageContainer
            isLoading={isLoading}
            content={isLoading ? null : (
                <>
                    <Link to="/" className="mb-2 text-white bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center">
                        <ArrowBackIcon />
                    </Link>
                    <div className="flex gap-3">
                        <img src={item.imageURL} className="w-[300px]" alt={item.productName} />
                        <div className="flex flex-col justify-between w-[400px]">
                            <div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-xl font-bold">{item.productName}</h1>
                                        <span>${item.price}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{item.stock} in stock</span>
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                                <hr className="text-gray-200 my-2" />
                                <span>{item.productDescription}</span>
                            </div>
                            <form className="flex flex-col gap-3 w-[100px]" onSubmit={handleAddToCart}>
                                <div>
                                    <label>Quantity:</label>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={quantity} 
                                        onChange={(e) => setQuantity(Number(e.target.value))} 
                                        required 
                                    />
                                </div>
                                <button type="submit" className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center">
                                    <ShoppingCartIcon />
                                </button>
                            </form>
                            <button
                                onClick={handleAddToWishlist}
                                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </>
            )}
        />
    );
}

export default ItemDetailsPage;