import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CartItem(props: any) {
    return (
        <div className="px-4 py-2 border border-gray-200 rounded-md flex justify-between items-center w-[500px]">
            <div>
                <p><b>{props.name}</b> (x{props.quantity})</p>
                <p>${props.price}</p>
            </div>
            <div className="flex flex-row gap-2">
                <Link to="/details" className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><EditIcon/></Link>
                <Link to="/cart" className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><DeleteIcon/></Link>
            </div>
        </div>
    )
}

export default CartItem;