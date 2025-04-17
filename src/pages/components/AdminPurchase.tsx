import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function AdminPurchase() {
    return (
        <div className="px-4 py-2 border border-gray-200 rounded-md flex justify-between items-center">
            <div>
                <p><b>Item name</b> (x1 to User)</p>
                <p>$19.99</p>
                <p>Jan 1, 2025, 3:00 PM</p>
            </div>
        </div>
    )
}

export default AdminPurchase;