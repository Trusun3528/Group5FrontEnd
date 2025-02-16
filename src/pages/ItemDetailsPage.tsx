import Header from "./components/Header";

function ItemDetailsPage() {
  return (
    <div>
      <Header />
      <div className="m-4 flex gap-2">
        <h1 className="text-xl font-bold">
            Item name
        </h1>
      </div>
    </div>
  )
}

export default ItemDetailsPage;