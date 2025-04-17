import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getAuthHeaders } from "../../auth";

//For testing, hardcoded some entries
function AdminInventory() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inventory, setInventory] = useState<any>();
  const [newItem, setNewItem] = useState({ productName: "", stock: 0, price: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleItemChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setInventory((prev: any) => {
      prev[i][e.target.name] = e.target.value;
      return [...prev];
    });
  };

  const handleAddItem = async () => {
    if (newItem.productName && newItem.stock > 0) {
      setIsLoading(true);

      await fetch(`/api/Product/AddProduct`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(newItem)
      });

      fetchInventory();
    }
  };

  const fetchInventory = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/Product/GetProducts`, {
          headers: getAuthHeaders()
      });

      if (!res.ok) throw new Error("Failed to fetch products");

      const resData = await res.json();
      setInventory(resData.$values);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const editItem = async (i: number) => {
    setIsLoading(true);

    const item = inventory[i];

    await fetch(`/api/Product/EditProduct/${item.id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(item)
    });

    fetchInventory();
  }

  const deleteItem = async (i: number) => {
    setIsLoading(true);

    const item = inventory[i];

    await fetch(`/api/Product/DeleteProduct/${item.id}`, {
      method: "DELETE",
      headers: getAuthHeaders()
    });

    fetchInventory();
  }

  return (
    <div>
      <PageContainer
        isLoading={isLoading}
        content={isLoading ? null : 
          <div className="w-fit m-auto mt-4">
            <h1 className="text-xl font-bold mb-4">Admin Inventory</h1>
            <div className="mb-4 flex flex-col gap-2">
              <input
                type="text"
                name="productName"
                placeholder="Item Name"
                value={newItem.productName}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="stock"
                placeholder="Quantity"
                value={newItem.stock}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="string"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Item
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {inventory.map((item: any, i: number) => (
                <div className="px-4 py-2 border border-gray-200 rounded-md flex justify-between items-center">
                  <div className="flex gap-4 px-4">
                    <input type="text" name="productName" value={item.productName} onChange={(e) => {handleItemChange(i, e)}}></input>
                    <input type="number" name="stock" value={item.stock} onChange={(e) => {handleItemChange(i, e)}}></input>
                    <input type="text" name="price" value={item.price} onChange={(e) => {handleItemChange(i, e)}}></input>
                  </div>
                  <div className="flex flex-row gap-2">
                    <button type="button" onClick={() => { editItem(i); }}
                      className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><EditIcon/></button>
                    <button type="button" onClick={() => { deleteItem(i); }}
                      className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><DeleteIcon/></button>
                  </div>
              </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}

export default AdminInventory;