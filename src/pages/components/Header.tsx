import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import { isLoggedIn, logOut } from "../../auth";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const loggedIn = isLoggedIn();

  return (
    <header className="w-full h-[65px] shadow items-center flex justify-between p-4">
      <div>
        <Link to="/">The Impossible Store</Link>
      </div>

      <div className="flex gap-4 items-center">
        {/*Admin Panel Button for Testing (Always Visible*/}
        <button 
          onClick={() => navigate("/admin")} 
          className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">Admin Panel</button>

        {loggedIn ? (
          <div>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              <MenuIcon />
            </button>
            {dropdown && (
              <div
                className="m-2 p-4 gap-2 flex flex-col bg-white origin-top-right absolute
                        right-0 rounded-md shadow-md border border-gray-300"
                role="menu"
              >
                <Link to="/cart">
                  <ShoppingCartIcon /> View cart (0)
                </Link>
                <Link to="/admin/purchases">
                  <StoreIcon /> View purchases (admin)
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    logOut();
                    navigate("/");
                  }}
                >
                  <LogoutIcon /> Log out
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="gap-2 flex">
            <Link to="/login" className="text-black px-4 py-2 font-bold outline rounded-full">
              Log in
            </Link>
            <Link to="/register" className="bg-black text-white px-4 py-2 rounded-full font-bold">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;