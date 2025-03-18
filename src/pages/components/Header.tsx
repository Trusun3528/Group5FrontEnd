import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const loggedIn = localStorage.getItem('access-token') != null;

    let headerRight;
    
    if (loggedIn) {
        headerRight = (
            <div>
                <button type="button" onClick={() => {setDropdown(!dropdown);}}><MenuIcon/></button>
                {dropdown && (
                    <div className="m-2 p-4 gap-2 flex flex-col bg-white origin-top-right absolute
                        right-0 rounded-md shadow-md border border-gray-300" role="menu">
                        <Link to="/admin/purchases"><StoreIcon/> View purchases (admin)</Link>
                        <Link to="/cart"><ShoppingCartIcon/> View cart (0)</Link>
                        <Link to="/profile"><PersonIcon/> View profile</Link>
                        <Link to="/" onClick={() => {
                            localStorage.removeItem('access-token')
                        }}><LogoutIcon/> Log out</Link>
                    </div>
                )} 
            </div>
        )
    }
    else {
        headerRight = (
            <div className="gap-2 flex">
                <Link to="/login" className="text-black px-4 py-2 font-bold outline rounded-full">Log in</Link>
                <Link to="/register" className="bg-black text-white px-4 py-2 rounded-full font-bold">Register</Link>
            </div>
        )
    }

    return (
        <header className="w-full h-[65px] shadow items-center flex justify-between p-4">
            <div>
                <Link to="/">The Useless Store</Link>
            </div>
            {headerRight}
        </header>
    )
}

export default Header;