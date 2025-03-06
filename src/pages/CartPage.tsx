import Header from "./components/Header";
import CartItem from "./components/CartItem";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartPage() {
  return (
    <div>
        <Header />

        <div className="m-4">
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