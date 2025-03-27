import { useState } from "react";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";


//For testing, hardcoded some entries
function AdminInventory() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Bucket O' Steam", quantity: 10 },
    { id: 2, name: "Headlight Fluid", quantity: 5 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

 // For testing, does not persist
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0) {
      setInventory([...inventory, { id: inventory.length + 1, ...newItem }]);
      setNewItem({ name: "", quantity: 0 });
    }
  };

  return (
    <div>
      <PageContainer
        isLoading={false}
        content={
          <div className="w-fit m-auto mt-4">
            <h1 className="text-xl font-bold mb-4">Admin Inventory</h1>
            <div className="flex flex-col gap-2">
              {inventory.map((item) => (
                <div key={item.id} className="border p-2 rounded shadow">
                  {item.name} - Quantity: {item.quantity}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={newItem.name}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Item
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default AdminInventory;