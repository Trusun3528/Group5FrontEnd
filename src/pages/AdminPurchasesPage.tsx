import AdminPurchase from "./components/AdminPurchase";
import Header from "./components/Header";

function AdminPurchasesPage() {
  return (
    <div>
        <Header />

        <div className="w-fit m-auto mt-4">
            <h1 className="text-xl mb-4 font-bold">All purchases</h1>
            <div className="flex flex-col gap-2 w-[400px]">
                <AdminPurchase />
                <AdminPurchase />
                <AdminPurchase />
                <AdminPurchase />
            </div>
        </div>
        
    </div>
  )
}

export default AdminPurchasesPage;