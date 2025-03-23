import { Link } from "react-router-dom";
import Header from "../../components/Header";

function AdminPanel() {
  return (
    <div>
      <Header/>
      <div className = "w-fit m-auto mt-4 text-center">
        <h1 className = "text-xl mb-4 font-bold">Admin Panel</h1>
        <div className = "flex flex-col gap-4">
          <Link to = "/admin/purchases" className = "bg-blue-500 text-white px-4 py-2 rounded-md text-lg">
            Manage Purchases
          </Link>
          <Link to = "/admin/inventory" className = "bg-green-500 text-white px-4 py-2 rounded-md text-lg">
            Manage Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;