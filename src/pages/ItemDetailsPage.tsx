import Header from "./components/Header";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function ItemDetailsPage() {
  return (
    <div>
      <Header />
      <div className="m-4 flex flex-col gap-3">
        <Link to="/" className="text-white bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center"><ArrowBackIcon/></Link>
        <div className="flex gap-3">
            <div className="bg-red-500 w-[300px] h-[300px] rounded-md"></div>
            <div className="flex flex-col justify-between w-[400px]">
                <div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-bold">
                                Item name
                            </h1>
                            <span>$19.99</span>
                        </div>
                        <div className="flex flex-col">
                            <span>10 in stock</span>
                            <span>Electronics</span>
                        </div>
                    </div>
                    <hr className="text-gray-200 my-2"/>
                    <p>This is an item description.</p>
                </div>
                <Link to="/" className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><ShoppingCartIcon/></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailsPage;