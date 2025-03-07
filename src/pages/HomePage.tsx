import Header from "./components/Header";
import StoreItem from "./components/StoreItem";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="m-4 flex gap-2">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    </div>
  )
}

export default LandingPage;