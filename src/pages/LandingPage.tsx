import StoreItemDisplay from "./components/StoreItemDisplay";

function LandingPage() {
  return (
    <div className="text-center m-8">
      <h1 className="text-3xl font-bold">Welcome to the useless store</h1>
      <h2>Where everything is useless!</h2>

      <StoreItemDisplay />
    </div>
  )
}

export default LandingPage;