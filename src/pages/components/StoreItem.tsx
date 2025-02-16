function StoreItem() {
    return (
        <div className="p-2 border border-gray-200 rounded-md">
            <a href="/details">
                <div className="bg-red-500 w-[150px] h-[150px] rounded-md"></div>
            </a>
            <div className="p-2">
                <h1 className="font-bold">Item name</h1>
                <span>$19.99</span>
            </div>
        </div>
    )
}

export default StoreItem;