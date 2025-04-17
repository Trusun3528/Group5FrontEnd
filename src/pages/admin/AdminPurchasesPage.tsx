import { useEffect, useState } from "react";
import AdminPurchase from "../components/AdminPurchase";
import Header from "../components/Header";
import { getAuthHeaders } from "../../auth";
import PageContainer from "../components/PageContainer";

function AdminPurchasesPage() {
  const [orders, setOrders] = useState<any>(null);

  const isLoading = orders == null;

  const fetchOrders = async () => {
    try {
      const res = await fetch(`/api/Order/GetOrders`, {
          headers: getAuthHeaders()
      });

      if (!res.ok) throw new Error("Failed to fetch orders");

      const resData = await res.json();
      setOrders(resData.$values);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
    }, []);

  return (
    <PageContainer
        isLoading={isLoading}
        content={isLoading ? null : orders.map((order: any) => (
          <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100" key={order.id}>
              <div>
                <span className="block text-sm text-gray-600">User: {order.user ? order.user.userName : "None" }</span>
                <span className="block text-sm text-gray-600">Date: {order.orderDate}</span>
                <span className="block text-sm text-gray-600">Items: {order.orderItems.$values.map((item: any) => item.product.productName + " (x" + item.quantity + ")").join(", ")}</span>
              </div>
          </div>
        ))} />
  )
}

export default AdminPurchasesPage;