import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";

function ItemDetailsPage() {
    const [item, setItem] = useState<any>(null);
    const { id } = useParams()

    useEffect(() => {
    (async () => {
        const response = await fetch(`/api/Product/GetProducts/${id}`)
        setItem((await response.json()))
    })()
    }, [])

    const isLoading = item == null
  
    return (
      <PageContainer
        isLoading={isLoading}
        content={isLoading ? null : <>
        <Link to="/" className="mb-2 text-white bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center"><ArrowBackIcon/></Link>
        <div className="flex gap-3">
            <img src={item.imageURL} className="w-[300px]"></img>
            <div className="flex flex-col justify-between w-[400px]">
                <div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-bold">
                                {item.productName}
                            </h1>
                            <span>${item.price}</span>
                        </div>
                        <div className="flex flex-col">
                            <span>{item.stock} in stock</span>
                            <span>{item.catagory}</span>
                        </div>
                    </div>
                    <hr className="text-gray-200 my-2"/>
                    <span>{item.productDescription}</span>
                </div>
                <form className="flex flex-col gap-3 w-[100px]">
                    <div>
                        <label>Quantity:</label>
                        <input type="number" placeholder="1" required />
                    </div>
                    <button type="submit" className="text-white bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center"><ShoppingCartIcon/></button>
                </form>
                
            </div>
        </div>
        </>}>
      </PageContainer>
    )
}

export default ItemDetailsPage;