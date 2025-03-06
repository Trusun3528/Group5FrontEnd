import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function Header() {
    const [dropdown, setDropdown] = useState(false);

    const loggedIn = true;

    let headerRight;
    
    if (loggedIn) {
        headerRight = (
            <div>
                <button type="button" onClick={() => {setDropdown(!dropdown);}}><MenuIcon/></button>
                {dropdown && (
                    <div className="m-2 p-4 gap-2 flex flex-col bg-white origin-top-right absolute
                        right-0 rounded-md shadow-md border border-gray-300" role="menu">
                        <Link to="/cart"><ShoppingCartIcon/> View cart (0)</Link>
                        <Link to="/"><LogoutIcon/> Log out</Link>
                    </div>
                )} 
            </div>
        )
    }
    else {
        headerRight = (
            <div className="gap-2 flex">
                <button type="button" className="text-black px-4 py-2 font-bold outline rounded-full">Log in</button>
                <button type="button" className="bg-black text-white px-4 py-2 rounded-full font-bold">Register</button>
            </div>
        )
    }

    return (
        <header className="w-full h-[65px] shadow items-center flex justify-between p-4">
            <div>
                <Link to="/">Store logo</Link>
            </div>
            {headerRight}
        </header>
    )
}

export default Header;