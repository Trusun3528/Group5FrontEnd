import { Link } from "react-router-dom";

function StoreItem(props: any) {
    return (
        <div className="p-2 border border-gray-200 rounded-md">
            <Link to={`/details/${props.item.id}`}>
                <img src={props.item.imageURL} className="w-[200px]"></img>
            </Link>
            <div className="p-2">
                <h1 className="font-bold">{props.item.productName}</h1>
                <span>${props.item.price}</span>
            </div>
        </div>
    )
}

export default StoreItem;