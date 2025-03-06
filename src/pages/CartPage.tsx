import Header from "./components/Header";
import CartItem from "./components/CartItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartPage() {
  return (
    <div>
        <Header />

        <div className="w-fit m-auto mt-4">
            <h1 className="text-xl mb-4 font-bold">Your cart (0)</h1>
            <div className="flex flex-col gap-2 w-[400px]">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <button type="button" className="bg-black text-white px-4 py-2 rounded-full font-bold mt-4"><ShoppingCartIcon/> Checkout</button>
        </div>
        
    </div>
  )
}

export default CartPage;